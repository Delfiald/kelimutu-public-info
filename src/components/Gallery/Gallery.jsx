import PropTypes from "prop-types";
import styles from "./gallery.module.css";
import { useEffect, useRef } from "react";

const images = [
 {
  img: "/gallery/kelimutu.JPG",
  title: "Kelimutu Crater Lakes",
  description:
   "A clear view of the famous tri-colored crater lakes of Mount Kelimutu.",
 },
 {
  img: "/gallery/between-lake.png",
  title: "Between the Lakes",
  description:
   "A view of the rocky terrain located between Kelimutu’s crater rims.",
 },
 {
  img: "/gallery/hut-ri.jpeg",
  title: "Independence Day Ceremony",
  description:
   "A special ceremony held every 17 August to celebrate Indonesia’s Independence Day at Mount Kelimutu.",
 },
 {
  img: "/gallery/kelimutu-far.JPG",
  title: "Kelimutu from Afar",
  description:
   "A distant view of the Kelimutu crater landscape, showing its dramatic terrain.",
 },
 {
  img: "/gallery/milky-way.jpeg",
  title: "Kelimutu Night Sky",
  description:
   "A breathtaking Milky Way shot captured from Kelimutu, known for its clear skies with minimal light pollution.",
 },
 {
  img: "/gallery/patika.png",
  title: "Pati Ka",
  description: `Pati Ka Du'a Bapu Ata Mata an annual cultural ceremony held every 14th of August at Mount Kelimutu.`,
 },
 {
  img: "/gallery/sunrise.png",
  title: "Kelimutu Sunrise",
  description:
   "A sunrise view from Kelimutu, one of the most popular moments for visitors.",
 },
 {
  img: "/gallery/garugiwa.png",
  title: "Garugiwa (Pachycephala nudigula)",
  description:
   "An iconic Flores species whose 12-note call fills Kelimutu’s dawn with an almost mystical chorus, greeting visitors as light rises over the crater lakes.",
 },
];

function GallerySlider({ trackRef, duplicated }) {
 return (
  <div className={styles["gallery-mask"]}>
   <div ref={trackRef} className={styles["gallery-slider"]}>
    {duplicated.map((image, index) => (
     <div key={index} className={styles.image}>
      <div className={styles["img-wrapper"]}>
       <img src={image.img} alt={image.title} />
      </div>
      <div className={styles["img-title"]}>{image.title}</div>
      <div className={styles["img-description"]}>{image.description}</div>
     </div>
    ))}
   </div>
  </div>
 );
}

function Gallery() {
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
  <section className={styles.gallery}>
   <div className={styles.header}>
    <h2>Gallery.</h2>
    <div>{`A glimpse of Kelimutu's Beauty`}</div>
   </div>
   <div className={styles["gallery-container"]}>
    <GallerySlider trackRef={trackRef} duplicated={duplicated} />
   </div>
  </section>
 );
}

export default Gallery;

GallerySlider.propTypes = {
 trackRef: PropTypes.object,
 duplicated: PropTypes.array,
};
