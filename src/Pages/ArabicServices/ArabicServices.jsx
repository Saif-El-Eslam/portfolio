import { ArrowDown, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import "../Services/Services.css";
import "./ArabicServices.css";

const services = [
  {
    title: "مواقع الشركات والخدمات",
    description:
      "مواقع سريعة ومتوافقة مع الهاتف توضّح خدمات شركتك وتساعد العملاء على الوصول إليك والتواصل معك بسهولة.",
  },
  {
    title: "تطبيقات الويب",
    description:
      "لوحات تحكم وبوابات ومنصات حجز وأدوات تشغيل مخصّصة تناسب طريقة عمل مشروعك بدلًا من الاعتماد على قالب عام.",
  },
  {
    title: "المتاجر الإلكترونية",
    description:
      "متاجر آمنة تشمل إدارة المنتجات والدفع والطلبات والمحتوى متعدد اللغات والتكاملات اللازمة لتشغيل نشاطك.",
  },
  {
    title: "الأنظمة الخلفية والواجهات البرمجية",
    description:
      "واجهات برمجية موثوقة وتسجيل دخول وخصائص فورية ومعالجة خلفية ونشر سحابي وربط مع الخدمات الخارجية.",
  },
];

const process = [
  "تحديد فكرة المشروع والجمهور والنطاق ومعايير النجاح",
  "تخطيط رحلة المستخدم والحل التقني ومراحل التسليم",
  "البرمجة والاختبار ومراجعة التقدّم على مراحل واضحة",
  "النشر والتوثيق ودعم إطلاق المنتج بصورة مستقرة",
];

function ArabicServices() {
  return (
    <div className="Services ArabicServices">
      <nav className="ArabicServices__nav" aria-label="التنقل الرئيسي">
        <Link to="/" className="ArabicServices__brand">
          <strong>سيف الإسلام السيد</strong>
          <small>مهندس برمجيات متكامل</small>
        </Link>
        <Link to="/services">النسخة الإنجليزية</Link>
        <a href="#contact">تواصل معي</a>
      </nav>

      <main className="Services__wrapper">
        <header className="Services__hero">
          <p className="Services__eyebrow">
            خدمات برمجية · القاهرة والعمل عن بُعد
          </p>
          <h1>
            مواقع وتطبيقات تخدم مشروعك،
            <em> وليس مجرد شكل جميل.</em>
          </h1>
          <p className="Services__intro">
            أنا سيف الإسلام عبدالرحمن السيد، مهندس برمجيات مستقل من القاهرة.
            أصمم وأطوّر وأنشر المواقع وتطبيقات الويب للشركات والأفراد في مصر
            والشرق الأوسط وعن بُعد.
          </p>
          <div className="Services__actions">
            <a href="#contact">
              تواصل معي
              <ArrowDown size={17} aria-hidden="true" />
            </a>
            <Link to="/projects">مشاهدة المشاريع</Link>
          </div>
        </header>

        <section
          className="Services__services"
          aria-labelledby="arabic-services-title"
        >
          <div className="Services__sectionHeading">
            <p>01 / الخدمات</p>
            <h2 id="arabic-services-title">من الفكرة إلى منتج جاهز للعمل.</h2>
          </div>
          <div className="Services__serviceGrid">
            {services.map((service, index) => (
              <article key={service.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="Services__process"
          aria-labelledby="arabic-process-title"
        >
          <div className="Services__sectionHeading">
            <p>02 / طريقة العمل</p>
            <h2 id="arabic-process-title">خطوات واضحة حتى الإطلاق.</h2>
          </div>
          <ol>
            {process.map((step) => (
              <li key={step}>
                <Check size={18} aria-hidden="true" />
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <Footer label="03 / التواصل" locale="ar" />
      </main>
    </div>
  );
}

export default ArabicServices;
