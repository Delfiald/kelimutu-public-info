import { visitHours } from "./data";
import styles from "./visitingHours.module.css";
import DailyIcon from "../../assets/visitingHours/Daily.svg?react";
import PeakHoursIcon from "../../assets/visitingHours/Peak hours.svg?react";
import SunriseIcon from "../../assets/visitingHours/Sunrise.svg?react";

const ICON_MAP = {
 daily: DailyIcon,
 sunrise: SunriseIcon,
 peak: PeakHoursIcon,
};

function HoursCard() {
 return visitHours.map((hours, index) => {
  const Icon = ICON_MAP[hours.icon];

  return (
   <div key={index} className={styles["card-container"]}>
    <div className={styles["card-background"]}>
     <Icon />
    </div>
    <div className={styles["card-content"]}>
     <div className={styles["main-information"]}>
      <div className={styles.title}>{hours.title}</div>
      <div className={styles.time}>{hours.time}</div>
     </div>
     <div className={styles.detail}>
      <p>{hours.detail}</p>
     </div>
    </div>
   </div>
  );
 });
}

function VisitingHours() {
 return (
  <section id="visit" className={styles["visiting-hours"]}>
   <header className={styles["visiting-hours-header"]}>
    <h2>Visiting Hours.</h2>
   </header>
   <div className={styles["visiting-hours-container"]}>
    <HoursCard />
   </div>
  </section>
 );
}

export default VisitingHours;
