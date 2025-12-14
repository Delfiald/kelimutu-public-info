import styles from "./overview.module.css";

import { informationContent } from "../data";
import { useState } from "react";

function Overview() {
 const [activeIndex, setActiveIndex] = useState(0);

 const [visible, setVisible] = useState(true);

 function changeIndex(nextIndex) {
  if (nextIndex < 0 || nextIndex >= informationContent.length) return;
  if (nextIndex === activeIndex) return;

  setVisible(false);

  setTimeout(() => {
   setActiveIndex(nextIndex);
   setVisible(true);
  }, 200);
 }
 return (
  <div className={styles["information-wrapper"]}>
   <div className={styles["image-wrapper"]}>
    <img src="./about/kelimutu.png" alt="Kelimutu Lake" />
    {informationContent.slice(1).map((information, index) => {
     const originalIndex = index + 1;

     if (activeIndex === 0 || activeIndex === originalIndex) {
      return (
       <div
        key={originalIndex}
        className={`${styles["lake-label-wrapper"]} ${
         styles[`lake-${originalIndex}`]
        } ${styles.animate}`}
       >
        <div
         className={styles["lake-label"]}
         onClick={() => changeIndex(originalIndex)}
        >
         <p>{information.label}</p>
        </div>
       </div>
      );
     }
     return null;
    })}
   </div>
   <div className={styles["information-text-wrapper"]}>
    {informationContent.map(
     (information, index) =>
      index === activeIndex && (
       <div
        key={index}
        className={`${styles["information-text"]} ${
         visible ? styles.show : styles.hide
        }`}
       >
        <div className={styles["information-label"]}>
         {index === 0 ? "Mount Kelimutu" : information.label}
        </div>
        <div className={styles["information-description"]}>
         {information.description}
        </div>
       </div>
      )
    )}
    <div className={styles["accordion-wrapper"]}>
     <div
      className={`${styles["prev-button"]} ${
       activeIndex < 1 ? styles.hide : ""
      }`}
      onClick={() => changeIndex(activeIndex - 1)}
     >
      <i className="fas fa-chevron-left"></i>
     </div>
     {informationContent.map((information, index) => (
      <div
       key={index}
       className={`${styles["track"]} ${
        index === activeIndex ? styles.active : ""
       }`}
       onClick={() => changeIndex(index)}
      >
       <div className={styles["information-label"]}>
        {" "}
        {index === 0 ? "Mount Kelimutu" : information.label}
       </div>
      </div>
     ))}
     <div
      className={`${styles["next-button"]} ${
       activeIndex >= informationContent.length - 1 ? styles.hide : ""
      }`}
      onClick={() => changeIndex(activeIndex + 1)}
     >
      <i className="fas fa-chevron-right"></i>
     </div>
    </div>
   </div>
  </div>
 );
}

export default Overview;
