import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Loading from "./components/loading/Loading";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data, loading assets, etc.)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <main>
            <Home />
            <About />
            <Work />
            <Skills />
            <Qualification />
            <Services />
            <Contact />
            <Footer />
          </main>
        </>
      )}
    </>
  );
};

export default App;
