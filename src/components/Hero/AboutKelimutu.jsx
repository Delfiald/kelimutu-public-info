import { useEffect, useRef, useState } from "react";
import styles from "./aboutKelimutu.module.css";
import PropTypes from "prop-types";
import ColorChanges from "./ColorChanges";

const informationContent = [
 {
  label: "Overview",
  description: `Rising to 1,639 meters on Flores Island, Mount Kelimutu is a striking volcano known for its three enigmatic crater lakes that constantly shift colors due to volcanic minerals and gases. Kelimutu National Park surrounds these sacred lakes with lush forests and unique wildlife, revered deeply by the Lio people. Visitors can follow scenic trails and viewpoints to uncover both natural wonders and the legends that envelop these extraordinary lakes.`,
 },
 {
  label: "Tiwu Ata Polo",
  description:
   "Tiwu Ata Polo, the largest crater lake of the three lakes, located in the southeast, has an area of 4 hectares and a depth of 64 meters. The lake was named by the Lio people, who believe it is a place where the spirits of evil people dwell. Those who, during their lifetime, act wickedly and practice black magic or sorcery (suanggi) are believed to have their spirits dwell in Tiwu Ata Polo after death.",
 },
 {
  label: `Tiwu Niwa Muri Ko'o Fai`,
  description:
   "Tiwu Nuwa Muri Ko’o Fai, located in the middle between Tiwu Ata Polo and Tiwu Ata Bupu and separated by a very thin line from Tiwu Ata Polo, has an area of 5.5 hectares and a depth of 127 meters. Its name literally means “the lake of young men and women” or “the lake of the youth.” Among the three lakes, it has the lowest pH at 0.37. The Lio people believe that Tiwu Nuwa Muri Ko’o Fai is a place where young spirits reside.",
 },
 {
  label: "Tiwu Ata Bupu",
  description:
   "Tiwu Ata Bupu, located about 500 meters from the other two lakes, has an area of 4.5 hectares and a depth of 67 meters. Among the three lakes, it has the highest pH at 3.02. The Lio people believe that Tiwu Ata Bupu is a place where the spirits of the elder and wise people reside.",
 },
];

function Information({ changeIndex, activeIndex, visible }) {
 return (
  <div className={styles["kelimutu-information"]}>
   <div className={styles["image-wrapper"]}>
    <img src="./about/kelimutu.png" alt="Kelimutu Lake" />
    {informationContent.slice(1).map((information, index) => {
     const originalIndex = index + 1;

     if (activeIndex === 0 || activeIndex === originalIndex) {
      return (
       <div
        key={originalIndex}
        className={`${styles["lake-label-wrapper"]} ${
         styles[`lake-${originalIndex}`]
        } ${styles.animate}`}
       >
        <div
         className={styles["lake-label"]}
         onClick={() => changeIndex(originalIndex)}
        >
         <p>{information.label}</p>
        </div>
       </div>
      );
     }
     return null;
    })}
   </div>
   <div className={styles["information-text-wrapper"]}>
    {informationContent.map(
     (information, index) =>
      index === activeIndex && (
       <div
        key={index}
        className={`${styles["information-text"]} ${
         visible ? styles.show : styles.hide
        }`}
       >
        <div className={styles["information-label"]}>
         {index === 0 ? "Mount Kelimutu" : information.label}
        </div>
        <div className={styles["information-description"]}>
         {information.description}
        </div>
       </div>
      )
    )}
    <div className={styles["accordion-wrapper"]}>
     <div
      className={`${styles["prev-button"]} ${
       activeIndex < 1 ? styles.hide : ""
      }`}
      onClick={() => changeIndex(activeIndex - 1)}
     >
      <i className="fas fa-chevron-left"></i>
     </div>
     {informationContent.map((information, index) => (
      <div
       key={index}
       className={`${styles["track"]} ${
        index === activeIndex ? styles.active : ""
       }`}
       onClick={() => changeIndex(index)}
      >
       <div className={styles["information-label"]}>
        {" "}
        {index === 0 ? "Mount Kelimutu" : information.label}
       </div>
      </div>
     ))}
     <div
      className={`${styles["next-button"]} ${
       activeIndex >= informationContent.length - 1 ? styles.hide : ""
      }`}
      onClick={() => changeIndex(activeIndex + 1)}
     >
      <i className="fas fa-chevron-right"></i>
     </div>
    </div>
   </div>
  </div>
 );
}

const kelimutuFormationSteps = [
 {
  stage: 1,
  title: "Ancient Mount Sokoria",
  description:
   "The formation begins with an ancient volcanic edifice known as Mount Sokoria. Geological traces and remaining volcanic materials indicate its past activity.",
 },
 {
  stage: 2,
  title: "A Major Eruption Creates the Sokoria Caldera",
  description:
   "A powerful explosive eruption destroyed Mount Sokoria’s summit and produced a wide caldera, marking the first major restructuring of the landscape.",
 },
 {
  stage: 3,
  title: "Formation of Mount Kelibara (Old Kelimutu)",
  description:
   "Within the caldera, new volcanic activity built a younger cone called Mount Kelibara — often regarded as the ‘older Kelimutu’.",
 },
 {
  stage: 4,
  title: "An Eruption Forms the Child of Kelibara",
  description:
   "Subsequent eruptions gave rise to a smaller volcanic cone known as the Child of Kelibara, located where Tiwu Ata Bupu stands today.",
 },
 {
  stage: 5,
  title: "Repeated Eruptions Over Hundreds of Years",
  description:
   "The Child of Kelibara experienced multiple eruptions over several centuries, gradually reshaping the summit region and weakening the older structures.",
 },
 {
  stage: 6,
  title: "Final Major Eruptions Create Mount Kelimutu",
  description:
   "Explosive events — including the last recorded eruption in 1968 — completed the formation of Mount Kelimutu and sculpted the three summit craters.",
 },
 {
  stage: 7,
  title: "Present-Day Kelimutu Crater Lakes",
  description:
   "After volcanic activity subsided, rainwater and hydrothermal fluids filled the craters, forming the three iconic crater lakes whose colors continue to change due to ongoing geochemical processes.",
 },
];

