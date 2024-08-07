'use client'
import React from 'react'  
import Link from 'next/link'
import { Container } from '../Container'
import FooterList from "./FooterList";


const Footer = () => {
  return (
    <footer className='bg-black text-white '>
        <Container>
            <div className="flex flex-col md:flex-row
                justify-between pt-16 pb-8"> 
                <FooterList> 
                    <p className='font-thin'> For Business | For Personal </p> 
                    <Link href="/"> Home </Link> 
                    <Link href="/services"> Services </Link>
                    <Link href="/range"> Range </Link>
                    <Link href="about-us"> About Us </Link>
                    <Link href="/contact-us"> Contact Us </Link>
                </FooterList> 
                <div className="w-full md:w-1/2 mb-6 md:mb-0"> 
                    <h1 className='font-bold text-2xl mb-2'> PITSI </h1>
                    <p> 
                        We pride ourselves with years of 
                        experience in working largely with 
                        reputable hotels and lodges particularly 
                        in the northern suburbs of Johannesburg.
                    </p>
                </div> 
            </div> 

            <div className='text-center mb-4 mt-4'> 
                <p> &copy; {new Date().getFullYear()} Pitsi. All rights reserved.  </p>
            </div>
        </Container>  
    </footer>
  )
}

export default Footer