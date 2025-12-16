import styles from "./hero.module.css";
import AnimatedText from "../../components/ui/AnimatedText/AnimatedText";
import { useTranslation } from "react-i18next";

function Hero() {
 const { t } = useTranslation("hero");
 return (
  <section id="hero" className={styles.hero}>
   <div className={styles.logo}>
    <div className={styles["ministry-logo"]}>
     <img src="/logo/kemenhut.png" alt="Ministry of Forestry" />
    </div>
    <div className={styles["unit-logo"]}>
     <img src="/logo/TNKL.png" alt="Kelimutu National Park" />
    </div>
   </div>
   <div className={styles["hero-container"]}>
    <div className={styles.title}>
     <div className={styles["hero-title"]}>
      <h1>{t("title")}</h1>
     </div>
     <div className={styles["hero-subtitle"]}>
      <AnimatedText text="The Land of Mystical Beauty" as={"h3"} />
     </div>
    </div>
    <div className={styles["hero-bottom"]}>
     <div className={styles["scroll-button"]}>
      <div className={styles["button-icon"]}></div>
      <div className={styles["button-label"]}>{t("scroll")}</div>
     </div>
    </div>
   </div>
  </section>
 );
}

export default Hero;
