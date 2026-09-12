import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Info from "../../Info/Info.json";

const SITE_URL = "https://saifeleslam.vercel.app";
const PROFILE_IMAGE = `${SITE_URL}/about/image.jpeg`;

const pageMetadata = {
  "/": {
    title: "Saifeleslam Elsayed | Full Stack Engineer",
    description:
      "Portfolio of Saifeleslam Elsayed, a full stack engineer building distributed Ruby on Rails systems, Next.js products, real-time workflows, and cloud infrastructure. سيف الإسلام السيد، مهندس برمجيات Full Stack.",
  },
  "/projects": {
    title: "Software Projects | Saifeleslam Elsayed",
    description:
      "Explore full-stack, backend, frontend, data, and infrastructure projects by Saifeleslam Elsayed. مشاريع سيف الإسلام السيد في تطوير الويب والأنظمة الخلفية وNext.js وRails.",
  },
  "/experience": {
    title: "Engineering Experience | Saifeleslam Elsayed",
    description:
      "Explore Saifeleslam Elsayed's full-stack engineering experience across AvidBeam, Thaat, distributed systems, and cloud infrastructure. خبرة سيف الإسلام السيد في هندسة البرمجيات وتطوير الويب.",
  },
};

function setMeta(selector, attribute, value) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    const [key, name] = attribute;
    element.setAttribute(key, name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", value);
}

function buildStructuredData(pathname) {
  const person = {
    "@type": "Person",
    "@id": `${SITE_URL}/#saifeleslam-elsayed`,
    name: Info.name,
    alternateName: [
      "Saif El Eslam Elsayed",
      "سيف الإسلام السيد",
      "سيف الاسلام السيد",
    ],
    url: SITE_URL,
    image: PROFILE_IMAGE,
    jobTitle: `${Info.title} — مهندس برمجيات Full Stack`,
    description: Info.summary,
    email: `mailto:${Info.email}`,
    knowsLanguage: ["English", "Arabic", "اللغة العربية"],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full Stack Engineer",
      alternateName: [
        "Full Stack Developer",
        "مهندس برمجيات Full Stack",
        "مطور ويب Full Stack",
        "مهندس برمجيات متكامل",
      ],
      occupationLocation: {
        "@type": "City",
        name: "Cairo — القاهرة",
      },
      skills:
        "Ruby on Rails, Next.js, React, Node.js, MongoDB, Elasticsearch, distributed systems, cloud infrastructure",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cairo — القاهرة",
      addressCountry: "EG",
    },
    sameAs: Info.links
      .filter((link) => link.title !== "Email")
      .map((link) => link.url),
    knowsAbout: [
      "Full-stack development",
      "Ruby on Rails",
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "Elasticsearch",
      "Distributed systems",
      "Cloud infrastructure",
    ],
    worksFor: {
      "@type": "Organization",
      name: "AvidBeam Technologies",
      url: "https://www.avidbeam.com/",
    },
  };

  if (pathname === "/projects") {
    return {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Software Projects by Saifeleslam Elsayed",
      url: `${SITE_URL}/projects`,
      description: pageMetadata[pathname].description,
      author: person,
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: Info.projects.length,
        itemListElement: Info.projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.title,
          ...(project.url && { url: project.url }),
        })),
      },
    };
  }

  if (pathname === "/experience") {
    return {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      name: "Engineering Experience of Saifeleslam Elsayed",
      url: `${SITE_URL}/experience`,
      description: pageMetadata[pathname].description,
      mainEntity: person,
      about: Info.experience.map((experience) => ({
        "@type": "Organization",
        name: experience.company,
        url: experience.company_url,
      })),
    };
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "Saifeleslam Elsayed",
        alternateName: [
          "Saif El Eslam Elsayed",
          "Saifeleslam Elsayed Portfolio",
          "سيف الإسلام السيد",
          "سيف الاسلام السيد",
        ],
        url: SITE_URL,
        description: pageMetadata["/"].description,
        inLanguage: ["en", "ar"],
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profile`,
        url: SITE_URL,
        name: "Saifeleslam Elsayed — Full Stack Engineer",
        mainEntity: person,
      },
    ],
  };
}

function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = pageMetadata[pathname] || pageMetadata["/"];
    const canonicalUrl = `${SITE_URL}${pathname === "/" ? "" : pathname}`;

    document.title = metadata.title;
    document.documentElement.lang = "en";

    setMeta(
      'meta[name="description"]',
      ["name", "description"],
      metadata.description,
    );
    setMeta(
      'meta[name="robots"]',
      ["name", "robots"],
      "index, follow, max-image-preview:large",
    );
    setMeta(
      'meta[property="og:title"]',
      ["property", "og:title"],
      metadata.title,
    );
    setMeta(
      'meta[property="og:description"]',
      ["property", "og:description"],
      metadata.description,
    );
    setMeta('meta[property="og:url"]', ["property", "og:url"], canonicalUrl);
    setMeta(
      'meta[property="og:type"]',
      ["property", "og:type"],
      pathname === "/" ? "profile" : "website",
    );
    setMeta('meta[property="og:image"]', ["property", "og:image"], PROFILE_IMAGE);
    setMeta(
      'meta[property="og:image:alt"]',
      ["property", "og:image:alt"],
      "Portrait of Saifeleslam Elsayed",
    );
    setMeta(
      'meta[property="og:site_name"]',
      ["property", "og:site_name"],
      "Saifeleslam Elsayed",
    );
    setMeta('meta[property="og:locale"]', ["property", "og:locale"], "en_US");
    setMeta(
      'meta[property="og:locale:alternate"]',
      ["property", "og:locale:alternate"],
      "ar_EG",
    );
    setMeta('meta[name="twitter:card"]', ["name", "twitter:card"], "summary");
    setMeta(
      'meta[name="twitter:title"]',
      ["name", "twitter:title"],
      metadata.title,
    );
    setMeta(
      'meta[name="twitter:description"]',
      ["name", "twitter:description"],
      metadata.description,
    );
    setMeta('meta[name="twitter:image"]', ["name", "twitter:image"], PROFILE_IMAGE);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    let structuredData = document.head.querySelector(
      "#portfolio-structured-data",
    );
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.type = "application/ld+json";
      structuredData.id = "portfolio-structured-data";
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify(buildStructuredData(pathname));
  }, [pathname]);

  return null;
}

export default Seo;
