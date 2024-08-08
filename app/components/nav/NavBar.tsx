'use client'
import React, { useState, useEffect }from 'react'
import { Container } from '../Container';
import Link from 'next/link';
import NavItems from './NavItems'; 
import { FaXmark, FaBars } from "react-icons/fa6"
import { navigation } from '@/app/utils/navigation';

const NavBar = () => { 

  const [isMenuOpen, setIsMenuOpen] = useState(false);  
  const [isSticky, setIsSticky] = useState(false);    

  // set toggle Menu 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  }


  return (
    <div className="sticky top-0 w-full bg-white z-30 shadow-sm">
      <div className='py-4 border-b-[1px]'> 
        <Container>
          {/* Arranging the navigator */}
          <div className="flex items-center justify-between
                gap-3 m:gap-0">  

                <Link href='/'> 
                    <h1 className='text-black font-bold text-2xl'> PITSI </h1>
                </Link> 

                {/* Laptop and Desktop navigation */}
                <div className='md:flex gap-4 hidden'> 
                  <NavItems link='/'> 
                      Home
                  </NavItems> 
                  <NavItems link='/services'> 
                      Services
                  </NavItems> 
                  <NavItems link='/range'> 
                      Range
                  </NavItems>
                  <NavItems link='/about-us'> 
                      About Us
                  </NavItems> 
                  <NavItems link='/contact-us'> 
                      Contact Us
                  </NavItems>
                </div> 

                {/* Mobile Navigation*/}  
                <div className='md:hidden'> 
                      <button 
                        onClick={toggleMenu}
                        className='text-neutralDGrey focus:outline-none focus:text-gray-500'> 
                            {
                                isMenuOpen ? (<FaXmark className='h-6 w-6' />) : (<FaBars className='h-6 w-6' />) 
                            }
                      </button>
                </div>
          </div> 

          {/* nav items for mobile devices  */}  
          <div className={`md:hidden space-y-4 px-4 mt-16 py-7 bg-secondary
                    ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden" }`}> 
            
                  {
                    navigation.map(({link, path}) => 
                      <Link onClick={toggleMenu} href={path} key={path}
                                className='block text-base text-white 
                                hover:text-brandPrimary first:font-medium'> {link} </Link>
                    )
                  }
          </div>


        </Container>
      </div>
    </div>
  )
}

export default NavBar; 