import PropTypes from "prop-types";
import styles from "./language.module.css";

function LanguageButton({ lang, handleLang }) {
 return (
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
 );
}

LanguageButton.propTypes = {
 lang: PropTypes.string,
 handleLang: PropTypes.func,
};

export default LanguageButton;
