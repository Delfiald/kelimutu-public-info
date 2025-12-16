import styles from "./contact.module.css";

import Phone from "../../assets/contact/Phone.svg?react";
import Mail from "../../assets/contact/Mail.svg?react";
import Instagram from "../../assets/contact/Instagram.svg?react";
import Facebook from "../../assets/contact/Facebook.svg?react";
import Tiktok from "../../assets/contact/Tiktok.svg?react";
import X from "../../assets/contact/X.svg?react";
import Youtube from "../../assets/contact/Youtube.svg?react";
import Web from "../../assets/contact/Web.svg?react";
import { contacts, medias } from "./data";
import { useTranslation } from "react-i18next";

export const ICON_MAP = {
 mail: Mail,
 phone: Phone,
 instagram: Instagram,
 facebook: Facebook,
 tiktok: Tiktok,
 x: X,
 youtube: Youtube,
 web: Web,
};

function Contact() {
 const { t } = useTranslation("contact");
 return (
  <section id="contact" className={styles.contact}>
   <div className={styles.header}>
    <h2>{t("title")}.</h2>
   </div>
   <div className={styles["contact-section"]}>
    <div className={styles["unit-information"]}>
     <div className={styles["brand-logo"]}>
      <img src="./logo/brand.png" alt="KeNaPa" />
     </div>
     <div className={styles["unit-name"]}>
      <p>{t("unitName")}</p>
     </div>
    </div>
    <div className={styles["contact-group"]}>
     <div className={styles["contact-list"]}>
      {contacts.map((contact, index) => {
       const Icon = ICON_MAP[contact.icon];
       return (
        <a
         href={contact.href}
         key={index}
         className={styles["contact-wrapper"]}
        >
         <div className={styles["contact-icon"]}>
          <Icon />
         </div>
         <div className={styles["contact-address"]}>{contact.address}</div>
        </a>
       );
      })}
     </div>
     <div className={styles["media-list"]}>
      {medias.map((media, index) => {
       const Icon = ICON_MAP[media.icon];
       return (
        <a
         key={index}
         href={media.address}
         target="_blank"
         rel="noopener noreferrer"
         className={styles["media-wrapper"]}
        >
         <div className={styles["media-icon-wrapper"]}>
          <div className={styles["media-icon"]}>
           <Icon />
          </div>
          <div className={styles["media-label"]}>{media.label}</div>
         </div>
         <div className={styles["arrow-icon"]}>
          <i className="fas fa-arrow-right"></i>
         </div>
        </a>
       );
      })}
     </div>
    </div>
   </div>
  </section>
 );
}

export default Contact;
