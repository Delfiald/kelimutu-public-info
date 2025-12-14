import styles from "./navbar.module.css";
import { sectionList } from "../data";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

function Navbar({ activeSection, scrollHandler }) {
 const { t } = useTranslation("header");
 return (
  <nav className={styles.navbar}>
   <ul className={styles["menu-wrapper"]}>
    {sectionList
     .filter((section) => section.labelKey !== "")
     .map((section) => (
      <li
       key={section.id}
       className={activeSection === section.id ? styles.active : ""}
       onClick={() => scrollHandler(section.id)}
      >
       {t(section.labelKey)}
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
