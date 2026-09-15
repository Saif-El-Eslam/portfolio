import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Info from "../../Info/Info.json";

const SITE_URL = "https://saifeleslam.vercel.app";
const PROFILE_IMAGE = `${SITE_URL}/about/image.jpeg`;

const pageMetadata = {
  "/": {
    title: "Saifeleslam Elsayed | Full Stack Engineer",
    description:
      "Saifeleslam Elsayed (also Saif Eleslam or Seifeleslam) is a full stack engineer and freelance web developer in Cairo building reliable digital products.",
  },
  "/projects": {
    title: "Software Projects | Saifeleslam Elsayed",
    description:
      "Explore full-stack, backend, frontend, data, and infrastructure projects built and delivered by Saifeleslam Elsayed.",
  },
  "/experience": {
    title: "Engineering Experience | Saifeleslam Elsayed",
    description:
      "Explore Saifeleslam Elsayed's full-stack engineering experience across AvidBeam, Thaat, distributed systems, and cloud infrastructure.",
  },
  "/services": {
    title: "Full Stack Development Services in Cairo | Saifeleslam",
    description:
      "Hire Saifeleslam Elsayed, a freelance full stack engineer in Cairo, to build fast, secure websites, web applications, e-commerce platforms, and APIs.",
  },
  "/ar/services": {
    title: "خدمات تصميم وتطوير المواقع | سيف الإسلام السيد",
    description:
      "خدمات برمجة وتصميم المواقع وتطبيقات الويب والمتاجر الإلكترونية للشركات والأفراد من سيف الإسلام السيد، مهندس برمجيات مستقل في القاهرة.",
  },
};

const alternateNames = [
  "Saif Eleslam Elsayed",
  "Saif El Eslam Elsayed",
  "Seifeleslam Elsayed",
  "Seif Eleslam Elsayed",
  "Saifeleslam Abdelrahman Elsayed",
  "سيف الإسلام السيد",
  "سيف الاسلام السيد",
  "سيف الإسلام عبدالرحمن السيد",
  "سيف الاسلام عبدالرحمن السيد",
];

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
    alternateName: alternateNames,
    url: SITE_URL,
    image: PROFILE_IMAGE,
    jobTitle: `${Info.title} and Freelance Web Developer`,
    description: Info.summary,
    email: `mailto:${Info.email}`,
    knowsLanguage: ["English", "Arabic"],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full Stack Engineer and Freelance Web Developer",
      alternateName: [
        "Full Stack Developer",
        "Freelance Full Stack Developer",
        "Freelance Web Developer",
      ],
      occupationLocation: {
        "@type": "City",
        name: "Cairo",
      },
      skills:
        "Ruby on Rails, Next.js, React, Node.js, MongoDB, Elasticsearch, distributed systems, cloud infrastructure",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cairo",
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
      "Website development",
      "Web application development",
    ],
    worksFor: {
      "@type": "Organization",
      name: "AvidBeam Technologies",
      url: "https://www.avidbeam.com/",
    },
  };

  if (pathname === "/services") {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE_URL}/services#service`,
      name: "Full Stack Website and Web Application Development",
      alternateName: [
        "Freelance Full Stack Development",
        "Freelance Website Development",
        "Custom Web Application Development",
      ],
      url: `${SITE_URL}/services`,
      description: pageMetadata[pathname].description,
      provider: person,
      areaServed: [
        { "@type": "Country", name: "Egypt" },
        { "@type": "AdministrativeArea", name: "Middle East" },
      ],
      serviceType: [
        "Website development",
        "Full stack web application development",
        "E-commerce development",
        "Backend API development",
      ],
    };
  }

  if (pathname === "/ar/services") {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE_URL}/ar/services#service`,
      name: "خدمات تصميم وتطوير المواقع وتطبيقات الويب",
      alternateName: [
        "إنشاء مواقع",
        "عمل مواقع",
        "برمجة مواقع",
        "تطوير تطبيقات الويب",
      ],
      url: `${SITE_URL}/ar/services`,
      description: pageMetadata[pathname].description,
      provider: person,
      areaServed: [
        { "@type": "Country", name: "مصر" },
        { "@type": "AdministrativeArea", name: "الشرق الأوسط" },
      ],
      serviceType: [
        "تصميم وتطوير المواقع",
        "تطوير تطبيقات الويب",
        "برمجة المتاجر الإلكترونية",
        "تطوير الأنظمة الخلفية والواجهات البرمجية",
      ],
      inLanguage: "ar",
    };
  }

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
        alternateName: [...alternateNames, "Saifeleslam Elsayed Portfolio"],
        url: SITE_URL,
        description: pageMetadata["/"].description,
        inLanguage: "en",
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profile`,
        url: SITE_URL,
        name: "Saifeleslam Elsayed – Full Stack Engineer",
        mainEntity: person,
      },
    ],
  };
}

function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath =
      pathname === "/" ? pathname : pathname.replace(/\/+$/, "");
    const metadata = pageMetadata[normalizedPath] || pageMetadata["/"];
    const canonicalUrl = `${SITE_URL}${normalizedPath === "/" ? "" : normalizedPath}`;
    const isArabic = normalizedPath.startsWith("/ar/");

    document.title = metadata.title;
    document.documentElement.lang = isArabic ? "ar" : "en";
    document.documentElement.dir = isArabic ? "rtl" : "ltr";

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
      normalizedPath === "/" ? "profile" : "website",
    );
    setMeta(
      'meta[property="og:image"]',
      ["property", "og:image"],
      PROFILE_IMAGE,
    );
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
    setMeta(
      'meta[property="og:locale"]',
      ["property", "og:locale"],
      isArabic ? "ar_EG" : "en_US",
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
    setMeta(
      'meta[name="twitter:image"]',
      ["name", "twitter:image"],
      PROFILE_IMAGE,
    );

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    const languageAlternates = isArabic
      ? [
          ["ar", `${SITE_URL}/ar/services`],
          ["en", `${SITE_URL}/services`],
        ]
      : normalizedPath === "/services"
        ? [
            ["en", `${SITE_URL}/services`],
            ["ar", `${SITE_URL}/ar/services`],
          ]
        : [];

    document.head
      .querySelectorAll('link[data-portfolio-hreflang="true"]')
      .forEach((link) => link.remove());

    languageAlternates.forEach(([language, url]) => {
      const alternate = document.createElement("link");
      alternate.rel = "alternate";
      alternate.setAttribute("hreflang", language);
      alternate.href = url;
      alternate.dataset.portfolioHreflang = "true";
      document.head.appendChild(alternate);
    });

    let structuredData = document.head.querySelector(
      "#portfolio-structured-data",
    );
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.type = "application/ld+json";
      structuredData.id = "portfolio-structured-data";
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify(
      buildStructuredData(normalizedPath),
    );
  }, [pathname]);

  return null;
}

export default Seo;
