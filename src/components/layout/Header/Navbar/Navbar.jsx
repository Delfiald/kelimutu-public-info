import styles from "./navbar.module.css";
import { sectionList } from "../data";
import PropTypes from "prop-types";

function Navbar({ activeSection, scrollHandler }) {
 return (
  <nav className={styles.navbar}>
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
  </nav>
 );
}

Navbar.propTypes = {
 activeSection: PropTypes.string,
 scrollHandler: PropTypes.func,
};

export default Navbar;
