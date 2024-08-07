'use client'

import React from 'react'
import { Container } from '../components/Container'
import FormWrap from '../components/FormWrap'
import RegisterForm from './RegisterForm'
import Image from 'next/image'

const Register = () => {
  return (
    <Container> 
        <div className='flex flex-row'>  

            <div className='w-1/2'> 
                <FormWrap> 
                    <RegisterForm />
                </FormWrap> 
            </div>

            <div className='w-1/2 h-[490px] flex items-center justify-center'>
                <div className='mt-10 bg-black w-[480px] h-full rounded-xl'>
                    <Image
                        src={'https://incognito.be/wp-content/uploads/2015/11/visual-web-02-1.png'}
                        alt='Mercedes Vito'
                        width={480}
                        height={480}
                    />
                </div>
            </div>


        </div>
      
    </Container>
  )
}

export default Register