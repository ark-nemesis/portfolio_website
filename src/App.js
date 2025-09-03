import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./page/Home";
import BlogArchive from "./page/BlogArchive";
import MouseTracker from "./components/MouseTracker";
import PageNotFound from "./components/PageNotFound";
import ReactGA from "react-ga4";

import { Routes, Route } from "react-router-dom";

function App() {
  ReactGA.initialize("G-WZMP2ZKFHY");
  const location = useLocation();
  useEffect(() => {
    // ReactGA.pageview(location.pathname + location.search);
    ReactGA.send({ hitType: "pageview", page: `${location.pathname} + ${location.search}`, title: "Tracking Page" });
     console.log(location);
  }, [location]);

  return (
    <> 
    <div className="cursor-pointer">
      <Header />
      {/* <MouseTracker/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogArchive />} />
        <Route path="*" element={<PageNotFound />} /> 

      </Routes>

      <Footer />
      </div>
    </>
  );
}

export default App;
