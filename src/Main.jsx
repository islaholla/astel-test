import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import App from "./App";
import Client from "./pages/Client";
import { useEffect, useState } from "react";
import PreLoader from "./components/loading/PreLoader";

function Main() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check localStorage for the first load indicator
        const isFirstLoad = localStorage.getItem('isFirstLoad');
    
        if (isFirstLoad === null) {
            // First time loading the app, show preloading
            setIsLoading(true);
            // Set isFirstLoad to false in localStorage
            localStorage.setItem('isFirstLoad', 'false');
        } else {
            // Not the first time loading, no need to show preloading immediately
            setIsLoading(false);
    
            // Set a timeout to hide loading after 5 seconds
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 5000); // 5000 milliseconds = 5 seconds
    
            return () => clearTimeout(timer); // Clear timeout if component unmounts or on dependency change
        }
    }, []);
    

    return (
        <>
            {
                <div className="body">
                <PreLoader/>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<App />} />
                        <Route path='/product' element={<Client />} />
                    </Routes>
                </BrowserRouter>
                <Footer />
            </div>
            }
        </>
    )
}

export default Main