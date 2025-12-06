import styles from "./feesPayment.module.css";

import { useState } from "react";
import PropTypes from "prop-types";

import FeesSection from "./Fees.jsx";
import { RegulationModal } from "./Fees.jsx";

import PaymentSection from "./Payment.jsx";

import CalculatorSection from "./Calculator.jsx";

const SECTION = {
 FEES: {
  key: "FEES",
  prev: null,
  next: "PAYMENT",
  labelNext: "Payment Info",
  labelPrev: null,
 },
 PAYMENT: {
  key: "PAYMENT",
  prev: "FEES",
  next: "CALCULATOR",
  labelNext: "Cost Calculator",
  labelPrev: "Fees",
 },
 CALCULATOR: {
  key: "CALCULATOR",
  prev: "PAYMENT",
  next: null,
  labelNext: null,
  labelPrev: "Payment Info",
 },
};

function BottomSection({ sectionContent, setSectionContent }) {
 const current = SECTION[sectionContent];
 return (
  <div className={styles.bottom}>
   {current.prev && (
    <div
     onClick={() => setSectionContent(current.prev)}
     className={styles["prev-button"]}
    >
     <span>{current.labelPrev}</span>
     <i className="fas fa-chevron-left"></i>
    </div>
   )}
   {current.next && (
    <div
     onClick={() => setSectionContent(current.next)}
     className={styles["next-button"]}
    >
     <span>{current.labelNext}</span>
     <i className="fas fa-chevron-right"></i>
    </div>
   )}
  </div>
 );
}

function FeesPayment() {
 const [isOpen, setIsOpen] = useState(false);
 const toggleModal = () => setIsOpen((prev) => !prev);

 const [sectionContent, setSectionContent] = useState(SECTION.FEES.key);

 return (
  <>
   <section className={styles["fees-payment"]}>
    {sectionContent === SECTION.FEES.key && (
     <FeesSection
      toggleModal={toggleModal}
      setSectionContent={setSectionContent}
     />
    )}
    {sectionContent === SECTION.PAYMENT.key && (
     <PaymentSection setSectionContent={setSectionContent} />
    )}
    {sectionContent === SECTION.CALCULATOR.key && (
     <CalculatorSection setSectionContent={setSectionContent} />
    )}
    <BottomSection
     sectionContent={sectionContent}
     setSectionContent={setSectionContent}
    />
   </section>
   {isOpen && (
    <RegulationModal
     url={"/regulation/pp_36_2024.pdf"}
     toggleModal={toggleModal}
    />
   )}
  </>
 );
}

export default FeesPayment;

BottomSection.propTypes = {
 sectionContent: PropTypes.string,
 setSectionContent: PropTypes.func,
};
