import { useState } from "react";
import styles from "./faq.module.css";
import PropTypes from "prop-types";

import FaqIcon from "../../../assets/faq/Faq.svg?react";
import { faq } from "../data";
import { useTranslation } from "react-i18next";

function scrollHandler(target) {
 console.log(target);
 document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
}

function FaqContainer({ isOpen, toggleOpen, t }) {
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
      <div className={styles.question}>{t(item.question)}</div>
      <i className="fas fa-chevron-down"></i>
     </div>
     {isOpen === index && (
      <div className={styles["answer-wrapper"]}>
       {item.answer ? (
        t(item.answer)
       ) : (
        <>
         {t(item.answer_before)}
         <span
          className={styles["anchor-link"]}
          onClick={() => scrollHandler(item.scrollTarget)}
         >
          {t(item.answer_link)}
         </span>
         {t(item.answer_after)}
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
 const { t } = useTranslation("faq");
 const [isOpen, setIsOpen] = useState(null);

 const toggleOpen = (index) => {
  setIsOpen((prev) => (prev === index ? null : index));
 };
 return (
  <section className={styles.faq}>
   <header className={styles["faq-header"]}>
    <h2>{t("title")}.</h2>
    <div>{t("subtitle1")}</div>
    <div>{t("subtitle2")}</div>
    <div className={styles["faq-icon-wrapper"]}>{<FaqIcon />}</div>
    <div className={styles.bottom}>
     <p>{t("bottomQuestion")}</p>
     <p>
      {t("bottomText.before")}
      <span
       className={styles["anchor-link"]}
       onClick={() => scrollHandler("contact")}
      >
       {t("bottomText.link")}
      </span>
      {t("bottomText.after")}
     </p>
    </div>
   </header>
   <FaqContainer isOpen={isOpen} toggleOpen={toggleOpen} t={t} />
   <div className={styles.bottom}>
    <p>{t("bottomQuestion")}</p>
    <p>
     {t("bottomText.before")}
     <span
      className={styles["anchor-link"]}
      onClick={() => scrollHandler("contact")}
     >
      {t("bottomText.link")}
     </span>
     {t("bottomText.after")}
    </p>
   </div>
  </section>
 );
}

export default Faq;

FaqContainer.propTypes = {
 isOpen: PropTypes.number,
 toggleOpen: PropTypes.func,
 t: PropTypes.func,
};
