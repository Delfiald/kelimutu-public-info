import styles from "./visitorGuide.module.css";

import Facilities from "./Facilities";
import DosDonts from "./DosDonts";
import Faq from "./Faq";

function VisitorGuide() {
 return (
  <section className={styles["visitor-guide"]}>
   <Facilities />
   <DosDonts />
   <Faq />
  </section>
 );
}

export default VisitorGuide;
