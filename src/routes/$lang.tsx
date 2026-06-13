import { createFileRoute, Outlet, notFound, useParams } from "@tanstack/react-router";
import { useEffect } from "react";
import { isLang, type Lang, dir } from "@/lib/i18n";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/$lang")({
  beforeLoad: ({ params }) => {
    if (!isLang(params.lang)) throw notFound();
  },
  component: LangLayout,
});

function LangLayout() {
  const { lang } = useParams({ from: "/$lang" }) as { lang: Lang };
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir(lang);
  }, [lang]);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header lang={lang} />
      <main>
        <Outlet />
      </main>
      <Footer lang={lang} />
    </div>
  );
}