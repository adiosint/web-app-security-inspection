const DOMAIN = "https://sayyidishaarani.com";
const PERSON_ID = `${DOMAIN}/#person`;
const SERVICE_ID = `${DOMAIN}/#service`;
const LINKEDIN_URL = "https://www.linkedin.com/in/sayyidishaarani/";

type ServicePageInput = {
  path: string;
  title: string;
  description: string;
};

type WebPageInput = {
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
        sameAs: [LINKEDIN_URL],
      },
      {
        "@type": "ProfessionalService",
        "@id": SERVICE_ID,
        name: "Sayyidi Shaarani — Web Application Security Inspection",
        url: DOMAIN,
        serviceType: "Web application security inspection",
        description:
          "Web application security inspection for SMEs, startups, and NGOs.",
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

export const getWebPageStructuredData = ({
  path,
  title,
  description,
}: WebPageInput) => {
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
        sameAs: [LINKEDIN_URL],
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: title,
        description,
        about: { "@id": PERSON_ID },
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
    articleSection: primaryLabel,
    keywords,
  };
};
