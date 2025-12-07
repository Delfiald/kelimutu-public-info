import PropTypes from "prop-types";
import styles from "./feesPayment.module.css";
import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";

import Person from "../../assets/fees/Person.svg?react";
import Student from "../../assets/fees/Student.svg?react";
import Car from "../../assets/fees/Car.svg?react";
import Bike from "../../assets/fees/Bike.svg?react";
import Bus from "../../assets/fees/Bus.svg?react";
import Camera from "../../assets/fees/Camera.svg?react";
import Married from "../../assets/fees/Married.svg?react";
import Photo from "../../assets/fees/Photo.svg?react";
import Video from "../../assets/fees/Video.svg?react";
import Camp from "../../assets/fees/Camp.svg?react";
import Drone from "../../assets/fees/Drone.svg?react";

const Fees = [
 {
  id: "individual",
  icon: <Person />,
  title: "Person",
  types: [
   {
    icon: <Person />,
    name: ["Domestic Individual"],
    prices: ["Working Days - Rp.10.000,00", "Holiday - Rp.15.000,00"],
    note: [],
   },
   {
    icon: <Student />,
    name: ["Domestic Group Students", "(min 5 person)"],
    prices: ["Working Days - Rp.5.000,00", "Holiday - Rp.7.500,00"],
    note: [],
   },
   {
    icon: <Person />,
    name: ["International Individual"],
    prices: ["Rp.150.000,00"],
    note: [],
   },
  ],
 },
 {
  id: "vehicle",
  icon: <Car />,
  title: "Vehicle",
  types: [
   {
    icon: <Bike />,
    name: ["Motorcycle - (2 Wheels)"],
    prices: ["Rp.5.000,00"],
    note: [],
   },
   {
    icon: <Car />,
    name: ["Car - (4 Wheels)"],
    prices: ["Rp.10.000,00"],
    note: [],
   },
   {
    icon: <Bus />,
    name: ["Bus/Truck - (6 Wheels)"],
    prices: ["Rp.50.000,00"],
    note: [],
   },
  ],
 },
 {
  id: "photoVideo",
  icon: <Camera />,
  title: "Photography & Videography",
  types: [
   {
    icon: <Married />,
    name: ["Pre-wedding", "Photography and Videography"],
    prices: ["Domestic - Rp.1.000.000,00", "International - Rp.3.000.000,00"],
    note: [],
   },
   {
    icon: <Photo />,
    name: ["Photography", "Tour, Magazine, Product Ads, etc"],
    prices: ["Domestic - Rp.2.000.000,00", "International - Rp.5.000.000,00"],
    note: [],
   },
   {
    icon: <Video />,
    name: ["Videography", "Film, Ads, Music Video, etc"],
    prices: ["Domestic - Rp.10.000.000,00", "International - Rp.20.000.000,00"],
    note: [],
   },
  ],
 },
 {
  id: "otherServices",
  title: "Other Services",
  types: [
   {
    icon: <Camp />,
    name: ["Camping"],
    prices: ["Rp.5.000,00"],
    note: ["Per Person, Per Day"],
   },
   {
    icon: <Drone />,
    name: ["Drone Operation"],
    prices: ["Rp.2.000.000,00"],
    note: ["Per Unit, Per Day"],
   },
  ],
 },
];

// Mobile
function Card() {
 return Fees.map((section) => (
  <div key={section.id} className={styles["fees-card"]}>
   <div className={styles["card-header"]}>
    <div className={styles.icon}>{section.icon}</div>
    <div className={styles.title}>{section.title}</div>
   </div>
   <div className={styles["card-content"]}>
    {section.types.map((type, index) => (
     <div key={index} className={styles["fees-type"]}>
      <div className={styles["type-header"]}>
       <div className={styles["type-icon"]}>{type.icon}</div>
       {type.name.map((n, i) => (
        <div key={i} className={styles["type-name"]}>
         <p>{n}</p>
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
         {p}
        </div>
       ))}
      </div>
      {type.note && type.note.length > 0 && (
       <div className={styles["type-note"]}>
        {type.note.map((n, i) => (
         <div key={i} className={styles.note}>
          {n}
         </div>
        ))}
       </div>
      )}
     </div>
    ))}
   </div>
  </div>
 ));
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
       {numPages && <Page pageNumber={pageNumber} width={600} />}
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
 return (
  <>
   <div id="ticket-section" className={styles.header}>
    <h2>Fees.</h2>
    <div className={styles.regulation}>
     <div className={styles["regulation-name"]} onClick={toggleModal}>
      Based on Government Regulation No. 36 of 2024
     </div>
     <div className={styles.icon}>
      <i className="fas fa-question"></i>
     </div>
    </div>
   </div>
   <div className={styles["fees-container"]}>
    <Card />
   </div>
  </>
 );
}

RegulationModal.propTypes = {
 url: PropTypes.string,
 toggleModal: PropTypes.func,
};

FeesSection.propTypes = {
 toggleModal: PropTypes.func,
};

export default FeesSection;
