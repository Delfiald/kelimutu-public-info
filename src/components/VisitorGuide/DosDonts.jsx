import styles from "./visitorGuide.module.css";

import Trail from "../../assets/dosDonts/Trail.svg?react";
import Sign from "../../assets/dosDonts/Sign.svg?react";
import Trash from "../../assets/dosDonts/Trash.svg?react";
import Belonging from "../../assets/dosDonts/Belonging.svg?react";
import Walk from "../../assets/dosDonts/Walk.svg?react";
import Litter from "../../assets/dosDonts/Litter.svg?react";
import Monkey from "../../assets/dosDonts/Monkey.svg?react";
import Plant from "../../assets/dosDonts/Plant.svg?react";

const dosDonts = {
 dos: [
  {
   icon: <Trail />,
   label: "Stay on designated trails",
  },
  {
   icon: <Sign />,
   label: "Follow all posted signs & instructions",
  },
  {
   icon: <Trash />,
   label: "Dispose of trash properly",
  },
  {
   icon: <Belonging />,
   label: "Look after your personal belongings",
  },
 ],
 donts: [
  {
   icon: <Walk />,
   label: "Do not cross safety barriers or fences",
  },
  {
   icon: <Litter />,
   label: "Do not litter",
  },
  {
   icon: <Monkey />,
   label: "Do not feed wildlife",
  },
  {
   icon: <Plant />,
   label: "Do not pick plants or disturb natural features",
  },
 ],
};

function Dos() {
 return (
  <div className={styles["dos-section"]}>
   <div className={styles.header}>
    <h2>{`Do's`}</h2>
   </div>
   <div className={styles["dos-container"]}>
    {dosDonts.dos.map((item, index) => (
     <div key={index} className={styles["item-wrapper"]}>
      <div className={styles["icon-wrapper"]}>
       {" "}
       <div className={styles.icon}>{item.icon}</div>
      </div>
      <div className={styles.label}>{item.label}</div>
     </div>
    ))}
   </div>
  </div>
 );
}

function Donts() {
 return (
  <div className={styles["donts-section"]}>
   <div className={styles.header}>
    <h2>{`Don'ts`}</h2>
   </div>
   <div className={styles["donts-container"]}>
    {dosDonts.donts.map((item, index) => (
     <div key={index} className={styles["item-wrapper"]}>
      <div className={styles["icon-wrapper"]}>
       <div className={styles.icon}>{item.icon}</div>
      </div>
      <div className={styles.label}>{item.label}</div>
     </div>
    ))}
   </div>
  </div>
 );
}

function DosDonts() {
 return (
  <section className={styles.dosDonts}>
   <Dos />
   <Donts />
  </section>
 );
}

export default DosDonts;
