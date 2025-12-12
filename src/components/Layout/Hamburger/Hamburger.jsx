import { useEffect, useState } from "react";
import styles from "./hamburger.module.css";

const sectionList = [
 {
  id: "hero",
  label: "",
 },
 {
  id: "about",
  label: "About",
 },
 {
  id: "visit",
  label: "Visit",
 },
 {
  id: "guide",
  label: "Guide",
 },
 {
  id: "gallery",
  label: "Gallery",
 },
 {
  id: "contact",
  label: "Contact",
 },
];

function Hamburger() {
 const [lang, setLang] = useState("en");
 const [activeSection, setActiveSection] = useState(null);
 const [hamburgerOpen, setHamburgerOpen] = useState(false);
 const [isAnimating, setIsAnimating] = useState(false);

 const handleLang = () => {
  setLang((prev) => (prev === "en" ? "id" : "en"));
 };

 const handleHamburgerButton = () => {
  if (isAnimating) {
   setIsAnimating((prev) => !prev);
   setTimeout(() => {
    setHamburgerOpen((prev) => !prev);
   }, 150);
  } else {
   setHamburgerOpen((prev) => !prev);
   setTimeout(() => {
    setIsAnimating((prev) => !prev);
   }, 100);
  }
 };

 function scrollHandler(target) {
  document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
 }

 useEffect(() => {
  const observer = new IntersectionObserver(
   (entries) => {
    entries.forEach((entry) => {
     if (entry.isIntersecting) {
      setActiveSection(entry.target.id);
     }
    });
   },
   { threshold: 0.9 }
  );

  sectionList.forEach((section) => {
   const el = document.getElementById(section.id);
   if (el) observer.observe(el);
  });

  return () => observer.disconnect();
 }, []);

 return (
  <>
   <div className={styles.hamburger}>
    <div className={styles["hamburger-button-wrapper"]}>
     <li className={styles.lang} onClick={() => handleLang()}>
      <div className={styles["lang-wrapper"]}>
       <div
        className={`${styles["lang-en"]} ${
         lang === "en" ? styles.active : ""
        } `}
       >
        EN
       </div>
       <div
        className={`${styles["lang-id"]} ${
         lang === "id" ? styles.active : ""
        } `}
       >
        ID
       </div>
      </div>
     </li>
     <div
      onClick={() => handleHamburgerButton()}
      className={`${styles["hamburger-button"]} ${
       hamburgerOpen ? styles.active : ""
      }`}
     >
      <div></div>
     </div>
    </div>
   </div>
   {hamburgerOpen && (
    <div
     className={`${styles["hamburger-menu"]} ${
      isAnimating ? styles.active : ""
     }`}
    >
     <ul className={styles["hamburger-menu-container"]}>
      {sectionList
       .filter((section) => section.label !== "")
       .map((section) => (
        <li
         key={section.id}
         className={activeSection === section.id ? styles.active : ""}
         onClick={() => {
          scrollHandler(section.id), handleHamburgerButton();
         }}
        >
         <div className={styles["section-label-wrapper"]}>{section.label}</div>
        </li>
       ))}
     </ul>
    </div>
   )}
  </>
 );
}

export default Hamburger;
