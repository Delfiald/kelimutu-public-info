import styles from "./payment.module.css";
import { useState } from "react";
import { verticalStepper } from "../data";

import Open from "../../../assets/payment/Open.svg?react";
import Select from "../../../assets/payment/Select.svg?react";
import Scan from "../../../assets/payment/Scan.svg?react";
import Amount from "../../../assets/payment/Amount.svg?react";
import Confirm from "../../../assets/payment/Confirm.svg?react";
import Save from "../../../assets/payment/Save.svg?react";
import Show from "../../../assets/payment/Show.svg?react";

const ICON_MAP = {
 open: Open,
 select: Select,
 scan: Scan,
 amount: Amount,
 confirm: Confirm,
 save: Save,
 show: Show,
};

function PaymentSection() {
 const [activeStep, setActiveStep] = useState(0);
 return (
  <>
   <div className={styles.header}>
    <h2>Pay With QRIS.</h2>
    <div className={styles.subheader}>
     Digital payment for easier transactions.
    </div>
   </div>
   <div className={styles["payment-container"]}>
    <ul className={styles["payment-steps"]}>
     {verticalStepper.map((item, i) => {
      const Icon = ICON_MAP[item.icon];

      return (
       <li
        key={i}
        className={`${styles.step} ${i === activeStep ? styles.active : ""}`}
        onClick={() => setActiveStep(i)}
       >
        <div className={styles["step-wrapper"]}>
         <div className={styles["step-pict"]}>
          <Icon />
         </div>
         <div className={styles["step-name"]}>{item.name}</div>
        </div>
        <div className={styles["step-number"]}>{i + 1}</div>
       </li>
      );
     })}
    </ul>
    <div className={styles["cash-payment"]}>
     *Cash payment are also available at the counter
    </div>
   </div>
  </>
 );
}

export default PaymentSection;
