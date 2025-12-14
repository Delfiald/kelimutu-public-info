import { visitHours } from "./data";
import styles from "./visitingHours.module.css";
import DailyIcon from "../../assets/visitingHours/Daily.svg?react";
import PeakHoursIcon from "../../assets/visitingHours/Peak hours.svg?react";
import SunriseIcon from "../../assets/visitingHours/Sunrise.svg?react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const ICON_MAP = {
 daily: DailyIcon,
 sunrise: SunriseIcon,
 peak: PeakHoursIcon,
};

function HoursCard({ t }) {
 return visitHours.map((hours, index) => {
  const Icon = ICON_MAP[hours.icon];

  return (
   <div key={index} className={styles["card-container"]}>
    <div className={styles["card-background"]}>
     <Icon />
    </div>
    <div className={styles["card-content"]}>
     <div className={styles["main-information"]}>
      <div className={styles.title}>{t(hours.title)}</div>
      <div className={styles.time}>{t(hours.time)}</div>
     </div>
     <div className={styles.detail}>
      <p>{t(hours.detail)}</p>
     </div>
    </div>
   </div>
  );
 });
}

function VisitingHours() {
 const { t } = useTranslation("visitingHours");
 return (
  <section id="visit" className={styles["visiting-hours"]}>
   <header className={styles["visiting-hours-header"]}>
    <h2>{t("title")}</h2>
   </header>
   <div className={styles["visiting-hours-container"]}>
    <HoursCard t={t} />
   </div>
  </section>
 );
}

HoursCard.propTypes = {
 t: PropTypes.func,
};

export default VisitingHours;
