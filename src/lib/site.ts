/** URL canónica del sitio. Se puede sobreescribir con NEXT_PUBLIC_SITE_URL. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jopiapp.com"
).replace(/\/$/, "");
