import { useEffect, useRef, useState, useMemo } from "react";
import type { ComponentType } from "react";

type Pt = { lat: number; lng: number; name: string; slug: string };

export function GlobeHero({ points, lang }: { points: Pt[]; lang: "ar" | "en" }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<any>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [GlobeComp, setGlobeComp] = useState<ComponentType<any> | null>(null);
  const [THREE, setTHREE] = useState<any>(null);

  useEffect(() => {
    let alive = true;
    import("react-globe.gl").then((m: any) => {
      if (!alive) return;
      const Comp = m.default ?? m.Globe ?? m;
      setGlobeComp(() => Comp as ComponentType<any>);
    }).catch((e) => console.error("globe import failed", e));
    import("three").then((m: any) => { if (alive) setTHREE(m); }).catch(() => {});
    if (!wrapRef.current) return;
    const update = () => {
      if (!wrapRef.current) return;
      setSize({ w: wrapRef.current.clientWidth, h: wrapRef.current.clientHeight });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(wrapRef.current);
    return () => { alive = false; ro.disconnect(); };
  }, []);

  useEffect(() => {
    const g = globeRef.current;
    if (!g) return;
    try {
      const ctrl = g.controls();
      ctrl.autoRotate = true;
      ctrl.autoRotateSpeed = 0.4;
      ctrl.enableZoom = false;
      g.pointOfView({ lat: 26, lng: 50, altitude: 2.5 }, 0);
    } catch {}
  }, [size.w, size.h, GlobeComp]);

  const bahrain = { lat: 26.07, lng: 50.55 };
  const arcs = useMemo(
    () =>
      points
        .filter((p) => p.slug !== "bahrain")
        .map((p) => ({
          startLat: bahrain.lat,
          startLng: bahrain.lng,
          endLat: p.lat,
          endLng: p.lng,
          color: ["rgba(212,170,90,0.15)", "rgba(212,170,90,0.7)"] as [string, string],
        })),
    [points]
  );

  const scale = 0.85;
  const globeW = Math.round(size.w * scale);
  const globeH = Math.round(size.h * scale);
  const left = Math.round((size.w - globeW) / 2);
  const top = Math.round((size.h - globeH) / 2);

  // ---- animated airplanes ----
  const planes = useMemo(
    () =>
      [
        { lat0: 26, lng0: 50, tilt: 28, phase: 0, speed: 0.055, alt: 0.22 },
        { lat0: 0, lng0: 0, tilt: -42, phase: 2.1, speed: 0.042, alt: 0.3 },
        { lat0: 0, lng0: 0, tilt: 62, phase: 4.2, speed: 0.048, alt: 0.26 },
        { lat0: 0, lng0: 0, tilt: -12, phase: 1.1, speed: 0.038, alt: 0.34 },
      ].map((p, i) => ({ ...p, id: i, __mesh: null as any })),
    []
  );

  const makePlane = useMemo(() => {
    if (!THREE) return undefined;
    return (d: any) => {
      const mat = new THREE.MeshBasicMaterial({ color: 0xf5f0e8 });
      const group = new THREE.Group();
      const body = new THREE.Mesh(new THREE.ConeGeometry(0.55, 2.6, 8), mat);
      body.rotation.x = Math.PI / 2;
      const wings = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.16, 0.8), mat);
      const tail = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.14, 0.5), mat);
      tail.position.z = 1.0;
      group.add(body, wings, tail);
      group.scale.setScalar(0.9);
      d.__mesh = group;
      return group;
    };
  }, [THREE]);

  useEffect(() => {
    if (!THREE || !GlobeComp || !size.w) return;
    let raf = 0;
    const start = performance.now();
    const tick = () => {
      const g = globeRef.current;
      if (g) {
        const t = (performance.now() - start) / 1000;
        for (const p of planes) {
          if (!p.__mesh) continue;
          const ang = p.phase + t * p.speed * Math.PI * 2;
          const tilt = (p.tilt * Math.PI) / 180;
          // circular orbit on a tilted great circle
          const x = Math.cos(ang);
          const y = Math.sin(ang) * Math.cos(tilt);
          const z = Math.sin(ang) * Math.sin(tilt);
          const lat = (Math.asin(z) * 180) / Math.PI;
          const lng = (Math.atan2(y, x) * 180) / Math.PI;
          const c = g.getCoords(lat, lng, p.alt);
          const nextAng = ang + 0.01;
          const nx = Math.cos(nextAng);
          const ny = Math.sin(nextAng) * Math.cos(tilt);
          const nz = Math.sin(nextAng) * Math.sin(tilt);
          const n = g.getCoords((Math.asin(nz) * 180) / Math.PI, (Math.atan2(ny, nx) * 180) / Math.PI, p.alt);
          p.__mesh.position.set(c.x, c.y, c.z);
          p.__mesh.up.set(c.x, c.y, c.z).normalize();
          p.__mesh.lookAt(n.x, n.y, n.z);
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [THREE, GlobeComp, size.w, planes]);

  return (
    <div ref={wrapRef} className="absolute inset-0">
      {GlobeComp && size.w > 0 && (
        <GlobeComp
            ref={globeRef}
            width={globeW}
            height={globeH}
            backgroundColor="rgba(0,0,0,0)"
            globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg"
            bumpImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png"
            atmosphereColor="#3b82f6"
            atmosphereAltitude={0.25}
            pointsData={points}
            pointLat="lat"
            pointLng="lng"
            pointColor={() => "#d4aa5a"}
            pointAltitude={0.01}
            pointRadius={0.35}
            pointLabel={(d: any) =>
              `<div style="background:#F5F0E8;color:#2C1810;padding:6px 10px;border:1px solid #d4aa5a;border-radius:2px;font-family:Tajawal,Inter,sans-serif;font-size:12px">${d.name}</div>`
            }
            arcsData={arcs}
            arcColor={"color" as any}
            arcStroke={0.4}
            arcDashLength={0.4}
            arcDashGap={0.6}
            arcDashAnimateTime={3500}
            arcAltitudeAutoScale={0.4}
            customLayerData={makePlane ? planes : []}
            customThreeObject={makePlane}
            customThreeObjectUpdate={() => {}}
            onPointClick={(d: any) => {
              if (d?.slug) window.location.href = `/${lang}/countries/${d.slug}`;
            }}
            style={{ position: "absolute", left, top }}
        />
      )}
    </div>
  );
}