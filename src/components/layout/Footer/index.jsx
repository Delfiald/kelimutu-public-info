import { useTranslation } from "react-i18next";
import styles from "./footer.module.css";

function Footer() {
 const { t } = useTranslation("footer");
 return (
  <footer className={styles.footer}>
   <p>{t("copyright", { year: new Date().getFullYear() })}</p>
  </footer>
 );
}

export default Footer;
