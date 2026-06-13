import { lazy, Suspense, useEffect, useRef, useState, useMemo } from "react";

type Pt = { lat: number; lng: number; name: string; slug: string };

const Globe = lazy(() => import("react-globe.gl").then((m: any) => ({ default: m.default })));

export function GlobeHero({ points, lang }: { points: Pt[]; lang: "ar" | "en" }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<any>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!wrapRef.current) return;
    const update = () => {
      if (!wrapRef.current) return;
      setSize({ w: wrapRef.current.clientWidth, h: wrapRef.current.clientHeight });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(wrapRef.current);
    return () => ro.disconnect();
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
  }, [size.w, size.h, mounted]);

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

  return (
    <div ref={wrapRef} className="absolute inset-0">
      {mounted && size.w > 0 && (
        <Suspense fallback={null}>
          <Globe
            ref={globeRef as any}
            width={size.w}
            height={size.h}
            backgroundColor="rgba(0,0,0,0)"
            globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg"
            bumpImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png"
            atmosphereColor="#d4aa5a"
            atmosphereAltitude={0.2}
            pointsData={points}
            pointLat="lat"
            pointLng="lng"
            pointColor={() => "#d4aa5a"}
            pointAltitude={0.01}
            pointRadius={0.35}
            pointLabel={(d: any) =>
              `<div style="background:#10172a;color:#f3ead6;padding:6px 10px;border:1px solid #d4aa5a;border-radius:2px;font-family:Tajawal,Inter,sans-serif;font-size:12px">${d.name}</div>`
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
          />
        </Suspense>
      )}
    </div>
  );
}