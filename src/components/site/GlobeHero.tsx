import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import type { ComponentType } from "react";

type Pt = { lat: number; lng: number; name: string; slug: string };
type Plane = { id: number; from: Pt; to: Pt; t: number; speed: number; lat: number; lng: number; heading: number };

const toRad = (d: number) => (d * Math.PI) / 180;
const toDeg = (r: number) => (r * 180) / Math.PI;

/** Great-circle interpolation between two lat/lng points. */
function interpolate(a: { lat: number; lng: number }, b: { lat: number; lng: number }, f: number) {
  const [lat1, lng1, lat2, lng2] = [toRad(a.lat), toRad(a.lng), toRad(b.lat), toRad(b.lng)];
  const d =
    2 *
    Math.asin(
      Math.sqrt(
        Math.sin((lat2 - lat1) / 2) ** 2 +
          Math.cos(lat1) * Math.cos(lat2) * Math.sin((lng2 - lng1) / 2) ** 2
      )
    );
  if (!d) return { lat: a.lat, lng: a.lng };
  const A = Math.sin((1 - f) * d) / Math.sin(d);
  const B = Math.sin(f * d) / Math.sin(d);
  const x = A * Math.cos(lat1) * Math.cos(lng1) + B * Math.cos(lat2) * Math.cos(lng2);
  const y = A * Math.cos(lat1) * Math.sin(lng1) + B * Math.cos(lat2) * Math.sin(lng2);
  const z = A * Math.sin(lat1) + B * Math.sin(lat2);
  return { lat: toDeg(Math.atan2(z, Math.sqrt(x * x + y * y))), lng: toDeg(Math.atan2(y, x)) };
}

function bearing(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  const [lat1, lat2] = [toRad(a.lat), toRad(b.lat)];
  const dLng = toRad(b.lng - a.lng);
  return toDeg(
    Math.atan2(
      Math.sin(dLng) * Math.cos(lat2),
      Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLng)
    )
  );
}

export function GlobeHero({ points, lang }: { points: Pt[]; lang: "ar" | "en" }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<any>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [GlobeComp, setGlobeComp] = useState<ComponentType<any> | null>(null);
  const [planes, setPlanes] = useState<Plane[]>([]);

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

  const pick = useCallback(() => points[Math.floor(Math.random() * points.length)], [points]);

  useEffect(() => {
    if (points.length < 2) return;
    const make = (id: number): Plane => {
      const from = pick();
      let to = pick();
      if (to === from) to = points[(points.indexOf(from) + 1) % points.length];
      const pos = interpolate(from, to, 0);
      return { id, from, to, t: 0, speed: 0.0012 + Math.random() * 0.0018, lat: pos.lat, lng: pos.lng, heading: bearing(from, to) };
    };
    let arr: Plane[] = Array.from({ length: 6 }, (_, i) => make(i));
    setPlanes(arr);

    let raf = 0;
    let last = performance.now();
    let lastRender = 0;
    const tick = (now: number) => {
      const dt = Math.min(now - last, 60);
      last = now;
      arr = arr.map((p) => {
        let t = p.t + p.speed * (dt / 16);
        if (t >= 1) {
          const from = p.to;
          let to = pick();
          if (to === from) to = points[(points.indexOf(from) + 1) % points.length];
          const pos = interpolate(from, to, 0);
          return { ...p, from, to, t: 0, lat: pos.lat, lng: pos.lng, heading: bearing(from, to) };
        }
        const pos = interpolate(p.from, p.to, t);
        const nxt = interpolate(p.from, p.to, Math.min(t + 0.01, 1));
        return { ...p, t, lat: pos.lat, lng: pos.lng, heading: bearing(pos, nxt) };
      });
      if (now - lastRender > 60) {
        lastRender = now;
        setPlanes(arr);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [points, pick]);

  const planeEl = useCallback((d: any) => {
    const el = document.createElement("div");
    el.style.pointerEvents = "none";
    el.style.transform = `rotate(${d.heading}deg)`;
    el.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="#f3e6c8" style="filter:drop-shadow(0 0 5px rgba(212,170,90,0.9))"><path d="M12 2c.7 0 1.3 1.1 1.3 2.4v4l7.2 4.3c.3.2.5.5.5.9v1.3l-7.7-2.2v4.2l2.4 1.7v1.6L12 19.4l-3.7.8v-1.6l2.4-1.7v-4.2L3 14.9v-1.3c0-.4.2-.7.5-.9l7.2-4.3v-4C10.7 3.1 11.3 2 12 2z"/></svg>`;
    return el;
  }, []);

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

  return (
    <div ref={wrapRef} className="absolute inset-0">
      {GlobeComp && size.w > 0 && (
        <GlobeComp
            ref={globeRef}
            width={size.w}
            height={size.h}
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
            htmlElementsData={planes}
            htmlLat="lat"
            htmlLng="lng"
            htmlAltitude={0.12}
            htmlElement={planeEl}
            htmlTransitionDuration={0}
            onPointClick={(d: any) => {
              if (d?.slug) window.location.href = `/${lang}/countries/${d.slug}`;
            }}
        />
      )}
    </div>
  );
}