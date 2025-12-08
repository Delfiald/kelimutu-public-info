import FeesPayment from "./components/FeesPayment/FeesPayment";
import Hero from "./components/Hero/Hero";
import VisitingHours from "./components/VisitingHours/VisitingHours";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import VisitorGuide from "./components/VisitorGuide/VisitorGuide";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";

function App() {
 return (
  <>
   <main>
    <Hero />
    <VisitingHours />
    <FeesPayment />
    <VisitorGuide />
    <Gallery />
    <Contact />
   </main>
  </>
 );
}

export default App;
