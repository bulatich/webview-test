import BurgerIcon from '../assets/header/burger.svg';

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#F9F5FF]">
            <div className='mx-auto px-4 py-3'>
            <div className="container flex items-center gap-1.5">
                 <img src={BurgerIcon} alt="Burger" className="w-5 h-5" />
                 {/* <BurgerIcon /> */}
                <div className="text-xl font-extrabold text-[#0846ED]">Radiant store</div>
            </div>
            </div>
        </header>
    );
}