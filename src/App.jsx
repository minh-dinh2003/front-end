import ButtonGradient from "./assets/svg/ButtonGradient";
import News from "./components/New";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Places from "./components/TourismPlaces";
import PdfComp from "./components/NewsInformation";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Places />
        <News />
        <Services />
        <Contact />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
