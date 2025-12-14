import styles from "./hero.module.css";
import AnimatedText from "../../components/ui/AnimatedText/AnimatedText";

function Hero() {
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
      <h1>Kelimutu National Park</h1>
     </div>
     <div className={styles["hero-subtitle"]}>
      <AnimatedText text="The Land of Mystical Beauty" as={"h3"} />
     </div>
    </div>
    <div className={styles["hero-bottom"]}>
     <div className={styles["scroll-button"]}>
      <div className={styles["button-icon"]}></div>
      <div className={styles["button-label"]}>Scroll for Details</div>
     </div>
    </div>
   </div>
  </section>
 );
}

export default Hero;
