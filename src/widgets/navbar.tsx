import HomeIcon from '../assets/navbar/home.svg'
import CartIcon from '../assets/navbar/cart.svg'
import CatalogIcon from '../assets/navbar/catalog.svg'
import ProfileIcon from '../assets/navbar/profile.svg'
import { useState } from 'react'
import { motion } from "motion/react";


  const items = [
    { label: "HOME", active: true, icon: HomeIcon },
    { label: "CATALOG", active: false, icon: CatalogIcon },
    { label: "CART", active: false, icon: CartIcon },
    { label: "PROFILE", active: false, icon: ProfileIcon },
  ];


export function MobileNavbar() {

  const [active, setActive] = useState<string>("HOME")

  const handleSetActive = (label: string) => {
    setActive(label)
  }

  

  return (          
      <div>
        <nav
            className="fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-md p-2"
            style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div className="flex items-center justify-between gap-1">
            {items.map((item) => (
                <motion.button
                 whileTap={{ scale: 0.94, opacity: 0.92 }}
  transition={{ duration: 0.12 }}
                    key={item.label}
                    className={`  w-18 h-13 flex flex-col items-center justify-center text-[#585781] ${item.label === active ? 'bg-linear-to-r from-[#0846ED] to-[#859AFF] rounded-xl text-white': null}`}
                    onClick={() => handleSetActive(item.label)}
                >
                  <div>
                    <img src={item.icon} alt={item.label} className="w-5 h-5" />

                    </div>

                  <span className=' font-semibold text-xs'>{item.label}</span>
                </motion.button>
            ))}
          </div>
        </nav>
      </div>
  );
}
 