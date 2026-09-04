export type ArticleLineKind = "H3" | "H4" | "H5" | "P" | "LI" | "IMG";

export type ArticleLine = {
  kind: ArticleLineKind;
  value: string;
};

export type CityArticle = {
  sourceUrl: string;
  title: string;
  heroImage: string;
  lines: ArticleLine[];
};

export function lines(raw: string): ArticleLine[] {
  return raw
    .trim()
    .split("\n")
    .map((line) => {
      const separator = line.indexOf("|");
      return {
        kind: line.slice(0, separator) as ArticleLineKind,
        value: line.slice(separator + 1),
      };
    });
}

export function article(sourceUrl: string, title: string, heroImage: string, raw: string): CityArticle {
  return { sourceUrl, title, heroImage, lines: lines(raw) };
}
