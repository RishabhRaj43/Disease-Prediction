import { useEffect, useState } from "react";
import Loading from "./Components/Loading/Loading.jsx";
import Navbar from "./Components/NavFoot/Navbar.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./Components/NavFoot/Footer.jsx";
import Home from "./Components/Home/Home.jsx";
import { Toaster } from "react-hot-toast";
import Contact from "./Components/Contact.jsx";
import About from "./Components/About.jsx";
import Recommendation from "./Components/Recommendation/Recommendation.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  const [clicked, setClicked] = useState("home");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div>
            <Navbar setClicked={setClicked} clicked={clicked} />
            <Toaster />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/recommendation" element={<Recommendation />} />
            </Routes>
            <Footer setClicked={setClicked} />
          </div>
        </>
      )}  
    </>
  );
}

export default App;
