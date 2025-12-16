import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import FeesPayment from "./sections/FeesPayment";
import Hero from "./sections/Hero";
import VisitingHours from "./sections/VisitingHours";
import VisitorGuide from "./sections/VisitorGuide";
import Gallery from "./sections/Gallery/Gallery";
import Contact from "./sections/Contact/Contact";
import Arboretum from "./sections/Arboretum";
import About from "./sections/About";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

function App() {
 return (
  <>
   <Header />
   <main>
    <Hero />
    <About />
    <Arboretum />
    <VisitingHours />
    <FeesPayment />
    <VisitorGuide />
    <Gallery />
    <Contact />
   </main>
   <Footer />
  </>
 );
}

export default App;
