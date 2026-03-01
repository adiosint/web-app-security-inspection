const DOMAIN = "https://sayyidishaarani.com";
const PERSON_ID = `${DOMAIN}/#person`;
const SERVICE_ID = `${DOMAIN}/#service`;

type ServicePageInput = {
  path: string;
  title: string;
  description: string;
};

type ArticleInput = {
  path: string;
  title: string;
  description: string;
  datePublished: Date;
  primaryLabel: string;
  secondaryLabel?: string;
};

const withLeadingSlash = (path: string) => (path.startsWith("/") ? path : `/${path}`);

export const getServicePageStructuredData = ({
  path,
  title,
  description,
}: ServicePageInput) => {
  const safePath = withLeadingSlash(path);
  const url = `${DOMAIN}${safePath}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: "Sayyidi Shaarani",
        url: DOMAIN,
        email: "mailto:salam@sayyidishaarani.com",
        jobTitle: "Web Application Security Inspector",
      },
      {
        "@type": "ProfessionalService",
        "@id": SERVICE_ID,
        name: "Sayyidi Shaarani — Web Application Security Inspection",
        url: DOMAIN,
        areaServed: "Global",
        serviceType: "Web application security inspection",
        description:
          "Independent web application security inspection for SMEs, startups, and NGOs.",
        provider: { "@id": PERSON_ID },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: title,
        description,
        about: { "@id": SERVICE_ID },
      },
    ],
  };
};

export const getArticleStructuredData = ({
  path,
  title,
  description,
  datePublished,
  primaryLabel,
  secondaryLabel,
}: ArticleInput) => {
  const safePath = withLeadingSlash(path);
  const url = `${DOMAIN}${safePath}`;
  const published = datePublished.toISOString();
  const keywords = [primaryLabel, secondaryLabel].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    author: { "@id": PERSON_ID },
    publisher: { "@id": PERSON_ID },
    mainEntityOfPage: url,
    datePublished: published,
    dateModified: published,
    articleSection: primaryLabel,
    keywords,
  };
};
