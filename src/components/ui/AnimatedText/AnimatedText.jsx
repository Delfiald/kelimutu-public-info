import styles from "./animatedText.module.css";
import PropTypes from "prop-types";

function AnimatedText({ text, as = "span" }) {
 const Tag = as;

 return (
  <Tag className={styles["animated-text"]}>
   {text.split("").map((char, i) => (
    <span key={i} className={styles["char-wrapper"]}>
     <span className={styles["char-default"]}>
      {char === " " ? "\u00A0" : char}
     </span>
     <span className={styles["char-animated"]}>
      {char === " " ? "\u00A0" : char}
     </span>
    </span>
   ))}
  </Tag>
 );
}

export default AnimatedText;

AnimatedText.propTypes = {
 text: PropTypes.string.isRequired,
 as: PropTypes.string.isRequired,
};
