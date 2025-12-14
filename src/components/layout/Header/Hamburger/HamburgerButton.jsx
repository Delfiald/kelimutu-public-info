import styles from "./hamburger.module.css";
import PropTypes from "prop-types";

function Hamburger({ hamburgerOpen, handleHamburgerButton }) {
 return (
  <>
   <div className={styles.hamburger}>
    <div className={styles["hamburger-button-wrapper"]}>
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
  </>
 );
}

Hamburger.propTypes = {
 hamburgerOpen: PropTypes.bool,
 handleHamburgerButton: PropTypes.func,
};

export default Hamburger;
