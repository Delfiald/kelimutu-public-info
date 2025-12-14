import { useEffect, useRef, useState } from "react";
import styles from "./aboutKelimutu.module.css";
import ColorChanges from "./ColorChanges";
import Overview from "./Overview";
import History from "./History";
import { informationContent, sectionName } from "./data";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

function AboutHeader({ active, handlePillTabs }) {
 const { t } = useTranslation("about");
 const [isInformation, setIsInformation] = useState(
  informationContent[0].label
 );
 function handleClick(label) {
  if (label === isInformation) return;

  setTimeout(() => {
   setIsInformation(label);
  }, 200);
 }

 return (
  <header className={styles["about-header"]}>
   <div
    className={styles["pills-button"]}
    onClick={() => handleClick(informationContent[0].label)}
   >
    {sectionName.map((section) => (
     <h2
      key={section.char}
      onClick={() => handlePillTabs(section.char)}
      className={`${active === section.char ? styles.active : ""}`}
     >
      {active === section.char ? t(section.name) : section.char}
     </h2>
    ))}
   </div>
   <div className={styles.location}>
    <a
     href={"https://maps.app.goo.gl/EznWz9uGHFcjEKco7"}
     target="_blank"
     rel="noopener noreferrer"
    >
     <span className={styles["icon-wrapper"]}>
      <i className="fas fa-location-dot"></i>
     </span>
    </a>
   </div>
  </header>
 );
}

function AboutKelimutu() {
 const [active, setActive] = useState("O");
 const refs = useRef([]);

 useEffect(() => {
  const observer = new IntersectionObserver(
   (entries) => {
    entries.forEach((entry) => {
     if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
      setActive(entry.target.id);
     }
    });
   },
   {
    threshold: [0.6],
   }
  );

  refs.current.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
 }, []);

 function handlePillTabs(tabs) {
  setActive(tabs);

  const target = refs.current.find((el) => el?.id === tabs);
  if (target) {
   target.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
   });
  }
 }

 return (
  <section id="about" className={styles.about}>
   <AboutHeader active={active} handlePillTabs={handlePillTabs} />
   <div className={styles["about-container"]}>
    <section
     id="O"
     ref={(el) => (refs.current[0] = el)}
     className={styles["information"]}
    >
     <Overview />
    </section>
    <section
     id="H"
     ref={(el) => (refs.current[1] = el)}
     className={styles.history}
    >
     <History />
    </section>
    <section
     id="C"
     ref={(el) => (refs.current[2] = el)}
     className={styles["color-changes"]}
    >
     <ColorChanges />
    </section>
   </div>
  </section>
 );
}

AboutHeader.propTypes = {
 active: PropTypes.string,
 handlePillTabs: PropTypes.func,
};

export default AboutKelimutu;
