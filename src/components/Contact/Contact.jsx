import styles from "./contact.module.css";

import Phone from "../../assets/contact/Phone.svg?react";
import Mail from "../../assets/contact/Mail.svg?react";
import Instagram from "../../assets/contact/Instagram.svg?react";
import Facebook from "../../assets/contact/Facebook.svg?react";
import Tiktok from "../../assets/contact/Tiktok.svg?react";
import X from "../../assets/contact/X.svg?react";
import Youtube from "../../assets/contact/Youtube.svg?react";
import Web from "../../assets/contact/Web.svg?react";

const contacts = [
 {
  icon: <Mail />,
  address: "btnkelimutu@gmail.com",
  href: "mailto:btnkelimutu@gmail.com",
 },
 {
  icon: <Phone />,
  address: "08113829716",
  href: "tel:+628113829716",
 },
];

const medias = [
 {
  icon: <Instagram />,
  label: "Instagram",
  address: "https://www.instagram.com/btn_kelimutu",
 },
 {
  icon: <Facebook />,
  label: "Facebook",
  address: "https://www.facebook.com/btnkelimutu",
 },
 {
  icon: <Tiktok />,
  label: "Tiktok",
  address: "https://www.tiktok.com/@btn_kelimutu",
 },
 {
  icon: <X />,
  label: "X",
  address: "https://x.com/tnkelimutu",
 },
 {
  icon: <Youtube />,
  label: "Youtube",
  address: "https://www.youtube.com/@btnkelimutu1175",
 },
 {
  icon: <Web />,
  label: "Website",
  address: "https://www.kelimutu.id",
 },
];

function Contact() {
 return (
  <>
   <section id="contact" className={styles.contact}>
    <div className={styles.header}>
     <h2>Get in Touch.</h2>
    </div>
    <div className={styles["contact-section"]}>
     <div className={styles["unit-information"]}>
      <div className={styles["brand-logo"]}>
       <img src="./logo/brand.png" alt="KeNaPa" />
      </div>
      <div className={styles["unit-name"]}>
       <p>
        Ministry of Forestry Directorate General of Natural Resources and
        Ecosystem Conservation Kelimutu National Park Office
       </p>
      </div>
     </div>
     <div className={styles["contact-list"]}>
      {contacts.map((contact, index) => (
       <a href={contact.href} key={index} className={styles["contact-wrapper"]}>
        <div className={styles["contact-icon"]}>{contact.icon}</div>
        <div className={styles["contact-address"]}>{contact.address}</div>
       </a>
      ))}
     </div>
     <div className={styles["media-list"]}>
      {medias.map((media, index) => (
       <a
        key={index}
        href={media.address}
        target="_blank"
        rel="noopener noreferrer"
        className={styles["media-wrapper"]}
       >
        <div className={styles["media-icon"]}>{media.icon}</div>
        <div className={styles["arrow-icon"]}></div>
       </a>
      ))}
     </div>
    </div>
   </section>
   <footer>&copy;2025 KELIMUTU NATIONAL PARK. ALL RIGHT RESERVED</footer>
  </>
 );
}

export default Contact;
