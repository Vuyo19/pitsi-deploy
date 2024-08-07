'use client'
import React from 'react'
import { Container } from '../Container';
import Link from 'next/link';
import NavItems from './NavItems';

const NavBar = () => {
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

                <div className='flex gap-4'> 
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
            
          </div>
        </Container>
      </div>
    </div>
  )
}

export default NavBar; 