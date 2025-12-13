import PropTypes from "prop-types";
import styles from "./feesPayment.module.css";
import { useState } from "react";

const prices = {
 visitors: [
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
    workday: 5000,
    holiday: 7500,
   },
  },
  {
   key: "international",
   label: "International",
   price: {
    workday: 150000,
    holiday: 150000,
   },
  },
 ],

 vehicles: [
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
    international: 3000000,
   },
  },
  {
   key: "photography",
   label: "Photography",
   price: {
    domestic: 2000000,
    international: 5000000,
   },
  },
  {
   key: "videography",
   label: "Videography",
   price: {
    domestic: 10000000,
    international: 20000000,
   },
  },
 ],
 camping: [
  {
   key: "camping",
   label: "Camping",
   price: 5000,
  },
 ],
 drone: [
  {
   key: "drone",
   label: "Drone Operation",
   price: 2000000,
  },
 ],
};

function CategoryBox({
 fees,
 isHoliday,
 setIsHoliday,
 openIndex,
 setOpenIndex,
 updateType,
 updateCategory,
 decreaseCount,
 increaseCount,
 maxType,
 removeType,
 addType,
}) {
 const renderDropdown = (fee, item) => {
  const allOptions = prices[fee.id] || [];
  const itemLabel = allOptions.find((price) => price.key === item.key);
  const usedKeys = fee.items.map((i) => i.key);
  const availableOptions = allOptions.filter(
   (option) => option.key === item.key || !usedKeys.includes(option.key)
  );

  if (allOptions.length <= 1) return null;

  const toggleDropdown = () =>
   setOpenIndex(openIndex === item.key ? null : item.key);

  const selectOption = (key) => {
   updateType(fee.id, item.key, key);
   setOpenIndex(null);
  };

  return (
   <div
    className={`${styles.dropdown} ${
     openIndex === item.key ? styles.active : ""
    }`}
   >
    <div className={styles.trigger} onClick={toggleDropdown}>
     <i className="fas fa-chevron-down"></i>
     <p>{itemLabel.label}</p>
    </div>

    {/* Dropdown Item */}
    {openIndex === item.key && (
     <div className={styles.options}>
      {availableOptions.map((option) => (
       <div
        key={option.key}
        onClick={() => selectOption(option.key)}
        className={styles.option}
       >
        <div className={styles["option-wrapper"]}>{option.label}</div>
       </div>
      ))}
     </div>
    )}
   </div>
  );
 };

 const renderCountOrCategory = (fee, item) => {
  if (fee.id === "photoVideo") {
   return (
    <div className={styles["region-wrapper"]}>
     <div className={styles["input-wrapper"]}>
      <input
       type="radio"
       name={item.key}
       id={`domestic-${item.key}`}
       value={"domestic"}
       checked={item.category === "domestic"}
       onChange={(e) => updateCategory(fee.id, item.key, e.target.value)}
      />
      <label htmlFor={`domestic-${item.key}`}>Domestic</label>
     </div>
     <div className={styles["input-wrapper"]}>
      <input
       type="radio"
       name={item.key}
       id={`international-${item.key}`}
       value={"international"}
       checked={item.category === "international"}
       onChange={(e) => updateCategory(fee.id, item.key, e.target.value)}
      />
      <label htmlFor={`international-${item.key}`}>International</label>
     </div>
    </div>
   );
  }

  return (
   <div className={styles["count-wrapper"]}>
    <div className={styles["sub-label"]}>{fee.subLabel}</div>
    <div className={styles.counter}>
     {item.count > 1 &&
      !(item.key === "domesticGroupStudents" && item.count <= 5) && (
       <div
        className={styles["decrease-button"]}
        onClick={() => decreaseCount(fee.id, item.key)}
       >
        <i className="fas fa-minus"></i>
       </div>
      )}
     <div className={styles["count-value"]}>{item.count}</div>
     {
      <div
       className={styles["increase-button"]}
       onClick={() => increaseCount(fee.id, item.key)}
      >
       <i className="fas fa-plus"></i>
      </div>
     }
    </div>
   </div>
  );
 };

 const renderItem = (fee, item, index) => {
  const canRemove = fee.items.length > 1 || fee.id !== "visitors";
  return (
   <div
    key={item.key}
    className={`${styles["type-wrapper"]} ${index > 0 ? styles.bordered : ""}`}
   >
    {renderDropdown(fee, item)}
    {renderCountOrCategory(fee, item)}

    {canRemove && (
     <div
      className={styles["remove-button"]}
      onClick={() => removeType(fee.id, item.key)}
     >
      <i className="fas fa-minus"></i>
     </div>
    )}
   </div>
  );
 };

 return fees.map((fee) => (
  <div
   className={`${styles["category-wrapper"]} ${styles[fee.id] ?? ""}`}
   key={fee.id}
  >
   <div className={styles["category-container"]}>
    <div className={styles.category}>
     <div className={styles["category-label"]}>{fee.label}</div>
     {fee.id === "visitors" && fee.items?.length > 0 && (
      <div className={styles["checkbox-wrapper"]}>
       <input
        className={styles["checkbox-input"]}
        type="checkbox"
        name="visitor-type"
        id="visitor-type"
        onChange={(e) => setIsHoliday(e.target.checked)}
       />
       <label htmlFor="visitor-type">
        <div
         className={`${styles["checkbox-display"]} ${
          isHoliday ? styles.checked : ""
         }`}
        ></div>
        <span>Holiday</span>
       </label>
      </div>
     )}
    </div>
    {fee.items?.length > 0 && (
     <div className={styles["field-wrapper"]}>
      {fee.items.map((item, index) => renderItem(fee, item, index))}
     </div>
    )}

    {/* Add Type */}
   </div>
   {fee.items.length < maxType(fee.id) && (
    <div className={styles["add-type-wrapper"]} onClick={() => addType(fee.id)}>
     <i className="fas fa-plus"></i>
     <span>{fee.items?.length > 0 ? fee.addLabel : "Add"}</span>
    </div>
   )}
  </div>
 ));
}

