'use client'

import React from 'react'  
import { useEffect, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import Heading from '../components/Heading'
import Input from '../components/inputs/input'
import Button from '../components/Button'
import Link from 'next/link'


const LoginForm = () => { 

  const [isLoading, setIsLoading] = useState(false); 
  const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
    defaultValues: {
        emailAddress: '', 
        password: '', 
    }
  });
  
  const onSubmit: SubmitHandler<FieldValues> = (data) => {

  }


  return (
    <> 
        <Heading title='Sign in with Pitsi' />
        <hr className="bg-slate-300 w-full h-px" />  

        <Input 
            id="emailAddress"
            label="Email Address"
            disabled={isLoading} 
            register={register}
            errors={errors}
            required
        /> 

        <Input 
            id="password"
            label="Password"
            disabled={isLoading} 
            register={register}
            errors={errors}
            required
        />  

        <Button 
            title='Sign In'
            onClick={handleSubmit(onSubmit)}  

        /> 

        <p className='text-sm'> Do not have an account? 
            <Link className=" ml-1 underline" href="/register"> 
                Sign up
            </Link>    
        </p>

    </>
  )
}

export default LoginForm