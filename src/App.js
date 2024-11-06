import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import { ScaleLoader } from "react-spinners";
import Navb from "./components/Nav";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <BrowserRouter>
      {loading ? (
        <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <ScaleLoader
          loading={loading}
          size={300}
          color="#123abc" 
        />
      </div>
      
      ) : (
        <>
          <Navb />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer/>
        </>
      )}
    </BrowserRouter>
  );
}
