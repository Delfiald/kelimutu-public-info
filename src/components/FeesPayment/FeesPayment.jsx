import styles from "./feesPayment.module.css";
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
import Open from "../../assets/payment/Open.svg?react";
import Select from "../../assets/payment/Select.svg?react";
import Scan from "../../assets/payment/Scan.svg?react";
import Amount from "../../assets/payment/Amount.svg?react";
import Confirm from "../../assets/payment/Confirm.svg?react";
import Save from "../../assets/payment/Save.svg?react";
import Show from "../../assets/payment/Show.svg?react";
import { useState } from "react";
import PropTypes from "prop-types";
import { Document, Page, pdfjs } from "react-pdf";

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
function RegulationModal({ url, toggleModal }) {
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

const SECTION = {
 FEES: "fees",
 PAYMENT: "payment",
 CALCULATOR: "calculator",
};

// Fees Section
function FeesSection({ toggleModal, setSectionContent }) {
 return (
  <>
   <div className={styles.header}>
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
   <div className={styles.bottom}>
    <div
     onClick={() => setSectionContent(SECTION.PAYMENT)}
     className={styles["next-button"]}
    >
     <span>Payment Info</span>
     <i className="fas fa-chevron-right"></i>
    </div>
   </div>
  </>
 );
}

const verticalStepper = [
 {
  pict: <Open />,
  name: "Open your payment app",
 },
 {
  pict: <Select />,
  name: "Select Scan QR",
 },
 {
  pict: <Scan />,
  name: "Scan the QRIS code",
 },
 {
  pict: <Amount />,
  name: "Enter the amount",
 },
 {
  pict: <Confirm />,
  name: "Review and Confirm the payment details",
 },
 {
  pict: <Save />,
  name: "Save your payment receipt",
 },
 {
  pict: <Show />,
  name: "Show the payment receipt to the counter staff",
 },
];

// Payment
function PaymentSection({ setSectionContent }) {
 return (
  <>
   <div className={styles.header}>
    <h2>Pay With QRIS.</h2>
    <div className={styles.subheader}>
     Digital payment for easier transactions.
    </div>
   </div>
   <div className={styles["payment-container"]}>
    <ul className={styles["payment-steps"]}>
     {verticalStepper.map((item, i) => (
      <li key={i} className={styles.step}>
       <div className={styles["step-pict"]}>{item.pict}</div>
       <div className={styles["step-name"]}>{item.name}</div>
      </li>
     ))}
    </ul>
    <div className={styles["cash-payment"]}>
     *Cash payment are also available at the counter
    </div>
   </div>
   <div className={styles.bottom}>
    <div
     onClick={() => setSectionContent(SECTION.FEES)}
     className={styles["prev-button"]}
    >
     <span>Fees</span>
     <i className="fas fa-chevron-left"></i>
    </div>
    <div
     onClick={() => setSectionContent(SECTION.CALCULATOR)}
     className={styles["next-button"]}
    >
     <span>Cost Calculator</span>
     <i className="fas fa-chevron-right"></i>
    </div>
   </div>
  </>
 );
}

function CalculatorSection({ setSectionContent }) {
 const prices = {
  visitor: [
   {
    key: "domestic",
    label: "Domestic",
    price: {
     workday: 10000,
     holiday: 15000,
    },
   },
   {
    key: "domesticGroupStudents",
    label: "Domestic Group Students",
    price: {
     workday: 7500,
     holiday: 10000,
    },
   },
   {
    key: "international",
    label: "International",
    price: {
     workday: 150000,
     holiday: 200000,
    },
   },
  ],

  vehicle: [
   { key: "bike", label: "Bike", price: 5000 },
   { key: "car", label: "Car", price: 10000 },
   { key: "busTruck", label: "Bus/Truck", price: 50000 },
  ],

  photoVideo: [
   {
    key: "preWedding",
    label: "Pre-Wedding",
    price: {
     domestic: 1000000,
     international: 1500000,
    },
   },
   {
    key: "photography",
    label: "Photography",
    price: {
     domestic: 2000000,
     international: 3000000,
    },
   },
   {
    key: "videography",
    label: "Videography",
    price: {
     domestic: 10000000,
     international: 15000000,
    },
   },
  ],

  camping: { key: "camping", label: "Camping", price: 20000 },
  drone: { key: "drone", label: "Drone Operation", price: 500000 },
 };

 const [visitors, setVisitors] = useState([
  { key: "international", count: 1 },
  { key: "domestic", count: 1 },
 ]);
 const [isHoliday, setIsHoliday] = useState(false);

 const [vehicle, setVehicle] = useState([{ key: "car", count: 1 }]);

 const [photoVideo, setPhotoVideo] = useState([
  { key: "photo", category: "international" },
 ]);

 const [camping, setCamping] = useState(5);
 const [drone, setDrone] = useState(1);

 const [openIndex, setOpenIndex] = useState(null);

 function getAvailableVisitorTypes(currentKey) {
  const usedKeys = visitors.map((v) => v.key);

  return prices.visitor.filter(
   (v) => v.key === currentKey || !usedKeys.includes(v.key)
  );
 }

 function updateVisitorTypes(opt, idx) {
  setVisitors((prev) => {
   const updated = [...prev];
   const current = updated[idx];

   updated[idx] = {
    ...current,
    key: opt.key,
    ...(opt.key === "domesticGroupStudents" &&
     current.count < 5 && { count: 5 }),
   };

   return updated;
  });
 }

 const maxVisitors = prices.visitor.length;

 function addVisitorType() {
  const used = visitors.map((v) => v.key);
  const available = prices.visitor.find((v) => !used.includes(v.key));

  if (!available) return;

  setVisitors((prev) => [
   ...prev,
   {
    key: available.key,
    ...(available.key === "domesticGroupStudents"
     ? { count: 5 }
     : { count: 1 }),
   },
  ]);
 }

 function removeVisitorType(key) {
  setVisitors((prev) => prev.filter((v) => v.key !== key));
 }

 function removeCount(key) {
  setVisitors((prev) =>
   prev.map((v) => {
    if (v.key !== key) return v;
    let min = 1;
    if (v.key === "domesticGroupStudents") min = 5;
    return { ...v, count: Math.max(min, v.count - 1) };
   })
  );
 }

 function addCount(key) {
  setVisitors((prev) =>
   prev.map((v) => (v.key === key ? { ...v, count: v.count + 1 } : v))
  );
 }

 return (
  <>
   <div className={styles.header}>
    <h2>Cost Calculator.</h2>
    <div className={styles.subheader}>
     Calculate an estimated total cost for your visit automatically
    </div>
   </div>
   <div className={styles["calculator-container"]}>
    <div className={styles["category-wrapper"]}>
     <div className={styles["category-container"]}>
      <div className={styles["category"]}>
       <div className={styles["category-label"]}>Visitor Type</div>
       <div className={styles["checkbox-wrapper"]}>
        <input
         className={styles["checkbox-input"]}
         type="checkbox"
         name="visitor-type"
         id="visitor-type"
         onChange={(e) => setIsHoliday(e.target.checked)}
        />
        <div
         className={`${styles["checkbox-display"]} ${
          isHoliday ? styles.checked : ""
         }`}
        ></div>
        <label htmlFor="visitor-type">Holiday</label>
       </div>
      </div>
      <div className={styles["field-wrapper"]}>
       {visitors.map((v, idx) => {
        const info = prices.visitor.find((p) => p.key === v.key);
        const availableTypes = getAvailableVisitorTypes(v.key);

        return (
         <div
          key={idx}
          className={`${styles["type-wrapper"]} ${
           idx > 0 ? styles.bordered : ""
          }`}
         >
          {/* Dropdown */}
          <div className={styles.dropdown}>
           <div className={styles.trigger} onClick={() => setOpenIndex(idx)}>
            {openIndex !== null ? (
             <i className="fas fa-chevron-up"></i>
            ) : (
             <i className="fas fa-chevron-down"></i>
            )}
            <p>{info.label}</p>
           </div>
           {/* Dropdown Item */}
           {openIndex === idx && (
            <div className={styles.options}>
             {availableTypes.map((option) => (
              <div
               key={option.key}
               onClick={() => {
                setOpenIndex(null);
                updateVisitorTypes(option, idx);
               }}
               className={styles.option}
              >
               {option.label}
              </div>
             ))}
            </div>
           )}
          </div>

          {/* Count */}
          <div className={styles["count-wrapper"]}>
           {v.count > 1 && (
            <div
             className={styles["decrease-button"]}
             onClick={() => removeCount(v.key)}
            >
             <i className="fas fa-minus"></i>
            </div>
           )}
           <div className={styles["count-value"]}>{v.count}</div>
           {
            <div
             className={styles["increase-button"]}
             onClick={() => addCount(v.key)}
            >
             <i className="fas fa-plus"></i>
            </div>
           }
          </div>

          {/* Remove Type */}
          {visitors.length > 1 && (
           <div
            className={styles["remove-button"]}
            onClick={() => removeVisitorType(info.key)}
           >
            <i className="fas fa-minus"></i>
           </div>
          )}
         </div>
        );
       })}
      </div>
      {/* Add Type */}
     </div>
     {visitors.length < maxVisitors && (
      <div className={styles["add-type-wrapper"]} onClick={addVisitorType}>
       <i className="fas fa-plus"></i>
       <span>Add More Visitor</span>
      </div>
     )}
    </div>
   </div>
   <div className={styles.bottom}>
    <div
     onClick={() => setSectionContent(SECTION.PAYMENT)}
     className={styles["prev-button"]}
    >
     <span>Payment Info</span>
     <i className="fas fa-chevron-left"></i>
    </div>
   </div>
  </>
 );
}

function FeesPayment() {
 const [isOpen, setIsOpen] = useState(false);
 const toggleModal = () => setIsOpen((prev) => !prev);

 const [sectionContent, setSectionContent] = useState(SECTION.FEES);

 return (
  <>
   <section className={styles["fees-payment"]}>
    {sectionContent === SECTION.FEES && (
     <FeesSection
      toggleModal={toggleModal}
      setSectionContent={setSectionContent}
     />
    )}
    {sectionContent === SECTION.PAYMENT && (
     <PaymentSection setSectionContent={setSectionContent} />
    )}
    {sectionContent === SECTION.CALCULATOR && (
     <CalculatorSection setSectionContent={setSectionContent} />
    )}
   </section>
   {isOpen && (
    <RegulationModal
     url={"/regulation/pp_36_2024.pdf"}
     toggleModal={toggleModal}
    />
   )}
  </>
 );
}

export default FeesPayment;

RegulationModal.propTypes = {
 url: PropTypes.string,
 toggleModal: PropTypes.func,
};

FeesSection.propTypes = {
 toggleModal: PropTypes.func,
 setSectionContent: PropTypes.func,
};

PaymentSection.propTypes = {
 setSectionContent: PropTypes.func,
};

CalculatorSection.propTypes = {
 setSectionContent: PropTypes.func,
};
