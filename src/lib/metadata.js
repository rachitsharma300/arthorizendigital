export function generatePageMetadata({ title, description, path = "" }) {
  const siteName = "Arthorizen Digital";
  const defaultDesc = "Premium interior design solutions for modern living.";
  const baseUrl = "https://arthorizendigital.com";

  return {
    title: `${title} | ${siteName}`,
    description: description || defaultDesc,
    openGraph: {
      title: `${title} | ${siteName}`,
      description: description || defaultDesc,
      url: `${baseUrl}${path}`,
      siteName,
      type: "website",
    },
  };
}
