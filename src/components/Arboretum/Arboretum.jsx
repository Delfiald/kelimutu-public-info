import styles from "./arboretum.module.css";

const arboretumImages = [
 {
  image: "/arboretum/arboretum.jpeg",
  label: "Arboretum",
 },
 {
  image: "/arboretum/uta-onga.jpg",
  label: "Uta Onga",
  latin: "Begonia Kelimutuensis",
 },
 {
  image: "/arboretum/turuwara.png",
  label: "Turuwara",
  latin: "Rhododendron Renschianum",
 },
 {
  image: "/arboretum/arngoni.png",
  label: "Arngoni",
  latin: "Vaccinium Varingiaefolium",
 },
];

function Arboretum() {
 const mainImage = arboretumImages[0];

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
      of medicinal plants, and rare endemic flora like Uta Onga{" "}
      <span>(Begonia kelimutuensis)</span>, Turuwara{" "}
      <span>(Rhododendron Renschianum)</span>, and Arngoni
      <span>(Vaccinium Varingiaefolium)</span>. Spot the Garugiwa and Flores
      hawk-eagle soaring above, and immerse yourself in the vibrant symphony of
      life unique to Kelimutu.
     </p>
     <p>
      A must-visit for nature lovers, photographers, and anyone seeking a
      magical forest experience.
     </p>
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
        <img src={img.image} alt={img.label} />
        <div className={styles.label}>{img.label}</div>
        <div className={styles.latin}>{`(${img.latin})`}</div>
       </div>
      ))}
    </div>
   </div>
  </section>
 );
}

export default Arboretum;
