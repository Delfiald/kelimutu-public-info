import PropTypes from "prop-types";
import styles from "./fees.module.css";
import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";

import Person from "../../../assets/fees/Person.svg?react";
import Student from "../../../assets/fees/Student.svg?react";
import Car from "../../../assets/fees/Car.svg?react";
import Bike from "../../../assets/fees/Bike.svg?react";
import Bus from "../../../assets/fees/Bus.svg?react";
import Camera from "../../../assets/fees/Camera.svg?react";
import Married from "../../../assets/fees/Married.svg?react";
import Photo from "../../../assets/fees/Photo.svg?react";
import Video from "../../../assets/fees/Video.svg?react";
import Camp from "../../../assets/fees/Camp.svg?react";
import Drone from "../../../assets/fees/Drone.svg?react";
import { fees } from "../data";
import { useTranslation } from "react-i18next";

const ICON_MAP = {
 person: Person,
 student: Student,
 car: Car,
 bike: Bike,
 bus: Bus,
 camera: Camera,
 married: Married,
 photo: Photo,
 video: Video,
 camp: Camp,
 drone: Drone,
};

function Card({ t }) {
 return fees.map((section) => {
  const GroupIcon = ICON_MAP[section.icon];
  return (
   <div
    key={section.id}
    className={`${styles["fees-card"]} ${styles[section.id]}`}
   >
    <div className={styles["card-header"]}>
     <div className={styles["icon-title-wrapper"]}>
      <div className={styles.icon}>{GroupIcon && <GroupIcon />}</div>
      <div className={styles.title}>{t(section.title)}</div>
     </div>
     <div className={styles.rate}>{t("rate")}</div>
    </div>
    <div className={styles["card-content"]}>
     {section.types.map((type, index) => {
      const TypeIcon = ICON_MAP[type.icon];
      return (
       <div key={index} className={styles["fees-type"]}>
        <div className={styles["type-header"]}>
         <div className={styles["type-icon"]}>{TypeIcon && <TypeIcon />}</div>
         {type.name.map((n, i) => (
          <div key={i} className={styles["type-name"]}>
           <p>{t(n)}</p>
          </div>
         ))}
        </div>
        <div
         className={`${styles["type-prices"]} ${
          type.prices.length > 1 ? styles["has-multiple"] : ""
         }`}
        >
         {type.prices.map((p, i) => (
          <div key={i} className={styles.price}>
           {t(p)}
          </div>
         ))}
        </div>
        {type.note && type.note.length > 0 && (
         <div className={styles["type-note"]}>
          {type.note.map((n, i) => (
           <div key={i} className={styles.note}>
            {t(n)}
           </div>
          ))}
         </div>
        )}
       </div>
      );
     })}
    </div>
   </div>
  );
 });
}

// Regulation Modal
export function RegulationModal({ url, toggleModal }) {
 pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

 const [numPages, setNumPages] = useState(null);
 const [pageNumber, setPageNumber] = useState(1);
 const [pageInput, setPageInput] = useState(pageNumber);
 function onDocumentLoadSuccess({ numPages }) {
  setNumPages(numPages);
 }

 return (
  <div className={styles.modal}>
   <div className={styles["modal-wrapper"]}>
    <div className={styles["modal-container"]}>
     <div className={styles["pdf-wrapper"]}>
      <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
       {numPages && (
        <Page
         pageNumber={pageNumber}
         renderTextLayer={false}
         renderAnnotationLayer={false}
         width={Math.min(600, window.innerWidth - 64)}
        />
       )}
      </Document>
     </div>
     <div className={styles["pagination"]}>
      <button
       disabled={pageNumber <= 1}
       onClick={() => {
        setPageNumber(pageNumber - 1), setPageInput(pageNumber - 1);
       }}
       className={styles.button}
      >
       <i className="fas fa-chevron-left"></i>
      </button>
      <div className={styles["page-number"]}>
       <input
        className={styles.input}
        type="text"
        value={pageInput}
        onChange={(e) => {
         const value = e.target.value;
         setPageInput(e.target.value);
         const num = Number(value);
         if (num >= 1 && num <= numPages) {
          setPageNumber(num);
         }
        }}
       />
       <span>/</span>
       <span>{numPages}</span>
      </div>
      <button
       disabled={pageNumber >= numPages}
       onClick={() => {
        setPageNumber(pageNumber + 1), setPageInput(pageNumber + 1);
       }}
       className={styles.button}
      >
       <i className="fas fa-chevron-right"></i>
      </button>
     </div>
     <div className={styles["close-button"]} onClick={toggleModal}>
      <i className="fas fa-x"></i>
     </div>
    </div>
   </div>
  </div>
 );
}

function FeesSection({ toggleModal }) {
 const { t } = useTranslation("fees");
 return (
  <>
   <div className={styles.header}>
    <h2>{t("title")}.</h2>
    <div className={styles.regulation}>
     <div className={styles["regulation-name"]} onClick={toggleModal}>
      {t("regulation")}
     </div>
     <div className={styles.icon}>
      <i className="fas fa-question"></i>
     </div>
    </div>
   </div>
   <div className={styles["fees-container"]}>
    <Card t={t} />
   </div>
  </>
 );
}

RegulationModal.propTypes = {
 url: PropTypes.string,
 toggleModal: PropTypes.func,
};

Card.propTypes = {
 t: PropTypes.func,
};

FeesSection.propTypes = {
 toggleModal: PropTypes.func,
};

export default FeesSection;
