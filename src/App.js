import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import Faishal from "./pages/Faishal";
// import Evan from "./pages/Evan";
// import Tiara from "./pages/Tiara";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <Loader />;

  return (
    <Router>
      <Navbar />
      
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/muhammad-faishal-nur-firdaus" element={<Faishal />} />
          {/* <Route path="/evan" element={<Evan />} />
          <Route path="/tiara" element={<Tiara />} /> */}
        </Routes>
      
        <Footer />
    </Router>
  );
}

export default App;