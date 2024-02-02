import "./App.css";
import { About } from "./components/about.component";
import { Header } from "./components/header.component";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SerivesDetails } from "./components/service-details.component";
import { Pricing } from "./components/pricing.component";
import { Contact } from "./components/contact.component";
import { Getquote } from "./components/get-a-quote.component";
import { Footer } from "./components/Footer.component";
import { Service } from "./components/services.component";
import { Navbar } from "./components/navbar.component";
import analytics from "./assets/analytics";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/About" element={<About />} />
        <Route path="/SerivesDetails" element={<SerivesDetails />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Quotes" element={<Getquote />} />
        <Route path="/Service" element={<Service />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
