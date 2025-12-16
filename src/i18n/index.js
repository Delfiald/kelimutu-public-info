import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import headerEN from "./locales/en/header.json";
import headerID from "./locales/id/header.json";
import heroEN from "./locales/en/hero.json";
import heroID from "./locales/id/hero.json";
import aboutEN from "./locales/en/about.json";
import aboutID from "./locales/id/about.json";
import overviewEN from "./locales/en/overview.json";
import overviewID from "./locales/id/overview.json";
import historyEN from "./locales/en/history.json";
import historyID from "./locales/id/history.json";
import colorChangesEN from "./locales/en/colorChanges.json";
import colorChangesID from "./locales/id/colorChanges.json";
import arboretumEN from "./locales/en/arboretum.json";
import arboretumID from "./locales/id/arboretum.json";
import visitingHoursEN from "./locales/en/visitingHours.json";
import visitingHoursID from "./locales/id/visitingHours.json";
import feesPaymentEN from "./locales/en/feesPayment.json";
import feesPaymentID from "./locales/id/feesPayment.json";
import feesEN from "./locales/en/fees.json";
import feesID from "./locales/id/fees.json";
import paymentEN from "./locales/en/payment.json";
import paymentID from "./locales/id/payment.json";
import costCalculatorEN from "./locales/en/costCalculator.json";
import costCalculatorID from "./locales/id/costCalculator.json";
import facilitiesEN from "./locales/en/facilities.json";
import facilitiesID from "./locales/id/facilities.json";
import rulesEN from "./locales/en/rules.json";
import rulesID from "./locales/id/rules.json";
import faqEN from "./locales/en/faq.json";
import faqID from "./locales/id/faq.json";
import galleryEN from "./locales/en/gallery.json";
import galleryID from "./locales/id/gallery.json";
import contactEN from "./locales/en/contact.json";
import contactID from "./locales/id/contact.json";
import footerEN from "./locales/en/footer.json";
import footerID from "./locales/id/footer.json";

i18n.use(initReactI18next).init({
 resources: {
  en: {
   header: headerEN,
   hero: heroEN,
   overview: overviewEN,
   history: historyEN,
   about: aboutEN,
   colorChanges: colorChangesEN,
   arboretum: arboretumEN,
   visitingHours: visitingHoursEN,
   feesPayment: feesPaymentEN,
   fees: feesEN,
   payment: paymentEN,
   costCalculator: costCalculatorEN,
   facilities: facilitiesEN,
   rules: rulesEN,
   faq: faqEN,
   gallery: galleryEN,
   contact: contactEN,
   footer: footerEN,
  },
  id: {
   header: headerID,
   hero: heroID,
   overview: overviewID,
   history: historyID,
   about: aboutID,
   colorChanges: colorChangesID,
   arboretum: arboretumID,
   visitingHours: visitingHoursID,
   feesPayment: feesPaymentID,
   fees: feesID,
   payment: paymentID,
   costCalculator: costCalculatorID,
   facilities: facilitiesID,
   rules: rulesID,
   faq: faqID,
   gallery: galleryID,
   contact: contactID,
   footer: footerID,
  },
 },
 lng: localStorage.getItem("lang") || "id",
 fallbackLng: "id",
 interpolation: {
  escapeValue: false,
 },
});

export default i18n;
