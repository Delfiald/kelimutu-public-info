import styles from "./arboretum.module.css";

function Arboretum() {
 return (
  <section className={styles.arboretum}>
   <div className={styles.header}>
    <h2>Discover Arboretum Park.</h2>
   </div>
   <div className={styles["arboretum-container"]}>
    <div className={styles["arboretum-text"]}>
     <p>
      Just south of the vehicle stop lies the lush Arboretum Park, a living
      gallery of nature. Wander among 140 species of trees and shrubs, 36 types
      of medicinal plants, and rare endemic flora like Uta Onga, Vireya
      Rhododendron, and Arngoni. Spot the Garugiwa and Flores hawk-eagle soaring
      above, and immerse yourself in the vibrant symphony of life unique to
      Kelimutu.
     </p>
     <p>
      A must-visit for nature lovers, photographers, and anyone seeking a
      magical forest experience.
     </p>
    </div>
    <div className={styles["arboretum-images"]}>
     <div className={styles["image-wrapper"]}>
      <img src="/arboretum/arboretum.jpeg" alt="Arboretum" />
     </div>
    </div>
   </div>
  </section>
 );
}

export default Arboretum;
