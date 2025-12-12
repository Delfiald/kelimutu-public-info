import { useEffect, useState } from "react";
import styles from "./navbar.module.css";

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

function Navbar() {
 const [lang, setLang] = useState("en");
 const [activeSection, setActiveSection] = useState(null);

 const handleLang = () => {
  setLang((prev) => (prev === "en" ? "id" : "en"));
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
  <nav className={styles.navbar}>
   <div className={[styles["navbar-wrapper"]]}>
    <ul className={styles["menu-wrapper"]}>
     {sectionList
      .filter((section) => section.label !== "")
      .map((section) => (
       <li
        key={section.id}
        className={activeSection === section.id ? styles.active : ""}
        onClick={() => scrollHandler(section.id)}
       >
        {section.label}
       </li>
      ))}
    </ul>
    <div className={styles.lang} onClick={() => handleLang()}>
     <div className={styles["lang-wrapper"]}>
      <div
       className={`${styles["lang-en"]} ${lang === "en" ? styles.active : ""} `}
      >
       EN
      </div>
      <div
       className={`${styles["lang-id"]} ${lang === "id" ? styles.active : ""} `}
      >
       ID
      </div>
     </div>
    </div>
   </div>
  </nav>
 );
}

export default Navbar;
