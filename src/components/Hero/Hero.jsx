import PropTypes from "prop-types";
import styles from "./hero.module.css";
import AboutKelimutu from "./AboutKelimutu";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

function HeroSection() {
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
      <AnimatedText text="The Land of Mystical Beauty" containerTag={"h3"} />
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

function Hero() {
 return (
  <>
   <HeroSection />
   <AboutKelimutu />
  </>
 );
}

export default Hero;

AnimatedText.propTypes = {
 text: PropTypes.string.isRequired,
 containerTag: PropTypes.string.isRequired,
};
