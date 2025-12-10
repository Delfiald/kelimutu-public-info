import styles from "./aboutKelimutu.module.css";
import { useRef, useState } from "react";

const images = [
 { id: 1, key: "color-1", src: "/colors/color-1.png", alt: "1915" },
 { id: 2, key: "color-2", src: "/colors/color-2.png", alt: "1929" },
 { id: 3, key: "color-3", src: "/colors/color-3.png", alt: "1940" },
 { id: 4, key: "color-4", src: "/colors/color-4.png", alt: "1951" },
 { id: 5, key: "color-5", src: "/colors/color-5.png", alt: "1958" },
 { id: 6, key: "color-6", src: "/colors/color-6.png", alt: "1960" },
 { id: 7, key: "color-7", src: "/colors/color-7.png", alt: "1968" },
 { id: 8, key: "color-8", src: "/colors/color-8.png", alt: "1980" },
 { id: 9, key: "color-9", src: "/colors/color-9.png", alt: "1984" },
 { id: 10, key: "color-10", src: "/colors/color-10.png", alt: "1987" },
 { id: 11, key: "color-11", src: "/colors/color-11.png", alt: "1990" },
 { id: 12, key: "color-12", src: "/colors/color-12.png", alt: "1992" },
 { id: 13, key: "color-13", src: "/colors/color-13.png", alt: "1995" },
 { id: 14, key: "color-14", src: "/colors/color-14.png", alt: "2002" },
 { id: 15, key: "color-15", src: "/colors/color-15.png", alt: "2008" },
 { id: 16, key: "color-16", src: "/colors/color-16.png", alt: "2011" },
 { id: 17, key: "color-17", src: "/colors/color-17.png", alt: "2015" },
 { id: 18, key: "color-18", src: "/colors/color-18.png", alt: "2018" },
 { id: 19, key: "color-19", src: "/colors/color-19.png", alt: "2021" },
 { id: 20, key: "color-20", src: "/colors/color-20.png", alt: "2023" },
];

function ColorChanges() {
 const trackRef = useRef(null);
 const [index, setIndex] = useState(0);

 const getClientY = (e) => {
  if (e.touches) return e.touches[0].clientY;
  return e.clientY;
 };

 const handleDrag = (e) => {
  if (e.cancelable && e.touches) e.preventDefault();
  const track = trackRef.current;
  if (!track) return;

  const rect = track.getBoundingClientRect();
  const y = getClientY(e) - rect.top;
  const percentage = Math.min(Math.max(y / rect.height, 0), 1);

  const newIndex = Math.floor(percentage * (images.length - 1));
  setIndex(newIndex);
 };

 const startDrag = () => {
  document.addEventListener("mousemove", handleDrag);
  document.addEventListener("mouseup", stopDrag);

  document.addEventListener("touchmove", handleDrag, { passive: false });
  document.addEventListener("touchend", stopDrag);
 };

 const stopDrag = () => {
  document.removeEventListener("mousemove", handleDrag);
  document.removeEventListener("mouseup", stopDrag);

  document.removeEventListener("touchmove", handleDrag);
  document.removeEventListener("touchend", stopDrag);
 };

 return (
  <>
   <h2>Trace the Changing Shades of Kelimutu’s Crater Lakes</h2>
   <div className={styles["color-changes-container"]}>
    <div className={styles["track-container"]} ref={trackRef}>
     <div
      className={styles.handle}
      onMouseDown={startDrag}
      onTouchStart={startDrag}
      style={{
       top: `${(index / (images.length - 1)) * 100}%`,
      }}
     ></div>
    </div>
    <div className={styles["image-container"]}>
     <div className={styles["image-wrapper"]}>
      <img src={images[index].src} alt={images[index].alt} />
      <div className={styles["image-label"]}>{images[index].alt}</div>
     </div>
    </div>
   </div>
  </>
 );
}

export default ColorChanges;
