import "./Footer.css";
import Info from "../../Info/Info.json";

function Footer() {
  const socialLinks = Info.links.filter((link) => link.title !== "Email");

  return (
    <footer id="contact" className="Footer">
      <div className="Footer__heading">
        <p className="Footer__index">04 / Contact</p>
        <h2>Have a difficult problem?</h2>
        <p>
          I&apos;m always interested in thoughtful products, complicated systems,
          and teams that care about how the work is done.
        </p>
      </div>

      <a href={`mailto:${Info.email}`} className="Footer__email">
        <span>Start a conversation</span>
        <strong>{Info.email}</strong>
        <i aria-hidden="true">↗</i>
      </a>

      <div className="Footer__bottom">
        <p>Designed and built by Saifeleslam Elsayed · Cairo</p>
        <ul>
          {socialLinks.map((link) => (
            <li key={link.title}>
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <p>{Info.copyWrite.code}</p>
      </div>
    </footer>
  );
}

export default Footer;
