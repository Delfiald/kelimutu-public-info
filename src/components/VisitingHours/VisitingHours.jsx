import PropTypes from "prop-types";
import styles from "./visitingHours.module.css";
import DailyIcon from "../../assets/visitingHours/Daily.svg?react";
import PeakHoursIcon from "../../assets/visitingHours/Peak hours.svg?react";
import SunriseIcon from "../../assets/visitingHours/Sunrise.svg?react";

function HoursCard({ title, time, background }) {
 return (
  <div className={styles["card-container"]}>
   <div className={styles["card-background"]}>{background}</div>
   <div className={styles["card-content"]}>
    <div className={styles.title}>{title}</div>
    <div className={styles.time}>{time}</div>
   </div>
  </div>
 );
}

function VisitingHours() {
 return (
  <section className={styles["visiting-hours"]}>
   <div className={styles.header}>
    <h2>Visiting Hours</h2>
   </div>
   <div className={styles["visiting-hours-container"]}>
    <HoursCard title="Daily" time="5 am - 4 pm" background={<DailyIcon />} />
    <HoursCard
     title="Best Time to Visits"
     time="5 am - 6 am"
     background={<SunriseIcon />}
    />
    <HoursCard
     title="Peak Hours"
     time="5 am - 7 am"
     background={<PeakHoursIcon />}
    />
   </div>
  </section>
 );
}

export default VisitingHours;

HoursCard.propTypes = {
 title: PropTypes.string.isRequired,
 time: PropTypes.string.isRequired,
 background: PropTypes.node,
};
