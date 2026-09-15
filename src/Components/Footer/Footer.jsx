import "./Footer.css";
import Info from "../../Info/Info.json";
import { ArrowUpRight, Mail } from "lucide-react";

const linkDescriptions = {
  en: {
    LinkedIn: "Professional profile",
    GitHub: "Code & repositories",
    Instagram: "Photos & updates",
    Facebook: "Personal profile",
  },
  ar: {
    LinkedIn: "الملف المهني",
    GitHub: "المشاريع البرمجية",
    Instagram: "الصور والتحديثات",
    Facebook: "الملف الشخصي",
  },
};

const footerCopy = {
  en: {
    heading: "Let's make something that holds up.",
    intro:
      "Have a product to build, a system to untangle, or simply want to connect? My inbox is always the best place to start.",
    emailLabel: "Direct email",
    emailAction: "Start a conversation",
    socialsLabel: "Find me elsewhere",
    socialNavLabel: "Social profiles",
    credit: "Designed and built by Saifeleslam Elsayed · Cairo",
    copyright: Info.copyWrite.code,
  },
  ar: {
    heading: "لنصنع منتجًا يعتمد عليه.",
    intro:
      "لديك موقع أو منتج تريد تنفيذه، أو نظام يحتاج إلى تطوير؟ البريد الإلكتروني هو أفضل طريقة لبدء الحديث.",
    emailLabel: "البريد الإلكتروني",
    emailAction: "ابدأ المحادثة",
    socialsLabel: "حساباتي الأخرى",
    socialNavLabel: "حسابات التواصل الاجتماعي",
    credit: "تصميم وتطوير سيف الإسلام السيد · القاهرة",
    copyright: "© 2026 سيف الإسلام السيد.",
  },
};

function Footer({ label = "04 / Contact", locale = "en" }) {
  const socialLinks = Info.links.filter((link) => link.title !== "Email");
  const copy = footerCopy[locale] || footerCopy.en;

  return (
    <footer
      id="contact"
      className="Footer"
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <div className="Footer__heading">
        <p className="Footer__index">{label}</p>
        <h2>{copy.heading}</h2>
        <p>{copy.intro}</p>
      </div>

      <div className="Footer__contactGrid">
        <a href={`mailto:${Info.email}`} className="Footer__email">
          <span className="Footer__emailLabel">
            <Mail size={18} strokeWidth={1.8} aria-hidden="true" />
            {copy.emailLabel}
          </span>
          <strong dir="ltr">{Info.email}</strong>
          <span className="Footer__emailAction">
            {copy.emailAction}
            <ArrowUpRight size={18} strokeWidth={2} aria-hidden="true" />
          </span>
        </a>

        <nav className="Footer__socials" aria-label={copy.socialNavLabel}>
          <p>{copy.socialsLabel}</p>
          <ul>
            {socialLinks.map((link) => (
              <li key={link.title}>
                <a href={link.url} target="_blank" rel="noreferrer">
                  <span className="Footer__socialIcon" aria-hidden="true">
                    <img src={link.icon} alt="" />
                  </span>
                  <span className="Footer__socialText">
                    <strong>{link.title}</strong>
                    <small>
                      {linkDescriptions[locale]?.[link.title] ||
                        linkDescriptions.en[link.title]}
                    </small>
                  </span>
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="Footer__bottom">
        <p>{copy.credit}</p>
        <p>{copy.copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;
