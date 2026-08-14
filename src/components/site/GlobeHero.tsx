import { useEffect, useRef, useState, useMemo } from "react";
import type { ComponentType } from "react";

type Pt = { lat: number; lng: number; name: string; slug: string };

export function GlobeHero({ points, lang }: { points: Pt[]; lang: "ar" | "en" }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<any>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [GlobeComp, setGlobeComp] = useState<ComponentType<any> | null>(null);

  useEffect(() => {
    let alive = true;
    import("react-globe.gl").then((m: any) => {
      if (!alive) return;
      const Comp = m.default ?? m.Globe ?? m;
      setGlobeComp(() => Comp as ComponentType<any>);
    }).catch((e) => console.error("globe import failed", e));
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
            onPointClick={(d: any) => {
              if (d?.slug) window.location.href = `/${lang}/countries/${d.slug}`;
            }}
            style={{ position: "absolute", left, top }}
        />
      )}
    </div>
  );
}