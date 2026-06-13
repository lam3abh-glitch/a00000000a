import { useEffect, useRef, useState } from "react";

type Pt = { lat: number; lng: number; name: string; slug: string };

export function GlobeHero({ points, lang }: { points: Pt[]; lang: "ar" | "en" }) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const globeRef = useRef<any>(null);

  useEffect(() => {
    let cancelled = false;
    let resizeHandler: (() => void) | null = null;
    (async () => {
      const mod = await import("react-globe.gl");
      const Globe = (mod as any).default;
      if (cancelled || !ref.current) return;
      const w = ref.current.clientWidth;
      const h = ref.current.clientHeight;
      const bahrain = { lat: 26.07, lng: 50.55 };
      const arcs = points
        .filter((p) => p.slug !== "bahrain")
        .map((p) => ({
          startLat: bahrain.lat,
          startLng: bahrain.lng,
          endLat: p.lat,
          endLng: p.lng,
          color: ["rgba(212,170,90,0.15)", "rgba(212,170,90,0.6)"],
        }));
      const g = Globe()(ref.current)
        .width(w)
        .height(h)
        .backgroundColor("rgba(0,0,0,0)")
        .globeImageUrl("//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg")
        .atmosphereColor("#d4aa5a")
        .atmosphereAltitude(0.18)
        .pointsData(points)
        .pointLat("lat")
        .pointLng("lng")
        .pointColor(() => "#d4aa5a")
        .pointAltitude(0.01)
        .pointRadius(0.35)
        .pointLabel((d: any) => `<div style="background:#10172a;color:#f3ead6;padding:6px 10px;border:1px solid #d4aa5a;border-radius:2px;font-family:Tajawal,Inter,sans-serif;font-size:12px">${d.name}</div>`)
        .arcsData(arcs)
        .arcColor("color" as any)
        .arcStroke(0.4)
        .arcDashLength(0.4)
        .arcDashGap(0.6)
        .arcDashAnimateTime(4000)
        .arcAltitudeAutoScale(0.4)
        .onPointClick((d: any) => {
          if (d?.slug) window.location.href = `/${lang}/countries/${d.slug}`;
        });
      const ctrl = g.controls();
      ctrl.autoRotate = true;
      ctrl.autoRotateSpeed = 0.35;
      ctrl.enableZoom = false;
      g.pointOfView({ lat: 26, lng: 50, altitude: 2.4 }, 0);
      globeRef.current = g;
      resizeHandler = () => {
        if (!ref.current) return;
        g.width(ref.current.clientWidth).height(ref.current.clientHeight);
      };
      window.addEventListener("resize", resizeHandler);
      setReady(true);
    })();
    return () => {
      cancelled = true;
      if (resizeHandler) window.removeEventListener("resize", resizeHandler);
    };
  }, [points, lang]);

  return (
    <div className="absolute inset-0">
      <div ref={ref} className="absolute inset-0" />
      {!ready && (
        <div className="absolute inset-0 grid place-items-center text-cream/40 text-sm">…</div>
      )}
    </div>
  );
}