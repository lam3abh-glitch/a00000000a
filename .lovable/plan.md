# Translation Sustainability Plan

## Current state

The site now supports 5 languages, but translations are **static files**, not automatic.

- **UI labels / buttons / menus**: live in `src/lib/ui/{ar,en,fr,es,zh}.ts`. Every new button, heading, or label must be added to all 5 files.
- **Long content** (city articles, France guides, database text): lives in `src/lib/translations/{fr,es,zh}.json`. The `L()` and `tx()` helpers look up the Arabic/English source string in these JSON files. If the string is missing, visitors see English (or Arabic) instead.
- **Database rows**: already have `_ar` and `_en` columns; French/Spanish/Chinese are not stored in the database — they are overlays in the JSON files.

## Answer to your question

**No, future edits will not translate automatically.** If you add a new paragraph, button, city, guide section, or country intro, it will appear in Arabic/English but will fall back to English (or Arabic) in French, Spanish, and Chinese until translations are added.

## Proposed sustainable workflow

Build a small "translation maintenance" script that runs on demand:

1. **Harvest** every Arabic/English string from the UI dictionaries, city articles, France guides, and database content.
2. **Compare** against the existing `fr.json`, `es.json`, `zh.json` files to find missing keys.
3. **Translate only the missing strings** using the Lovable AI Gateway (Gemini 3.6 Flash), preserving context.
4. **Merge** the new translations back into the JSON files.
5. **Typecheck** the project to confirm nothing broke.

This gives you a one-command way to keep all 5 languages in sync after you add new content.

## What I will build

- `scripts/translate-missing.ts` — a Node/Bun script that does the harvest → diff → translate → merge flow.
- A `README_TRANSLATION.md` note explaining how to run it after future edits.
- No runtime changes to the site itself; the existing `L()` / `tx()` helpers stay the same.

## What you still need to do manually

- Add new **UI labels** to all 5 `src/lib/ui/*.ts` files (or tell me to do it).
- Run the script (or ask me to run it) after adding new articles, guides, or database content.

## Out of scope for now

- Real-time/on-the-fly translation. It would cost AI credits on every page view and is unnecessary for a content archive.
- Storing translations in the database. The JSON overlay approach is faster and cheaper for this use case.
