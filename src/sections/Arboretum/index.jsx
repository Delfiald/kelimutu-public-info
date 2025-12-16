import { useTranslation } from "react-i18next";
import styles from "./arboretum.module.css";
import { arboretumImages } from "./data";

function Arboretum() {
 const { t } = useTranslation("arboretum");
 const mainImage = arboretumImages[0];

 return (
  <section className={styles.arboretum}>
   <header className={styles["arboretum-header"]}>
    <h2>{t("title")}</h2>
   </header>
   <div className={styles["arboretum-container"]}>
    <div className={styles["arboretum-text"]}>
     <p>{t("description.intro")}</p>
     <p>{t("description.note")}</p>
    </div>
    <div className={styles["main-image"]}>
     <div className={styles["image-wrapper"]}>
      <img src={mainImage.image} alt={mainImage.label} />
     </div>
    </div>
    <div className={styles.thumbnails}>
     {arboretumImages
      .filter((_, index) => index !== 0)
      .map((img, index) => (
       <div key={index} className={styles["image-wrapper"]}>
        <img src={img.image} loading="lazy" alt={img.label} />
        <div className={styles.label}>{t(img.label)}</div>
        <div className={styles.latin}>{`(${t(img.latin)})`}</div>
       </div>
      ))}
    </div>
   </div>
  </section>
 );
}

export default Arboretum;
