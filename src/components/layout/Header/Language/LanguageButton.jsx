import styles from "./language.module.css";
import { useTranslation } from "react-i18next";

function LanguageButton() {
 const { i18n } = useTranslation();
 const toggleLang = () => {
  const nextLang = i18n.language === "en" ? "id" : "en";
  i18n.changeLanguage(nextLang);
  localStorage.setItem("lang", nextLang);
 };
 return (
  <div className={styles.lang} onClick={toggleLang}>
   <div className={styles["lang-wrapper"]}>
    <div
     className={`${styles["lang-en"]} ${
      i18n.language === "en" ? styles.active : ""
     }`}
    >
     EN
    </div>
    <div
     className={`${styles["lang-id"]} ${
      i18n.language === "id" ? styles.active : ""
     }`}
    >
     ID
    </div>
   </div>
  </div>
 );
}

export default LanguageButton;
