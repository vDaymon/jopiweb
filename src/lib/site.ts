/** URL canónica del sitio. Se puede sobreescribir con NEXT_PUBLIC_SITE_URL. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jopiapp.com"
).replace(/\/$/, "");

/** La app web de Jopi (la misma app, en el navegador). */
export const WEB_APP_URL = (
  process.env.NEXT_PUBLIC_WEB_APP_URL ?? "https://app.jopiapp.com"
).replace(/\/$/, "");