function CalculatorSection() {
 const [fees, setFees] = useState([
  {
   id: "visitors",
   label: "Visitor Type",
   subLabel: "Visitor Count",
   addLabel: "Add More Visitor",
   items: [
    {
     key: "international",
     count: 1,
    },
    {
     key: "domestic",
     count: 1,
    },
   ],
  },
  {
   id: "vehicles",
   label: "Vehicle Type",
   subLabel: "Vehicle Count",
   addLabel: "Add Vehicle",
   items: [{ key: "car", count: 1 }],
  },
  {
   id: "photoVideo",
   label: "Photo or Video Type",
   addLabel: "More Photo or Video",
   items: [{ key: "photography", category: "international" }],
  },
  {
   id: "camping",
   label: "Camping",
   subLabel: "Number of Campers",
   items: [{ key: "camping", count: 2 }],
  },
  {
   id: "drone",
   label: "Drone",
   subLabel: "Unit",
   items: [{ key: "drone", count: 1 }],
  },
 ]);

 const [isHoliday, setIsHoliday] = useState(false);
 const [openIndex, setOpenIndex] = useState(null);

 const defaultItemBuilder = {
  visitors: (key) => ({ key, count: key === "domesticGroupStudents" ? 5 : 1 }),
  vehicles: (key) => ({ key, count: 1 }),
  photoVideo: (key) => ({ key, category: "domestic" }),
  camping: (key) => ({ key, count: 1 }),
  drone: (key) => ({ key, count: 1 }),
 };

 function addType(type) {
  const section = fees.find((f) => f.id === type);
  const used = section.items.map((t) => t.key);
  const available = prices[type].find((t) => !used.includes(t.key));

  if (!available) return;

  const newItem = defaultItemBuilder[type](available.key);

  setFees((prev) =>
   prev.map((fee) =>
    fee.id === type
     ? {
        ...fee,
        items: [...fee.items, newItem],
       }
     : fee
   )
  );
 }

 function removeType(type, key) {
  setFees((prev) =>
   prev.map((fee) =>
    fee.id === type
     ? { ...fee, items: fee.items.filter((item) => item.key !== key) }
     : fee
   )
  );
 }

 function updateType(type, oldKey, newKey) {
  setFees((prev) =>
   prev.map((fee) =>
    fee.id === type
     ? {
        ...fee,
        items: fee.items.map((item) => {
         if (item.key !== oldKey) return item;

         const updatedItem = { ...item, key: newKey };

         if (type === "visitors" || type === "vehicles") {
          updatedItem.count =
           newKey === "domesticGroupStudents" ? Math.max(item.count, 5) : 1;
         }

         return updatedItem;
        }),
       }
     : fee
   )
  );
 }

 function maxType(type) {
  return prices[type].length;
 }

 function updateCategory(type, key, category) {
  setFees((prev) =>
   prev.map((fee) =>
    fee.id === type
     ? {
        ...fee,
        items: fee.items.map((item) =>
         item.key === key ? { ...item, category } : item
        ),
       }
     : fee
   )
  );
 }

 function increaseCount(type, key) {
  setFees((prev) =>
   prev.map((fee) => {
    if (fee.id !== type) return fee;

    return {
     ...fee,
     items: fee.items.map((item) => {
      if (item.key !== key) return item;

      if ("count" in item) {
       return { ...item, count: item.count + 1 };
      }

      return item;
     }),
    };
   })
  );
 }

 function decreaseCount(type, key) {
  setFees((prev) =>
   prev.map((fee) => {
    if (fee.id !== type) return fee;

    return {
     ...fee,
     items: fee.items.map((item) => {
      if (item.key !== key) return item;

      if ("count" in item) {
       let min = item.key === "domesticGroupStudents" ? 5 : 1;
       return { ...item, count: Math.max(item.count - 1, min) };
      }

      return item;
     }),
    };
   })
  );
 }

 function getItemPrice(fee, item) {
  const priceList = prices[fee.id];
  if (!priceList) return 0;

  if (Array.isArray(priceList)) {
   const priceObj = priceList.find((p) => p.key === item.key);
   if (!priceObj) return 0;

   if (fee.id === "visitors")
    return (
     (isHoliday ? priceObj.price.holiday : priceObj.price.workday) *
     (item.count || 1)
    );
   if (fee.id === "photoVideo")
    return priceObj.price[item.category || "domestic"] || 0;
   return (priceObj.price || 0) * (item.count || 1);
  }

  return (priceList[0]?.price || 0) * (item.count || 1);
 }

 function getTotal() {
  return fees.reduce(
   (total, fee) =>
    total +
    (fee.items?.reduce(
     (sum, item) => sum + getItemPrice(fee, item, isHoliday),
     0
    ) || 0),
   0
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
    <CategoryBox
     fees={fees}
     isHoliday={isHoliday}
     setIsHoliday={setIsHoliday}
     openIndex={openIndex}
     setOpenIndex={setOpenIndex}
     updateType={updateType}
     updateCategory={updateCategory}
     decreaseCount={decreaseCount}
     increaseCount={increaseCount}
     maxType={maxType}
     removeType={removeType}
     addType={addType}
    />
    <div className={styles["total-container"]}>
     <div className={styles.total}>
      <div className={styles.currency}>Rp.</div>
      <div className={styles.value}>{getTotal().toLocaleString()}</div>
     </div>
    </div>
   </div>
  </>
 );
}

CategoryBox.propTypes = {
 fees: PropTypes.array,
 isHoliday: PropTypes.bool,
 setIsHoliday: PropTypes.func,
 openIndex: PropTypes.string,
 setOpenIndex: PropTypes.func,
 updateType: PropTypes.func,
 updateCategory: PropTypes.func,
 decreaseCount: PropTypes.func,
 increaseCount: PropTypes.func,
 maxType: PropTypes.func,
 removeType: PropTypes.func,
 addType: PropTypes.func,
};

export default CalculatorSection;
