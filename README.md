# ATELIER BYTE

A fictional Marrakech computer and phone repair workshop. React + Vite + TypeScript, without a backend. Original SVG bench illustration, French and Arabic content, RTL layouts, local fonts, and accessible native FAQ controls.

## Run

Use Node.js 22 or newer.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

If the default npm cache is unavailable in a cloud environment, use `npm ci --cache /tmp/atelier-npm-cache`.

## Business configuration

Edit **src/business.ts** before publishing:

- `name`: workshop name. Update the typographic wordmark in `src/main.tsx`, illustration and `index.html` too if rebranding.
- `city`: French and Arabic city labels.
- `address`: replace `YOUR_ADDRESS` with the public address.
- `hours`: replace `YOUR_BUSINESS_HOURS` with opening hours.
- `phone`: replace `YOUR_PHONE_NUMBER` with the public phone number.
- `whatsapp`: replace `YOUR_WHATSAPP_NUMBER` with an international number using digits only (country code included, no `+`, spaces or punctuation).
- `mapUrl`: replace `YOUR_MAP_LINK` with an HTTPS map URL.

Contact actions open WhatsApp with an encoded message once a valid number is configured. Until then, they lead to the form and explain the missing configuration. The form validates all four fields, prepares a message and opens WhatsApp; the customer still sends it themselves. It never sends data to a server or confirms a booking. No real credentials or phone numbers are included.

French and Arabic copy is in `src/content.ts`. The language selection persists locally. All services, timeline descriptions and claims should be reviewed against the actual workshop's offering. No prices, testimonials or recovery guarantees are used.

Typography is self-hosted under `public/fonts` (DM Sans, Space Grotesk and Noto Sans Arabic, SIL Open Font License). The website makes no external font requests. The SVG in `src/Bench.tsx` is original.

## Validation

`npm run build` performs TypeScript checking and a production build. Browser verification covered 360px and 1440px layouts in both languages, horizontal overflow, field validation, message preparation, FAQ expansion, language persistence and reduced motion. Contact placeholders must be replaced before a production launch.
