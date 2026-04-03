import { MobileNavbar } from './widgets/navbar'
import { Header } from './widgets/header'
import { BrowserRouter, Routes, Route } from "react-router";
import About from './About';
import { AnimatePresence } from "motion/react";



function App() {
  return (
    <>
           <BrowserRouter>
      <Header />
<AnimatePresence mode="wait">
    <Routes>
        
        <Route path="/about" element={<About />} />
       

    </Routes>
 </AnimatePresence>
      <MobileNavbar />
        </BrowserRouter>
    </>
  );
}

export default App;
