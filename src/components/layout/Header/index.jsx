import Navbar from "./Navbar/Navbar";
import Hamburger from "./Hamburger/HamburgerButton";
import HamburgerMenu from "./Hamburger/HamburgerMenu";
import LanguageButton from "./Language/LanguageButton";
import { useEffect, useState } from "react";
import { sectionList } from "./data";

function Header() {
 const [lang, setLang] = useState("en");
 const [activeSection, setActiveSection] = useState(null);
 const [hamburgerOpen, setHamburgerOpen] = useState(false);
 const [isAnimating, setIsAnimating] = useState(false);

 const handleLang = () => {
  setLang((prev) => (prev === "en" ? "id" : "en"));
 };

 function scrollHandler(target) {
  document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
 }

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

 useEffect(() => {
  const observer = new IntersectionObserver(
   (entries) => {
    entries.forEach((entry) => {
     if (entry.isIntersecting) {
      setActiveSection(entry.target.id);
     }
    });
   },
   { threshold: 0.85 }
  );
  sectionList.forEach((section) => {
   const el = document.getElementById(section.id);
   if (el) observer.observe(el);
  });
  return () => observer.disconnect();
 }, []);

 return (
  <header>
   <Navbar activeSection={activeSection} scrollHandler={scrollHandler} />
   <LanguageButton lang={lang} handleLang={handleLang} />
   <Hamburger
    hamburgerOpen={hamburgerOpen}
    handleHamburgerButton={handleHamburgerButton}
   />
   {hamburgerOpen && (
    <HamburgerMenu
     isAnimating={isAnimating}
     activeSection={activeSection}
     scrollHandler={scrollHandler}
     handleHamburgerButton={handleHamburgerButton}
    />
   )}
  </header>
 );
}

export default Header;
