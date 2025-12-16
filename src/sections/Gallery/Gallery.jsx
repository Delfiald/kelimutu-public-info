import PropTypes from "prop-types";
import styles from "./gallery.module.css";
import { useEffect, useRef } from "react";
import { images } from "./data";
import { useTranslation } from "react-i18next";

function GallerySlider({ trackRef, duplicated, t }) {
 return (
  <div className={styles["gallery-mask"]}>
   <div ref={trackRef} className={styles["gallery-slider"]}>
    {duplicated.map((image, index) => (
     <div key={index} className={styles.image}>
      <div className={styles["img-wrapper"]}>
       <img src={image.img} loading="lazy" alt={t(image.title)} />
      </div>
      <div className={styles["img-title"]}>{t(image.title)}</div>
      <div className={styles["img-description"]}>
       <p>{t(image.description)}</p>
       <p className={styles["img-source"]}>{t(image.source)}</p>
      </div>
     </div>
    ))}
   </div>
  </div>
 );
}

function Gallery() {
 const { t } = useTranslation("gallery");
 const trackRef = useRef(null);
 const pos = useRef(0);

 const duplicated = [...images, ...images];

 useEffect(() => {
  const track = trackRef.current;
  if (!track) return;

  let frame;
  const speed = 0.3;

  const animate = () => {
   pos.current -= speed;
   const width = track.scrollWidth / 2;

   if (Math.abs(pos.current) >= width) {
    pos.current = 0;
   }

   track.style.transform = `translateX(${pos.current}px)`;
   frame = requestAnimationFrame(animate);
  };

  frame = requestAnimationFrame(animate);

  return () => cancelAnimationFrame(frame);
 }, []);

 return (
  <section id="gallery" className={styles.gallery}>
   <header className={styles["gallery-header"]}>
    <h2>{t("title")}.</h2>
    <div>
     <div>{t("subtitle")}</div>
    </div>
   </header>
   <div className={styles["gallery-container"]}>
    <GallerySlider trackRef={trackRef} duplicated={duplicated} t={t} />
   </div>
  </section>
 );
}

export default Gallery;

GallerySlider.propTypes = {
 trackRef: PropTypes.object,
 duplicated: PropTypes.array,
 t: PropTypes.func,
};
