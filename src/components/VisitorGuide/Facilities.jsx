import styles from "./visitorGuide.module.css";

import Information from "../../assets/facilities/Information.svg?react";
import Parking from "../../assets/facilities/Parking.svg?react";
import Prayer from "../../assets/facilities/Prayer.svg?react";
import Restroom from "../../assets/facilities/Restroom.svg?react";
import Shelter from "../../assets/facilities/Shelter.svg?react";
import Stalls from "../../assets/facilities/Stalls.svg?react";

const facility = [
 {
  id: "information",
  icon: <Information />,
  label: "Information Center",
 },
 {
  id: "parking",
  icon: <Parking />,
  label: "Parking Area",
 },
 {
  id: "prayer",
  icon: <Prayer />,
  label: "Prayer Room",
 },
 {
  id: "restroom",
  icon: <Restroom />,
  label: "Restroom",
 },
 {
  id: "shelter",
  icon: <Shelter />,
  label: "Shelters",
 },
 {
  id: "stalls",
  icon: <Stalls />,
  label: "Food & Souvenir Stalls",
 },
];

function Facility() {
 return (
  <div className={styles["facility-container"]}>
   {facility.map((f, index) => (
    <div key={index} className={styles["facility-box"]}>
     <div className={styles.facility}>
      <div className={styles.icon}>{f.icon}</div>
      <div className={styles.label}>{f.label}</div>
     </div>
     <div className={`${styles.corner} ${styles["left-top"]}`}></div>
     <div className={`${styles.corner} ${styles["right-top"]}`}></div>
     <div className={`${styles.corner} ${styles["right-bottom"]}`}></div>
     <div className={`${styles.corner} ${styles["left-bottom"]}`}></div>
    </div>
   ))}
  </div>
 );
}

function Facilities() {
 return (
  <>
   <div className={styles.header}>
    <h2>Facilities.</h2>
   </div>
   <div className={styles["facilities-container"]}>
    <Facility />
   </div>
  </>
 );
}

export default Facilities;
