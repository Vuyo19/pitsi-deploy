import React from 'react'
import { Container } from '../components/Container'
import Banner from '../components/Banner'
import Image from "next/image"
import FormWrap from '../components/FormWrap'
import AddContactMessage from './AddContactMessage'

const ContactUs = () => {
  return (
    
    <Container> 
      {/* Banner */}
      <div> 
        <Banner 
          title='Contact Us'
          subHeading='Hoot if you need help'
          twoSides
          img='https://pngimg.com/d/mercedes_PNG80179.png'
          imgHeight={600}
          imgWidth={600}

        /> 
      </div>   

      {/* Contact Us */}
      <div className='mt-10 flex flex-col items-center'> 
        <Image 
            src={'https://static.thenounproject.com/png/185656-200.png'}
            height={75}
            width={75}
            alt={'Flying plane'}
            className='mb-2'
        />
        <h2 className="font-bold text-3xl text-center"> Leave a message and we <br />
        will get back to you </h2>   

        {/* Input Form */}
        <div>
            <FormWrap> 
                <AddContactMessage /> 
            </FormWrap>
        </div>

      </div>
    </Container>
  )
}

export default ContactUs