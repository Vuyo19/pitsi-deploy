'use client'

import React from 'react'
import { Container } from '../components/Container'
import FormWrap from '../components/FormWrap'
import Image from 'next/image' 
import LoginForm from './LoginForm'

const Login = () => {
  return (
    <Container> 
      <div className='flex flex-row'> 
          
          <div className='w-1/2'> 
              <FormWrap> 
                <LoginForm /> 
              </FormWrap> 
          </div> 

          <div> 
            The image will be here. 
          </div>
      </div>
    </Container>
  )
}

export default Login