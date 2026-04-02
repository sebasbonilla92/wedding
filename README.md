# Gabriella & Sebastian — Wedding Website

Personal wedding website for Gabriella & Sebastian, September 5, 2026 · Medellín, Colombia.

## Stack

- **Angular 17** — single-page app with routing
- **Tailwind CSS** — utility-first styling
- **Supabase** — RSVP form backend
- **Vercel** — hosting

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, weekend schedule, countdown |
| `/rsvp/:id` | Personalized RSVP form per guest |
| `/stay` | Where to stay in Medellín |
| `/explore` | Things to do in Medellín |
| `/faq` | Good to know — weather, transport, currency |

## RSVP Flow

Guests receive a unique link (`/rsvp/:id`) pre-loaded with their name and email. They confirm attendance and which events they'll attend (Friday welcome party, Saturday wedding, Sunday chiva). Responses are saved to Supabase via `UPDATE` on the guest's existing row.

To add a guest:
```sql
INSERT INTO rsvps (full_name, email) VALUES ('Guest Name', 'guest@email.com');
SELECT id, full_name FROM rsvps; -- copy the id for the invite link
```

## Development

```bash
npm install
ng serve
```

Navigate to `http://localhost:4200/`.

## Build & Deploy

```bash
ng build
```

Deploys automatically to Vercel on push to `master`.

## Environment

Copy `src/environments/environment.ts` and fill in your Supabase URL and anon key.
