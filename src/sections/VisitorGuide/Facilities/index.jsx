import styles from "./facilities.module.css";

import Information from "../../../assets/facilities/Information.svg?react";
import Parking from "../../../assets/facilities/Parking.svg?react";
import Prayer from "../../../assets/facilities/Prayer.svg?react";
import Restroom from "../../../assets/facilities/Restroom.svg?react";
import Shelter from "../../../assets/facilities/Shelter.svg?react";
import Stalls from "../../../assets/facilities/Stalls.svg?react";
import { facilities } from "../data";

const FACILITY_ICON_MAP = {
 information: Information,
 parking: Parking,
 prayer: Prayer,
 restroom: Restroom,
 shelter: Shelter,
 stalls: Stalls,
};

function Facility() {
 return (
  <div className={styles["facility-container"]}>
   {facilities.map((item, index) => {
    const Icon = FACILITY_ICON_MAP[item.icon];
    return (
     <div key={index} className={styles["facility-box"]}>
      <div className={styles.facility}>
       <div className={styles.icon}>
        <Icon />
       </div>
       <div className={styles.label}>{item.label}</div>
      </div>
      <div className={`${styles.corner} ${styles["left-top"]}`}></div>
      <div className={`${styles.corner} ${styles["right-top"]}`}></div>
      <div className={`${styles.corner} ${styles["right-bottom"]}`}></div>
      <div className={`${styles.corner} ${styles["left-bottom"]}`}></div>
     </div>
    );
   })}
  </div>
 );
}

function Facilities() {
 return (
  <section id="guide" className={styles["facilities-section"]}>
   <header className={styles["facilities-header"]}>
    <h2>Facilities.</h2>
   </header>
   <div className={styles["facilities-container"]}>
    <Facility />
   </div>
  </section>
 );
}

export default Facilities;
