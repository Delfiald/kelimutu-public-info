import styles from "./feesPayment.module.css";

import { useState } from "react";
import PropTypes from "prop-types";

import FeesSection from "./Fees";
import { RegulationModal } from "./Fees";

import PaymentSection from "./Payment";

import CalculatorSection from "./CostCalculator";
import { SECTION } from "./data";
import { useTranslation } from "react-i18next";

function BottomSection({ sectionContent, setSectionContent }) {
 const { t } = useTranslation("feesPayment");
 const current = SECTION[sectionContent];
 return (
  <div className={styles.bottom}>
   {current.prev && (
    <div
     onClick={() => setSectionContent(current.prev)}
     className={styles["prev-button"]}
    >
     <i className="fas fa-chevron-left"></i>
     <span>{t(current.labelPrev)}</span>
    </div>
   )}
   {current.next && (
    <div
     onClick={() => setSectionContent(current.next)}
     className={styles["next-button"]}
    >
     <span>{t(current.labelNext)}</span>
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
   <section id="fee" className={styles["fees-payment"]}>
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
