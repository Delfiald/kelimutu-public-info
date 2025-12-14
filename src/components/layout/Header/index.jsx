import Navbar from "./Navbar/Navbar";
import Hamburger from "./Hamburger/HamburgerButton";
import HamburgerMenu from "./Hamburger/HamburgerMenu";
import LanguageButton from "./Language/LanguageButton";
import { useEffect, useState } from "react";
import { sectionList } from "./data";

function Header() {
 const [activeSection, setActiveSection] = useState(null);
 const [hamburgerOpen, setHamburgerOpen] = useState(false);
 const [isAnimating, setIsAnimating] = useState(false);

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
  const handleScroll = () => {
   const viewportMiddle = window.innerHeight / 2;

   let currentSection = sectionList[0].id;

   sectionList.forEach((section) => {
    const el = document.getElementById(section.id);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top <= viewportMiddle) {
     currentSection = section.id;
    }
   });

   setActiveSection(currentSection);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // initial check

  return () => window.removeEventListener("scroll", handleScroll);
 }, [sectionList]);

 return (
  <header>
   <Navbar activeSection={activeSection} scrollHandler={scrollHandler} />
   <LanguageButton />
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
