import { MobileNavbar } from './widgets/navbar'
import { Header } from './widgets/header'
import { BrowserRouter, Routes, Route } from "react-router";
// import { AnimatePresence } from "motion/react";
import { lazy } from 'react';

const Home = lazy(() => import('./pages/home'));
const Cart = lazy(() => import('./pages/cart'));
const Catalog = lazy(() => import('./pages/catalog'));
const Profile = lazy(() => import('./pages/profile'));


function App() {
  return (
    <>
           <BrowserRouter>
      <Header />
{/* <AnimatePresence mode="wait"> */}
<div className='top-[60px] relative p-4'>
    <Routes>
        
        {/* <Route path="/about" element={<About />} /> */} 

        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/profile" element={<Profile />} />
       

    </Routes>
    </div>
 {/* </AnimatePresence> */}
      <MobileNavbar />
        </BrowserRouter>
    </>
  );
}

export default App;
