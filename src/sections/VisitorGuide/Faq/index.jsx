import { useState } from "react";
import styles from "./faq.module.css";
import PropTypes from "prop-types";

import FaqIcon from "../../../assets/faq/Faq.svg?react";
import { faq } from "../data";

function scrollHandler(target) {
 console.log(target);
 document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
}

function FaqContainer({ isOpen, toggleOpen }) {
 return (
  <div className={styles["faq-container"]}>
   {faq.map((item, index) => (
    <div key={index} className={styles["faq-wrapper"]}>
     <div
      className={`${styles["question-wrapper"]} ${
       isOpen === index ? styles.active : ""
      }`}
      onClick={() => toggleOpen(index)}
     >
      <div className={styles.question}>{item.question}</div>
      <i className="fas fa-chevron-down"></i>
     </div>
     {isOpen === index && (
      <div className={styles["answer-wrapper"]}>
       {item.answer ? (
        item.answer
       ) : (
        <>
         {item.answer_before}
         <span
          className={styles["anchor-link"]}
          onClick={() => scrollHandler(item.scrollTarget)}
         >
          {item.answer_link}
         </span>
         {item.answer_after}
        </>
       )}
      </div>
     )}
    </div>
   ))}
  </div>
 );
}

function Faq() {
 const [isOpen, setIsOpen] = useState(null);

 const toggleOpen = (index) => {
  setIsOpen((prev) => (prev === index ? null : index));
 };
 return (
  <section className={styles.faq}>
   <header className={styles["faq-header"]}>
    <h2>Frequently Asked Questions.</h2>
    <div>Before you ask, your answer might be here</div>
    <div>
     this section covers helpful answers to the questions visitors often wonder
     about
    </div>
    <div className={styles["faq-icon-wrapper"]}>{<FaqIcon />}</div>
    <div className={styles.bottom}>
     <p>Is your question no listed here?</p>
     <p>
      {"Feel free to reach out via the "}
      <span
       className={styles["anchor-link"]}
       onClick={() => scrollHandler("contact")}
      >
       Get in Touch
      </span>
      {" section."}
     </p>
    </div>
   </header>
   <FaqContainer isOpen={isOpen} toggleOpen={toggleOpen} />
   <div className={styles.bottom}>
    <p>Is your question no listed here?</p>
    <p>
     {"Feel free to reach out via the "}
     <span
      className={styles["anchor-link"]}
      onClick={() => scrollHandler("contact")}
     >
      Get in Touch
     </span>
     {" section."}
    </p>
   </div>
  </section>
 );
}

export default Faq;

FaqContainer.propTypes = {
 isOpen: PropTypes.number,
 toggleOpen: PropTypes.func,
};
