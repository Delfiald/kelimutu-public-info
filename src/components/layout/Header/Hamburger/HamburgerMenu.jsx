import PropTypes from "prop-types";
import { sectionList } from "../data";
import styles from "./hamburger.module.css";

function HamburgerMenu({
 isAnimating,
 activeSection,
 scrollHandler,
 handleHamburgerButton,
}) {
 return (
  <div
   className={`${styles["hamburger-menu"]} ${isAnimating ? styles.active : ""}`}
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
 );
}

HamburgerMenu.propTypes = {
 isAnimating: PropTypes.bool,
 activeSection: PropTypes.string,
 scrollHandler: PropTypes.func,
 handleHamburgerButton: PropTypes.func,
};

export default HamburgerMenu;
