'use client' 
import React, { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"; 
import { useRouter } from "next/navigation";
import axios from "axios"


import Button from "./components/Button";
import TextArea from "./components/inputs/textArea";
import Input from "./components/inputs/input";

const CheckAvailabilityForm = () => { 

  const {register, handleSubmit, setValue,  watch, reset, formState: {errors} } = useForm<FieldValues>({
    defaultValues: {
        name: '',
        surname: '', 
        contactNumber: '', 
        emailAddress: '',
        message: ''
    }
  })  

  const onSubmit: SubmitHandler<FieldValues> = async(data) => {

    // Capturing the message by the client. 

    console.log(data); 
  } 

  return (
    <>  
    <div className="flex flex-col gap-2"> 
        <Input 
                id="name"
                label="Name"
                register={register}
                errors={errors}
                required
        /> 

        <Input 
                id="surname"
                label="Surname"
                register={register}
                errors={errors}
                required
        />

        <Input 
                id="contactNumber"
                label="Contact Number"
                register={register}
                errors={errors}
                required
        /> 

        <Input 
            id="email"
            label="Email"
            register={register}
            errors={errors}
            required
        />   

        <TextArea 
            id="message"
            label="Message"
            register={register}
            errors={errors}
            required
        /> 
    </div>
        
    </>
  )
}

export default CheckAvailabilityForm