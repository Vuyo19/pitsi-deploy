'use client'

import React from 'react'
import { useEffect, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import Heading from '../components/Heading'
import Input from '../components/inputs/input'
import Button from '../components/Button'
import Link from 'next/link'

const RegisterForm = () => { 

  const [isLoading, setIsLoading] = useState(false); 
  const {register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
    defaultValues: {
        name: '',
        surname: '',
        contactNumber: '', 
        emailAddress: '', 
        password: '', 
        passwordConfirmation: ''
    }
  })
  
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // submitting the register form,
  } 

  return (  
    <>   
        <Heading title='Sign up with Pitsi' />
        <hr className="bg-slate-300 w-full h-px" /> 

        <Input 
            id="name"
            label="Name"
            disabled={isLoading} 
            register={register}
            errors={errors}
            required
        /> 

        <Input 
            id="surname"
            label="Surname"
            disabled={isLoading} 
            register={register}
            errors={errors}
            required
        /> 

        <Input
            id="contactNumber"
            label="Contact Number" 
            disabled={isLoading} 
            register={register}
            errors={errors}
            required
        /> 

        <Input 
            id="emailAddress"
            label="Email Address" 
            disabled={isLoading} 
            register={register}
            errors={errors}
            required
        /> 

        <Button 
            title='Sign Up'
            onClick={handleSubmit(onSubmit)}  

        /> 

        <p className='text-sm'> Already have an account? 
            <Link className=" ml-1 underline" href="/login"> 
                Log in
            </Link>    
        </p>
    </>
  )
}

export default RegisterForm