const folkloreSteps = [
 {
  id: 1,
  title: "Bhuria – The Veiled Forest",
  description:
   "Long ago, the mountain was cloaked in misty Bhuria, a sacred forest where ancestral spirits 'Embu Nosi' and unseen entities 'Nitu' roamed.",
 },
 {
  id: 2,
  title: "The Rule of Konde Ratu",
  description:
   "People lived under Konde Ratu’s rule, with Ata Bupu, protector of the innocent, and Ata Polo, a sinister sorcerer preying on the weak.",
 },
 {
  id: 3,
  title: "The Orphans Seek Refuge",
  description:
   "Two orphaned youths, 'Ana Kalo', sought shelter in Ata Bupu’s lands, and he granted them sanctuary from harm.",
 },
 {
  id: 4,
  title: "The Shadow of Ata Polo",
  description:
   "Ata Polo sought the youths, but Ata Bupu stood firm: 'Let these children reach their days,' he said, defending them.",
 },
 {
  id: 5,
  title: "The Youths Mature",
  description:
   "The orphans grew into Ko'o Fai and Nuwa Muri. Ata Polo demanded them, but Ata Bupu refused to yield.",
 },
 {
  id: 6,
  title: "Vanishing into the Earth",
  description:
   "To escape Ata Polo, Ata Bupu and the youths vanished into the earth. Ata Polo pursued, but all were swallowed by the land.",
 },
 {
  id: 7,
  title: "The Birth of the Tri-Lakes",
  description:
   "Where they disappeared, the land ruptured forming the tri-colored lakes: Ata Bupu’s green, the youths’ turquoise, and Ata Polo’s crimson brown.",
 },
];

function History() {
 const [history, setHistory] = useState("geological");

 return (
  <div className={styles["kelimutu-history"]}>
   <div className={styles["history-wrapper"]}>
    <div className={styles["history-button"]}>
     <div
      onClick={() => setHistory("geological")}
      className={`${styles["history-type"]} ${
       history === "geological" ? styles.active : ""
      }`}
     >
      Geological
     </div>
     <div
      onClick={() => setHistory("folklore")}
      className={`${styles["history-type"]} ${
       history === "folklore" ? styles.active : ""
      }`}
     >
      Folklore
     </div>
    </div>
    <ul>
     {(history === "geological" ? kelimutuFormationSteps : folkloreSteps).map(
      (step, stage) => (
       <li key={stage} className={styles.stage}>
        <div className={styles["stage-description"]}>{step.description}</div>
       </li>
      )
     )}
    </ul>
   </div>
  </div>
 );
}

function AboutKelimutu() {
 const [activeIndex, setActiveIndex] = useState(0);
 const [isInformation, setIsInformation] = useState(
  informationContent[0].label
 );

 const [visible, setVisible] = useState(true);
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

 function changeIndex(nextIndex) {
  if (nextIndex < 0 || nextIndex >= informationContent.length) return;
  if (nextIndex === activeIndex) return;

  setVisible(false);

  setTimeout(() => {
   setActiveIndex(nextIndex);
   setVisible(true);
  }, 200);
 }

 function handleClick(label) {
  if (label === isInformation) return;
  setVisible(false);

  setTimeout(() => {
   setIsInformation(label);
   setVisible(true);
  }, 200);
 }

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
   <div className={styles.header}>
    <div
     className={styles["pills-button"]}
     onClick={() => handleClick(informationContent[0].label)}
    >
     <h2
      onClick={() => handlePillTabs("O")}
      className={`${active === "O" ? styles.active : ""}`}
     >
      {active === "O" ? "Overview" : "O"}
     </h2>
     <h2
      onClick={() => handlePillTabs("H")}
      className={`${active === "H" ? styles.active : ""}`}
     >
      {active === "H" ? "History" : "H"}
     </h2>
     <h2
      onClick={() => handlePillTabs("C")}
      className={`${active === "C" ? styles.active : ""}`}
     >
      {active === "C" ? "Color Changes" : "C"}
     </h2>
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
   </div>
   <div className={styles["about-container"]}>
    <div
     id="O"
     ref={(el) => (refs.current[0] = el)}
     className={styles["information"]}
    >
     <Information
      isInformation={isInformation}
      handleClick={handleClick}
      changeIndex={changeIndex}
      activeIndex={activeIndex}
      visible={visible}
     />
    </div>
    <div id="H" ref={(el) => (refs.current[1] = el)} className={styles.history}>
     <History />
    </div>
    <div
     id="C"
     ref={(el) => (refs.current[2] = el)}
     className={styles["color-changes"]}
    >
     <ColorChanges />
    </div>
   </div>
  </section>
 );
}

export default AboutKelimutu;

Information.propTypes = {
 isInformation: PropTypes.string,
 handleClick: PropTypes.func,
 changeIndex: PropTypes.func,
 activeIndex: PropTypes.number,
 visible: PropTypes.bool,
};
