import PropTypes from "prop-types";
import styles from "./hero.module.css";

function AnimatedText({ text, containerTag }) {
 const Tag = containerTag;

 return (
  <Tag className="char-container">
   {text.split("").map((char, i) => (
    <span key={i} className="char">
     <span>{char === " " ? "\u00A0" : char}</span>
     <span>{char === " " ? "\u00A0" : char}</span>
    </span>
   ))}
  </Tag>
 );
}

function Hero() {
 return (
  <section className={styles.hero}>
   <div className={styles["hero-container"]}>
    <div className={styles.title}>
     <div className={styles["hero-title"]}>
      <h1>Kelimutu National Park</h1>
     </div>
     <div className={styles["hero-subtitle"]}>
      <AnimatedText text="The Land of Mystical Beauty" containerTag={"h3"} />
     </div>
    </div>
    <div className={styles["hero-bottom"]}>
     <div className={styles["scroll-button"]}>
      <div className={styles["button-icon"]}>
       <i className="fas fa-arrow-down"></i>
      </div>
      <div className={styles["button-label"]}>Scroll for Details</div>
     </div>
    </div>
   </div>
  </section>
 );
}

export default Hero;

AnimatedText.propTypes = {
 text: PropTypes.string.isRequired,
 containerTag: PropTypes.string.isRequired,
};
