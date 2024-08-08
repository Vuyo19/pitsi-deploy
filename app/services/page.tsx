'use client'

import React from 'react'
import { Container } from '../components/Container'
import Banner from '../components/Banner'

const Services = () => {
  return (
    <Container>
        <div> 
          <Banner 
            title='Our Services'
            subHeading='Hoot if you need help'
            img='https://c-images.carexpert.com.au/upload/q_auto:best/f_auto/c_pad,h_370,w_560/v1/showroom/primarycutout/clqvkg447005a882rf7sa32k2.png'
            imgHeight={600}
            imgWidth={600}
            twoSides
          /> 
        </div>
    </Container>
  )
}

export default Services