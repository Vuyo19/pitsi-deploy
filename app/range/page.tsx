'use client'

import React from 'react'
import { Container } from '../components/Container'
import Heading from '../components/Heading'
import { AllVehicles } from '../utils/constants'
import Image from 'next/image'
import Button from '../components/Button'

const Range = () => {
  return (
    <>
      <Container>  

          <div className='mt-5'> </div> 

          <Heading title="Our Range of Vehicles" /> 

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl-grid-cols-5 gap-4 sm:gap-10 justify-between sm:justify-center items-center mb-5"> 

              {AllVehicles.map((vehicle) => (
                    <div key={vehicle.id} className="rounded-lg h-64 px-4 py-2 border-2 border-gray-400 flex items-center justify-center">
                    <div className="h-40 relative grid grid-rows-3 items-center justify-items-center">
                      <div className="flex items-center justify-center mb-2">
                        <Image
                          width={200}
                          height={200}
                          src={vehicle.image}
                          alt={vehicle.alt}
                        />
                      </div>
                      <h3 className="font-bold text-lg mt-2 row-start-2"> {vehicle.title} </h3>
                      <Button
                        title="Book Now"
                      />
                    </div>
                  </div>
                ))}
          
          </div> 

      </Container>
    </>
  )
}

export default Range