import styles from "./colorChanges.module.css";
import { images } from "../data";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

function ColorChanges() {
 const { t } = useTranslation("colorChanges");
 const trackRef = useRef(null);
 const [index, setIndex] = useState(0);

 const getClientPos = (e, horizontal = false) => {
  if (e.touches)
   return horizontal ? e.touches[0].clientX : e.touches[0].clientY;
  return horizontal ? e.clientX : e.clientY;
 };

 const isResponsiveHorizontal = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const ratio = height / width;

  if (width >= 1024 && ratio < 1.2) return false;

  if (width <= 375 && height <= 667) return false;

  if (ratio >= 1.8) return true;

  if (width >= 360 && ratio > 1) return true;

  return false;
 };

 const handleDrag = (e) => {
  if (e.cancelable && e.touches) e.preventDefault();
  const track = trackRef.current;
  if (!track) return;

  const rect = track.getBoundingClientRect();

  const pos = getClientPos(e, isResponsiveHorizontal());

  const percentage = isResponsiveHorizontal()
   ? Math.min(Math.max((pos - rect.left) / rect.width, 0), 1)
   : Math.min(Math.max((pos - rect.top) / rect.height, 0), 1);

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
  <div className={styles["color-changes-wrapper"]}>
   <h2>{t("title")}</h2>
   <div className={styles["color-changes-container"]}>
    <div className={styles["track-wrapper"]}>
     <div>{images[0].alt}</div>
     <div className={styles["track-container"]} ref={trackRef}>
      <div
       className={styles.handle}
       onMouseDown={startDrag}
       onTouchStart={startDrag}
       style={{
        ...(isResponsiveHorizontal()
         ? { left: `${(index / (images.length - 1)) * 100}%`, top: "50%" }
         : { top: `${(index / (images.length - 1)) * 100}%`, left: "50%" }),
       }}
      >
       <div></div>
      </div>
     </div>
     <div>{images[images.length - 1].alt}</div>
    </div>
    <div className={styles["image-container"]}>
     <div className={styles["image-wrapper"]}>
      <img src={images[index].src} alt={images[index].alt} />
      <div className={styles["image-label"]}>{images[index].alt}</div>
     </div>
    </div>
   </div>
  </div>
 );
}

export default ColorChanges;
