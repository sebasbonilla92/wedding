# Wedding Website — Sebastian & Gabriella

## Couple
- **Names:** Sebastian & Gabriella
- **Wedding Date:** September 5, 2026 at 4:00 PM
- **Venue:** Le Pinot — CR 19 #36C Sur 260, Envigado, Antioquia, Colombia
- **RSVP Deadline:** July 5, 2026

## Stack
- Angular 17+
- Tailwind CSS
- Supabase (RSVP form only)
- Vercel (hosting)

## Features
- RSVP form (saves to Supabase)
- Countdown timer (to September 5, 2026 at 4:00 PM)
- Schedule/details page

## Layout
- Single-page scroll — no routing, no navigation bar
- All sections are inline in app.component.html in order: Home → Details → Registry → RSVP
- Section IDs for anchor links: `#details`, `#registry`, `#rsvp`
- `html { scroll-behavior: smooth }` for smooth scrolling

## Design Theme
- **Background:** Cream / off-white (#F5F0E8)
- **Primary color:** Sage green (#5C7A5C)
- **Accent:** Warm gold (#C9A84C)
- **Fonts:**
  - Script headings / names: Great Vibes (Google Fonts)
  - Elegant serif headings / body: Playfair Display (Google Fonts)
  - Clean body / UI text: Raleway (Google Fonts)
- **Style:** Elegant, minimal, botanical. White florals and green leaf motifs.
- **No heavy animations** — subtle fade-ins only
- **No sample images** — the assets/sample.jpg exists but is not used in the website

## Constraints
- No date-fns — use native JS Date for countdown
- No Angular Material or PrimeNG — Tailwind only
- Images stored locally in /assets (no Cloudinary)
- Deploy target: Vercel
