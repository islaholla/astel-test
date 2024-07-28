import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import App from "./App";
import Client from "./pages/Client";
import { useEffect, useState } from "react";
import PreLoader from "./components/loading/PreLoader";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/Solution";
import Business from "./components/Business";
import SolutionPage from "./pages/Solution";

function Main() {
   
    return (
        <>
            {
                <div className="body">
               <PreLoader/>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<App />} />
                        <Route path='/product' element={<Client />} />
                        <Route path='/solution' element={<SolutionPage />} />
                        <Route path='/contact' element={<ContactPage />} />
                    </Routes>
                </BrowserRouter>
                <Footer />
            </div>
            }
        </>
    )
}

export default Main