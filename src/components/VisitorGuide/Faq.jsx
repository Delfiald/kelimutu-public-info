import { useState } from "react";
import styles from "./visitorGuide.module.css";
import PropTypes from "prop-types";

const faq = [
 {
  question:
   "How far is it from the ticket counter to the viewing area (parking/summit)?",
  answer:
   "It’s approximately 3 km from the ticket counter to the parking area, and then around 15–20 minutes on foot from the parking area to the summit.",
 },
 {
  question: "What is the weather like at the summit?",
  answer:
   "The summit weather is unpredictable and can change rapidly. Fog and sudden visibility changes are common.",
 },
 {
  question: "How much is the entrance fee?",
  answer_before:
   "Entrance fees vary based on visitor category (domestic, international, working days/holidays). For full details, tap ",
  answer_link: "here",
  answer_after: " to view the ticket price section.",
  scrollTarget: "ticket-section",
 },
 {
  question: "Are guides available?",
  answer:
   "No official guides are available, but the route is simple and easy to follow.",
 },
 {
  question: "Are there food vendors available?",
  answer:
   "Yes. Food vendors are available near the upper parking area, offering snacks, meals, and drinks.",
 },
 {
  question: "Are there stalls or shops at the top area?",
  answer:
   "There are small stalls near the parking area selling snacks, drinks, and souvenirs.",
 },
 {
  question: "What are the opening hours?",
  answer:
   "Opening hours generally start in the early morning until late afternoon from 5:00 AM to 4:00 PM",
 },
 {
  question: "Is parking available?",
  answer:
   "Yes, parking is available and located before the summit area. Visitors must continue on foot from the parking area to reach the top.",
 },
];

function FaqContainer({ isOpen, toggleOpen }) {
 return (
  <div className={styles["faq-container"]}>
   {faq.map((item, index) => (
    <div key={index} className={styles["faq-wrapper"]}>
     <div
      className={styles["question-wrapper"]}
      onClick={() => toggleOpen(index)}
     >
      <div className={styles.question}>{item.question}</div>
      {isOpen === index ? (
       <i className="fas fa-chevron-up"></i>
      ) : (
       <i className="fas fa-chevron-down"></i>
      )}
     </div>
     {isOpen === index && (
      <div className={styles["answer-wrapper"]}>
       {item.answer ? (
        item.answer
       ) : (
        <>
         {item.answer_before}
         <span
          className="faq-link"
          onClick={() =>
           document
            .getElementById(item.scrollTarget)
            ?.scrollIntoView({ behavior: "smooth" })
          }
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
   <div className={styles.header}>
    <h2>Frequently Asked Questions.</h2>
    <div>Before you ask, your answer might be here</div>
    <div>
     this section covers helpful answers to the questions visitors often wonder
     about
    </div>
   </div>
   <FaqContainer isOpen={isOpen} toggleOpen={toggleOpen} />
   <div className={styles.bottom}>
    <p>Is your question no listed here?</p>
    <p>
     Feel free to reach out via the <a href="">Get in Touch</a> section.
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
