import { useState } from 'react';
import Navlink from './Navlink'
import BrandSubCategory from './BrandSubCategory';

const NavbarLeft = () => 
{
    const [isBrandSubmenuOpen, setIsBrandSubmenuOpen] = useState(false);

  return (
    <ul className="hidden md:hidden lg:flex justify-items-center items-center space-x-4 transition-all">
        <li><Navlink to="/">Home</Navlink></li>
        <li><Navlink to="shop">Shop</Navlink></li>
        <li
        onMouseEnter={() => setIsBrandSubmenuOpen(true)}
        onMouseLeave={() => setIsBrandSubmenuOpen(false)}>
            <Navlink to="brands">
                Brands
                {
                    isBrandSubmenuOpen && 
                    <BrandSubCategory/>
                }

            </Navlink>
        </li>
        <li><Navlink to="showrooms">Showrooms</Navlink></li>
    </ul>
  )
}

export default NavbarLeft