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
  title: "fees.individual.title",
  types: [
   {
    icon: "person",
    name: ["fees.individual.domesticIndividual.name"],
    prices: [
     "fees.individual.domesticIndividual.prices.workingDays",
     "fees.individual.domesticIndividual.prices.holiday",
    ],
    note: [],
   },
   {
    icon: "student",
    name: [
     "fees.individual.groupStudents.name1",
     "fees.individual.groupStudents.name2",
    ],
    prices: [
     "fees.individual.groupStudents.prices.workingDays",
     "fees.individual.groupStudents.prices.holiday",
    ],
    note: [],
   },
   {
    icon: "person",
    name: ["fees.individual.international.name"],
    prices: ["fees.individual.international.prices"],
    note: [],
   },
  ],
 },
 {
  id: "vehicle",
  icon: "car",
  title: "fees.vehicle.title",
  types: [
   {
    icon: "bike",
    name: ["fees.vehicle.motorcycle.name"],
    prices: ["fees.vehicle.motorcycle.price"],
    note: [],
   },
   {
    icon: "car",
    name: ["fees.vehicle.car.name"],
    prices: ["fees.vehicle.car.price"],
    note: [],
   },
   {
    icon: "bus",
    name: ["fees.vehicle.bus.name"],
    prices: ["fees.vehicle.bus.price"],
    note: [],
   },
  ],
 },
 {
  id: "photoVideo",
  icon: "camera",
  title: "fees.photoVideo.title",
  types: [
   {
    icon: "married",
    name: [
     "fees.photoVideo.preWedding.name1",
     "fees.photoVideo.preWedding.name2",
    ],
    prices: [
     "fees.photoVideo.preWedding.domestic",
     "fees.photoVideo.preWedding.international",
    ],
    note: [],
   },
   {
    icon: "photo",
    name: [
     "fees.photoVideo.photography.name1",
     "fees.photoVideo.photography.name2",
    ],
    prices: [
     "fees.photoVideo.photography.domestic",
     "fees.photoVideo.photography.international",
    ],
    note: [],
   },
   {
    icon: "video",
    name: [
     "fees.photoVideo.videography.name1",
     "fees.photoVideo.videography.name2",
    ],
    prices: [
     "fees.photoVideo.videography.domestic",
     "fees.photoVideo.videography.international",
    ],
    note: [],
   },
  ],
 },
 {
  id: "otherServices",
  title: "fees.otherServices.title",
  types: [
   {
    icon: "camp",
    name: ["fees.otherServices.camping.name"],
    prices: ["fees.otherServices.camping.price"],
    note: ["fees.otherServices.camping.note"],
   },
   {
    icon: "drone",
    name: ["fees.otherServices.drone.name"],
    prices: ["fees.otherServices.drone.price"],
    note: ["fees.otherServices.drone.note"],
   },
  ],
 },
];

export const verticalStepper = [
 { icon: "open", name: "verticalStepper.open" },
 { icon: "select", name: "verticalStepper.select" },
 { icon: "scan", name: "verticalStepper.scan" },
 { icon: "amount", name: "verticalStepper.amount" },
 { icon: "confirm", name: "verticalStepper.confirm" },
 { icon: "save", name: "verticalStepper.save" },
 { icon: "show", name: "verticalStepper.show" },
];

export const prices = {
 visitors: [
  {
   key: "domestic",
   label: "prices.visitors.domestic.label",
   price: { workday: 10000, holiday: 15000 },
  },
  {
   key: "domesticGroupStudents",
   label: "prices.visitors.groupStudents.label",
   price: { workday: 5000, holiday: 7500 },
  },
  {
   key: "international",
   label: "prices.visitors.international.label",
   price: { workday: 150000, holiday: 150000 },
  },
 ],
 vehicles: [
  { key: "bike", label: "prices.vehicles.bike.label", price: 5000 },
  { key: "car", label: "prices.vehicles.car.label", price: 10000 },
  { key: "busTruck", label: "prices.vehicles.busTruck.label", price: 50000 },
 ],
 photoVideo: [
  {
   key: "preWedding",
   label: "prices.photoVideo.preWedding.label",
   price: { domestic: 1000000, international: 3000000 },
  },
  {
   key: "photography",
   label: "prices.photoVideo.photography.label",
   price: { domestic: 2000000, international: 5000000 },
  },
  {
   key: "videography",
   label: "prices.photoVideo.videography.label",
   price: { domestic: 10000000, international: 20000000 },
  },
 ],
 camping: [{ key: "camping", label: "prices.camping.label", price: 5000 }],
 drone: [{ key: "drone", label: "prices.drone.label", price: 2000000 }],
};
