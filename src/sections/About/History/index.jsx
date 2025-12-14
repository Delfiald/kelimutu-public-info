import styles from "./history.module.css";
import { useState } from "react";
import { kelimutuFormationSteps, folkloreSteps } from "../data";
import { useTranslation } from "react-i18next";

function History() {
 const { t } = useTranslation("history");
 const [history, setHistory] = useState("geological");

 return (
  <>
   <div className={styles["history-wrapper"]}>
    <div className={styles["history-button"]}>
     <div
      onClick={() => setHistory("geological")}
      className={`${styles["history-type"]} ${
       history === "geological" ? styles.active : ""
      }`}
     >
      {t("types.geological")}
     </div>
     <div
      onClick={() => setHistory("folklore")}
      className={`${styles["history-type"]} ${
       history === "folklore" ? styles.active : ""
      }`}
     >
      {t("types.folklore")}
     </div>
    </div>
    <ul>
     {(history === "geological" ? kelimutuFormationSteps : folkloreSteps).map(
      (step, stage) => (
       <li key={stage} className={styles.stage}>
        <div className={styles["stage-description"]}>{t(step.description)}</div>
       </li>
      )
     )}
    </ul>
   </div>
  </>
 );
}

export default History;
