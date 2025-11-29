import PropTypes from "prop-types";
import styles from "./visitingHours.module.css";
import DailyIcon from "../../assets/visitingHours/Daily.svg?react";
import PeakHoursIcon from "../../assets/visitingHours/Peak hours.svg?react";
import SunriseIcon from "../../assets/visitingHours/Sunrise.svg?react";

function HoursCard({ title, time, background, detail }) {
 return (
  <div className={styles["card-container"]}>
   <div className={styles["card-background"]}>{background}</div>
   <div className={styles["card-content"]}>
    <div className={styles["main-information"]}>
     <div className={styles.title}>{title}</div>
     <div className={styles.time}>{time}</div>
    </div>
    <div className={styles.detail}>
     <p>{detail}</p>
    </div>
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
    <HoursCard
     title="Daily"
     time="5 am - 4 pm"
     background={<DailyIcon />}
     detail={"Open every day throughout the year."}
    />
    <HoursCard
     title="Best Time to Visits"
     time="5 am - 6 am"
     background={<SunriseIcon />}
     detail={"For catching the sunrise and enjoying early-morning scenery"}
    />
    <HoursCard
     title="Peak Hours"
     time="5 am - 7 am"
     background={<PeakHoursIcon />}
     detail={"The busiest period as visitors gather for the sunrise"}
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
 detail: PropTypes.string,
};
