import Info from "../../Info/Info.json";
import ExperienceCard from "../../Components/ExperienceCard/ExperienceCard";
import InteriorNav from "../../Components/InteriorNav/InteriorNav";
import InteriorResume from "../../Components/InteriorResume/InteriorResume";
import Footer from "../../Components/Footer/Footer";
import "./AllExperience.css";

function AllExperience() {
  const roleCount = Info.experience.reduce(
    (total, company) => total + company.roles.length,
    0,
  );

  return (
    <div className="AllExperience">
      <InteriorNav />

      <main className="AllExperience__wrapper">
        <header className="AllExperience__hero">
          <div>
            <p className="AllExperience__eyebrow">02 / Career timeline</p>
            <h1>
              Work,
              <em> in context.</em>
            </h1>
          </div>

          <div className="AllExperience__heroAside">
            <p>
              The roles, responsibilities, and technical decisions behind the
              job titles&ndash;from first internships to production ownership.
            </p>
            <p className="AllExperience__heroArabic" lang="ar" dir="rtl">
              خبرة مهنية في هندسة البرمجيات وتطوير المنتجات والأنظمة الموزعة
              والبنية السحابية.
            </p>
            <dl>
              <div>
                <dt>{Info.experience.length}</dt>
                <dd>companies</dd>
              </div>
              <div>
                <dt>{roleCount}</dt>
                <dd>roles</dd>
              </div>
              <div>
                <dt>2021 &ndash; Now</dt>
                <dd>timeline</dd>
              </div>
            </dl>
          </div>
        </header>

        <section
          className="AllExperience__timeline"
          aria-labelledby="experience-list-title"
        >
          <div className="AllExperience__timelineHeader">
            <h2 id="experience-list-title">Companies &amp; roles</h2>
            <p>Open any company for role-by-role details and outcomes.</p>
          </div>

          <ol className="AllExperience__list">
            {Info.experience.map((experience, index) => (
              <li key={experience.id}>
                <div className="AllExperience__marker" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <i />
                </div>
                <ExperienceCard experience={experience} />
              </li>
            ))}
          </ol>
        </section>

        <InteriorResume />
        <Footer label="Contact" />
      </main>
    </div>
  );
}

export default AllExperience;
