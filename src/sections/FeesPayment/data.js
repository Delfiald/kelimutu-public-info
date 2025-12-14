export const SECTION = {
 FEES: {
  key: "FEES",
  prev: null,
  next: "PAYMENT",
  labelNext: "Payment Info",
  labelPrev: null,
 },
 PAYMENT: {
  key: "PAYMENT",
  prev: "FEES",
  next: "CALCULATOR",
  labelNext: "Cost Calculator",
  labelPrev: "Fees",
 },
 CALCULATOR: {
  key: "CALCULATOR",
  prev: "PAYMENT",
  next: null,
  labelNext: null,
  labelPrev: "Payment Info",
 },
};

export const fees = [
 {
  id: "individual",
  icon: "person",
  title: "Person",
  types: [
   {
    icon: "person",
    name: ["Domestic Individual"],
    prices: ["Working Days - Rp.10.000,00", "Holiday - Rp.15.000,00"],
    note: [],
   },
   {
    icon: "student",
    name: ["Domestic Group Students", "(min 5 person)"],
    prices: ["Working Days - Rp.5.000,00", "Holiday - Rp.7.500,00"],
    note: [],
   },
   {
    icon: "person",
    name: ["International Individual"],
    prices: ["Rp.150.000,00"],
    note: [],
   },
  ],
 },
 {
  id: "vehicle",
  icon: "car",
  title: "Vehicle",
  types: [
   {
    icon: "bike",
    name: ["Motorcycle - (2 Wheels)"],
    prices: ["Rp.5.000,00"],
    note: [],
   },
   {
    icon: "car",
    name: ["Car - (4 Wheels)"],
    prices: ["Rp.10.000,00"],
    note: [],
   },
   {
    icon: "bus",
    name: ["Bus/Truck - (6 Wheels)"],
    prices: ["Rp.50.000,00"],
    note: [],
   },
  ],
 },
 {
  id: "photoVideo",
  icon: "camera",
  title: "Photography & Videography",
  types: [
   {
    icon: "married",
    name: ["Pre-wedding", "Photography and Videography"],
    prices: ["Domestic - Rp.1.000.000,00", "International - Rp.3.000.000,00"],
    note: [],
   },
   {
    icon: "photo",
    name: ["Photography", "Tour, Magazine, Product Ads, etc"],
    prices: ["Domestic - Rp.2.000.000,00", "International - Rp.5.000.000,00"],
    note: [],
   },
   {
    icon: "video",
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
    icon: "camp",
    name: ["Camping"],
    prices: ["Rp.5.000,00"],
    note: ["Per Person, Per Day"],
   },
   {
    icon: "drone",
    name: ["Drone Operation"],
    prices: ["Rp.2.000.000,00"],
    note: ["Per Unit, Per Day"],
   },
  ],
 },
];

export const verticalStepper = [
 {
  icon: "open",
  name: "Open your payment app",
 },
 {
  icon: "select",
  name: "Select Scan QR",
 },
 {
  icon: "scan",
  name: "Scan the QRIS code",
 },
 {
  icon: "amount",
  name: "Enter the amount",
 },
 {
  icon: "confirm",
  name: "Review and Confirm the payment details",
 },
 {
  icon: "save",
  name: "Save your payment receipt",
 },
 {
  icon: "show",
  name: "Show the payment receipt to the counter staff",
 },
];

export const prices = {
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
