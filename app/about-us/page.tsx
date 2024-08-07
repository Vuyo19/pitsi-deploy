import React from 'react'
import { Container } from '../components/Container';
import Banner from '../components/Banner';
import { ClientReviews, PitsiFacts } from '../utils/constants';
import Image from "next/image";

const AboutUs = () => {
  return (
    <Container>  

        {/* Banner */}
        <div>
           <Banner
              title='About Us'
              subHeading='We have got you covered' 
              img='https://www.splimousine.com/wp-content/uploads/2018/07/hyundai-h1.png'
              imgWidth={600}
              imgHeight={600} 
              twoSides
            />
        </div>  

        {/* Get to know us page. */}
        <div className='mt-10 mb-20'> 
          <h2 className="font-bold text-3xl text-center"> Get To Know Us </h2>  
          <div className="flex flex-col md:flex-row mt-4"> 
            {PitsiFacts.map((fact) => (
                <div className="mt-5 sm:mt-0 px-4 justify-center text-center items-center w-full md:w-1/3 md:text-left md:justify-start md:items-start flex flex-col gap-2" key={fact.id}> 
                      <Image 
                          src={fact.icon}
                          width={100}
                          height={100}
                          alt={fact.alt}
                        /> 
                        <h3 className="font-bold text-2xl"> {fact.title} </h3>
                        <p> {fact.description} </p>
                </div>
            ))}
          </div>  
        </div> 

        {/* What our clients are saying? */}
        <div className='mt-10 mb-20'> 
          <h2 className="font-bold text-3xl text-center"> What our clients are saying? </h2>   
          <div className="flex flex-col md:flex-row mt-4"> 
             {ClientReviews.map((review) => (
                <div className="mt-5 sm:mt-0 px-4 justify-center text-center items-center w-full md:w-1/3 md:text-left md:justify-start md:items-start flex flex-col gap-2" key={review.id}> 
                    <Image 
                          src={review.icon}
                          width={100}
                          height={100}
                          alt={review.alt}
                        /> 
                        <p> {review.description} </p>
                        <p className='text-secondary font-bold text-xl'> {review.reviewer} </p>
                </div>
             ))}
          </div>
        </div>

    </Container>
   
  )
}

export default AboutUs; 