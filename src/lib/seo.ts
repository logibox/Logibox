export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.logibox.az";

export const siteName = "LogiBox";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/brand/logibox-logo.png`,
  description:
    "Food packing and transportation across Azerbaijan — temperature-controlled logistics and retail-ready packaging.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "AZ",
    addressLocality: "Baku",
  },
  sameAs: [] as string[],
};
