import styles from "./rules.module.css";

import Trail from "../../../assets/dosDonts/Trail.svg?react";
import Sign from "../../../assets/dosDonts/Sign.svg?react";
import Trash from "../../../assets/dosDonts/Trash.svg?react";
import Belonging from "../../../assets/dosDonts/Belonging.svg?react";
import Walk from "../../../assets/dosDonts/Walk.svg?react";
import Litter from "../../../assets/dosDonts/Litter.svg?react";
import Monkey from "../../../assets/dosDonts/Monkey.svg?react";
import Plant from "../../../assets/dosDonts/Plant.svg?react";
import { visitorRules } from "../data";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const RULE_ICON_MAP = {
 trail: Trail,
 sign: Sign,
 trash: Trash,
 belonging: Belonging,
 walk: Walk,
 litter: Litter,
 monkey: Monkey,
 plant: Plant,
};

function Dos({ t }) {
 return (
  <div className={styles["dos-section"]}>
   <header className={styles["dos-header"]}>
    <h2>{t("titleDos")}</h2>
   </header>
   <div className={styles["dos-container"]}>
    {visitorRules.dos.map((item, index) => {
     const Icon = RULE_ICON_MAP[item.icon];
     return (
      <div key={index} className={styles["item-wrapper"]}>
       <div className={styles["icon-wrapper"]}>
        {" "}
        <div className={styles.icon}>
         <Icon />
        </div>
       </div>
       <div className={styles.label}>{t(item.label)}</div>
      </div>
     );
    })}
   </div>
  </div>
 );
}

function Donts({ t }) {
 return (
  <div className={styles["donts-section"]}>
   <header className={styles["donts-header"]}>
    <h2>{t("titleDonts")}</h2>
   </header>
   <div className={styles["donts-container"]}>
    {visitorRules.donts.map((item, index) => {
     const Icon = RULE_ICON_MAP[item.icon];
     return (
      <div key={index} className={styles["item-wrapper"]}>
       <div className={styles["icon-wrapper"]}>
        <div className={styles.icon}>
         <Icon />
        </div>
       </div>
       <div className={styles.label}>{t(item.label)}</div>
      </div>
     );
    })}
   </div>
  </div>
 );
}

function Rules() {
 const { t } = useTranslation("rules");
 return (
  <section className={styles.rules}>
   <Dos t={t} />
   <Donts t={t} />
  </section>
 );
}

Dos.propTypes = {
 t: PropTypes.func,
};
Donts.propTypes = {
 t: PropTypes.func,
};

export default Rules;
