'use client'

import React from 'react' 
import { UseFormRegister, FieldValues } from 'react-hook-form';

type OptionTraits = {
    id: number; 
    name: string;
}

interface RadioBoxProps {
    id: string;    
    disabled?: boolean; 
    register: UseFormRegister<FieldValues>; 
    options: OptionTraits[]; 
} 

const Radiobox: React.FC<RadioBoxProps> = ({
    id, disabled, register, options
}) => {
  return (
    <div className='w-full relative flex flex-row'>
        {options.map((option, index) => ( 

            <div key={index} className='flex flex-row'> 
                <input 
                    id={id}
                    type='radio'
                    className='cursor-pointer'
                    value={option.name} 
                    {...register(id)}
                /> 

                <label htmlFor={id}> {option.name} </label>
            </div>
            
        ))}
    </div>
  )
}

export default Radiobox; 