import styles from "./history.module.css";
import { useState } from "react";
import { kelimutuFormationSteps, folkloreSteps } from "../data";

function History() {
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
      Geological
     </div>
     <div
      onClick={() => setHistory("folklore")}
      className={`${styles["history-type"]} ${
       history === "folklore" ? styles.active : ""
      }`}
     >
      Folklore
     </div>
    </div>
    <ul>
     {(history === "geological" ? kelimutuFormationSteps : folkloreSteps).map(
      (step, stage) => (
       <li key={stage} className={styles.stage}>
        <div className={styles["stage-description"]}>{step.description}</div>
       </li>
      )
     )}
    </ul>
   </div>
  </>
 );
}

export default History;
