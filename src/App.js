import { useState } from "react";

import NavBar from "./Global/NavBar/NavBar";
import ImgHeader from "./Global/HeaderImage/ImgHeader";
import HomePage from "./Pages/Home/HomePage";
import ServicesPage from "./Pages/Services/ServicesPage";
import ContactPage from "./Pages/Contact/ContactPage";
import Footer from "./Global/Footer/Footer"

function App() {
  const [activePageIndex, setActivePageIndex] = useState(0);

  const HomeClick = () => {
    if (activePageIndex === 0) {
      return;
    }
    setActivePageIndex(0)
  }

  const ServiceClick = () => {
    if (activePageIndex === 1) {
      return;
    }
    setActivePageIndex(1)
  }

  const ContactClick = () => {
    if (activePageIndex === 2) {
      return
    }
    setActivePageIndex(2)
  }

  const CurrentActivePage = () => {
    if (activePageIndex === 0) {
      return <HomePage />
    }
    if (activePageIndex === 1) {
      return <ServicesPage />
    }
    if (activePageIndex === 2) {
      return <ContactPage />
    }
  }

  return (
    <>
      <NavBar
        HomeClick={HomeClick}
        ServiceClick={ServiceClick}
        ContactClick={ContactClick}
      />
      <ImgHeader />
      <CurrentActivePage />
      <Footer/>
    </>
  );
}

export default App;
