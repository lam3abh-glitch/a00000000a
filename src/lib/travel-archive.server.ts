import { CITY_ARTICLES } from "./city-articles";
import { franceGuides } from "./france-guides";

const MAX_CHARS = 18000;

/** Compact, plain-text digest of Ahmad's archive content bundled with the site. */
export function buildArchiveContext(): string {
  const parts: string[] = [];

  parts.push(
    "أرشيف سفير المحبة (موقع أحمد عبدالرحمن، 100region.com) — المحتوى المتوفر حالياً على الموقع:",
  );

  parts.push("\n## مدن فرنسا الموثقة في الأرشيف");
  for (const [slug, article] of Object.entries(CITY_ARTICLES)) {
    const headings = article.lines
      .filter((l) => l.kind === "H3" || l.kind === "H4" || l.kind === "H5")
      .map((l) => l.value.trim())
      .filter((v) => v && v !== "\\n");
    const firstParagraph =
      article.lines.find((l) => l.kind === "P" && l.value.trim().length > 40)?.value.trim() ?? "";
    parts.push(
      `### ${slug} — ${article.title}\n${firstParagraph.slice(0, 700)}\nالأماكن المذكورة: ${headings.join(" ، ")}\nالمصدر: ${article.sourceUrl}`,
    );
  }

  parts.push("\n## أدلة فرنسا في الأرشيف");
  for (const guide of franceGuides) {
    const headings = guide.blocks
      .filter((b) => b.kind === "H3")
      .map((b) => b.ar?.trim())
      .filter(Boolean);
    const firstParagraph = guide.blocks.find((b) => b.kind === "P" && (b.ar ?? "").length > 40)?.ar;
    parts.push(
      `### /ar/countries/france/guides/${guide.slug} — ${guide.titleAr}\n${(firstParagraph ?? "").slice(0, 500)}\nالعناوين: ${headings.slice(0, 40).join(" ، ")}`,
    );
  }

  return parts.join("\n").slice(0, MAX_CHARS);
}