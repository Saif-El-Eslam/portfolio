import "./Footer.css";
import Info from "../../Info/Info.json";
import { ArrowUpRight, Mail } from "lucide-react";

const linkDescriptions = {
  LinkedIn: "Professional profile",
  GitHub: "Code & repositories",
  Instagram: "Photos & updates",
  Facebook: "Personal profile",
};

function Footer({ label = "04 / Contact" }) {
  const socialLinks = Info.links.filter((link) => link.title !== "Email");

  return (
    <footer id="contact" className="Footer">
      <div className="Footer__heading">
        <p className="Footer__index">{label}</p>
        <h2>Let&apos;s make something that holds up.</h2>
        <p>
          Have a product to build, a system to untangle, or simply want to
          connect? My inbox is always the best place to start.
        </p>
      </div>

      <div className="Footer__contactGrid">
        <a href={`mailto:${Info.email}`} className="Footer__email">
          <span className="Footer__emailLabel">
            <Mail size={18} strokeWidth={1.8} aria-hidden="true" />
            Direct email
          </span>
          <strong>{Info.email}</strong>
          <span className="Footer__emailAction">
            Start a conversation
            <ArrowUpRight size={18} strokeWidth={2} aria-hidden="true" />
          </span>
        </a>

        <nav className="Footer__socials" aria-label="Social profiles">
          <p>Find me elsewhere</p>
          <ul>
            {socialLinks.map((link) => (
              <li key={link.title}>
                <a href={link.url} target="_blank" rel="noreferrer">
                  <span className="Footer__socialIcon" aria-hidden="true">
                    <img src={link.icon} alt="" />
                  </span>
                  <span className="Footer__socialText">
                    <strong>{link.title}</strong>
                    <small>{linkDescriptions[link.title]}</small>
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
        <p>Designed and built by Saifeleslam Elsayed · Cairo</p>
        <p>{Info.copyWrite.code}</p>
      </div>
    </footer>
  );
}

export default Footer;
