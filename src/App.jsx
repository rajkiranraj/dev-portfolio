import React, { useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import ReactLenis from "lenis/react";
import About from "./sections/About";
import Works from "./sections/Works";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";
import { useProgress } from "@react-three/drei";
import LoadingOverlay from "./components/LoadingOverlay";
import TechStackSection from "./components/TechStackSection";
import DownloadCV from "./components/DownloadCV";
import SplashCursor from "./components/SplashCursor";


const App = () => {
  const { progress } = useProgress();
  const [showLoader, setShowLoader] = useState(true);

  return (
    <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
      <SplashCursor />
      {showLoader && (
        <LoadingOverlay
          percent={Math.floor(progress)}
          onDone={() => setShowLoader(false)}
        />
      )}
      <div
        className={`${
          !showLoader ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <Navbar />
        <Hero />
        <ServiceSummary />
        <Services />
        <About />
        <TechStackSection />
        <Works />
        <ContactSummary />
        <Contact />
      </div>
      <DownloadCV />
    </ReactLenis>
  );
};

export default App;
