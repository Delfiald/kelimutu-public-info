import styles from "./feesPayment.module.css";

import Open from "../../assets/payment/Open.svg?react";
import Select from "../../assets/payment/Select.svg?react";
import Scan from "../../assets/payment/Scan.svg?react";
import Amount from "../../assets/payment/Amount.svg?react";
import Confirm from "../../assets/payment/Confirm.svg?react";
import Save from "../../assets/payment/Save.svg?react";
import Show from "../../assets/payment/Show.svg?react";

const verticalStepper = [
 {
  pict: <Open />,
  name: "Open your payment app",
 },
 {
  pict: <Select />,
  name: "Select Scan QR",
 },
 {
  pict: <Scan />,
  name: "Scan the QRIS code",
 },
 {
  pict: <Amount />,
  name: "Enter the amount",
 },
 {
  pict: <Confirm />,
  name: "Review and Confirm the payment details",
 },
 {
  pict: <Save />,
  name: "Save your payment receipt",
 },
 {
  pict: <Show />,
  name: "Show the payment receipt to the counter staff",
 },
];

function PaymentSection() {
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
     {verticalStepper.map((item, i) => (
      <li key={i} className={styles.step}>
       <div className={styles["step-pict"]}>{item.pict}</div>
       <div className={styles["step-name"]}>{item.name}</div>
      </li>
     ))}
    </ul>
    <div className={styles["cash-payment"]}>
     *Cash payment are also available at the counter
    </div>
   </div>
  </>
 );
}

export default PaymentSection;
