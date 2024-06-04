import "./Footer.css";
import Info from "../../Info/Info.json";

function Footer() {
  return (
    <div className="Footer">
      <p className="Footer__paragraph">
        Design copied from{" "}
        <a
          href={Info.copyWrite.design}
          target="_blank"
          rel="noreferrer"
          className="Footer__link"
        >
          Brittany Chiang Portfolio
        </a>{" "}
        and coded in Visual Studio Code by {Info.copyWrite.code}
        Built with React and hosted on Vercel.
      </p>
    </div>
  );
}

export default Footer;
