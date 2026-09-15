import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import InteriorNav from "../../Components/InteriorNav/InteriorNav";
import Footer from "../../Components/Footer/Footer";
import "./WebDevelopment.css";

const services = [
  {
    title: "Business websites",
    description:
      "Fast, responsive websites that explain your offer clearly, work on every screen, and give search engines a clean structure to understand.",
  },
  {
    title: "Web applications",
    description:
      "Custom dashboards, portals, booking flows, and operational tools built around your real business process—not a generic template.",
  },
  {
    title: "E-commerce",
    description:
      "Secure online stores with product management, payments, order workflows, multilingual content, and the integrations you need to operate.",
  },
  {
    title: "APIs & backend systems",
    description:
      "Reliable APIs, authentication, real-time features, background processing, cloud deployment, and integrations for new or existing products.",
  },
];

const process = [
  "Clarify the product, audience, scope, and success criteria",
  "Plan the user journey, technical approach, and delivery milestones",
  "Build, test, and share progress in reviewable increments",
  "Deploy, document, and support a dependable launch",
];

function WebDevelopment() {
  return (
    <div className="WebDevelopment">
      <InteriorNav />

      <main className="WebDevelopment__wrapper">
        <header className="WebDevelopment__hero">
          <p className="WebDevelopment__eyebrow">
            Web development services · Cairo &amp; remote
          </p>
          <h1>
            Websites that work for your business,
            <em> not just look the part.</em>
          </h1>
          <p className="WebDevelopment__intro">
            I&apos;m Saifeleslam Elsayed, a freelance full stack engineer based in
            Cairo. I design, build, and deploy websites and web applications for
            businesses and teams in Egypt, the Middle East, and remotely.
          </p>
          <div className="WebDevelopment__actions">
            <a href="mailto:saifeleslamelsayed@gmail.com">
              Discuss your website
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <Link to="/projects">See delivered projects</Link>
          </div>
        </header>

        <section
          className="WebDevelopment__services"
          aria-labelledby="services-title"
        >
          <div className="WebDevelopment__sectionHeading">
            <p>01 / What I build</p>
            <h2 id="services-title">Full stack, from idea to production.</h2>
          </div>
          <div className="WebDevelopment__serviceGrid">
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
          className="WebDevelopment__process"
          aria-labelledby="process-title"
        >
          <div className="WebDevelopment__sectionHeading">
            <p>02 / How we work</p>
            <h2 id="process-title">A clear path to launch.</h2>
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

        <Footer label="03 / Contact" />
      </main>
    </div>
  );
}

export default WebDevelopment;
