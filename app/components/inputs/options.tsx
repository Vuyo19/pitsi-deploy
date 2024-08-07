'use client'

import React from 'react'
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";


interface OptionsProps {
    id: string;
    disabled?: boolean; 
    required?: boolean; 
    register: UseFormRegister<FieldValues>; 
} 

const Options: React.FC<OptionsProps> = ({
    id, disabled, required, 
    register
}) => {
  return (
    <div className='w-full relative'>
        <select 
            id={id}
            {...register(id, {required})} 
            className={`peer w-full p-4 pt-6 outline-none bg-white font-light 
                border-2 rounded-md transition disabled:opacity-70 
                disabled:cursor-not-allowed`}
        > 

        </select>
    </div>
  )
}

export default Options; 