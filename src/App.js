import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cottages from "./pages/Cottages";
import Ketaki from "./pages/Ketaki";
import Hazara from "./pages/Hazara";
import Aparajita from "./pages/Aparajita";
import Tribute from "./pages/Tribute";
import CulinaryDelights from "./pages/CulinaryDelights";
import AppHeader from "./components/AppHeader";
import ScrollToTop from "./components/ScrollToTop";
import Whatsapp from "./components/Whatsapp";
import Activities from "./pages/Activities";
import Reviews from "./pages/Reviews";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="App bg-[#31553b]"
      style={{
        backgroundImage: "url(./noice.png)",
      }}
    >
      <AppHeader />
      <ScrollToTop />
      <div className="relative z-50">
        <Whatsapp />
      </div>

      <div className=" md:mt-20 lg:mt-20 mt-14">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cottages" element={<Cottages />} />
          <Route path="/cottages/Ketaki" element={<Ketaki />} />
          <Route path="/cottages/Hazara" element={<Hazara />} />
          <Route path="/cottages/Aparajita" element={<Aparajita />} />
          <Route path="/tribute" element={<Tribute />} />
          <Route path="/culinary-delights" element={<CulinaryDelights />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/reviews" element={<Reviews />} />
          {/* <Route path="/enquire-booking" element={<EnquireBooking />} /> */}
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
