import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { translateTexts } from "./translate.server";

const schema = z.object({
  texts: z.array(z.string()).max(600),
  lang: z.enum(["es", "fr", "zh"]),
});

export const translateBatch = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => ({ texts: await translateTexts(data.texts, data.lang) }));
