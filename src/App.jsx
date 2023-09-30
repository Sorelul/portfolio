import React, { useEffect } from "react";
import Header from "./components/header/Header.jsx";
import Nav from "./components/nav/Nav.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import Experience from "./components/experience/Experience.jsx";
import Portofolio from "./components/portofolio/Portofolio.jsx";
import Services from "./components/services/Services.jsx";
import ReactGA from "react-ga";

const App = () => {
    useEffect(() => {
        ReactGA.initialize("G-49V5YR7CXP");
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            {/* <Services/> */}
            <Portofolio />
            <Contact />
            <Footer />
        </>
    );
};

export default App;
