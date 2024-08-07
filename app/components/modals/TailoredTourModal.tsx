'use client' 

import { useState } from 'react'
import { Modal } from './Modal'
import { useTailoredTourModal } from '@/app/hooks/useTailoredTourModal'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import Heading from '../Heading'
import Input from '../inputs/input'
import Options from '../inputs/options'
import TextArea from '../inputs/textArea'

const TailoredTourModal = () => { 

  const tailoredTourModal = useTailoredTourModal(); 
  const [ isLoading, setIsLoading] = useState(false);  

  const { register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
    defaultValues: {
        name: '', 
        surname: '', 
        contactNumber: '', 
        stayDuration: 0, 
        preferredVehicle: '', 
        passengers: 0, 
        comments: ''
    }
  }) 

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // submitting the request form. 
  }

  const bodyContent = (
    <div className='flex flex-col gap-4'> 
        <Heading 
          title='Tailored for the best opportunities'
          subtitle="For all your tailored needs"
        />     

        <div className='flex flex-row'> 
            <Input 
            id="name"
            label="Name"
            register={register}
            disabled={isLoading}
            errors={errors}
            required
            />   

            <Input 
            id="surname"
            label="Surname"
            register={register}
            disabled={isLoading}
            errors={errors}
            required
            />   
        </div> 

        <div className='flex flex-row'> 
            <Input 
                id="contactNumber"
                label="Contact Number"
                register={register}
                disabled={isLoading}
                errors={errors}
                required
            />   

            <Input 
                id="stayDuration"
                label="Duration of Stay"
                type={'number'}
                register={register}
                disabled={isLoading}
                errors={errors}
                required
            />
        </div>

        <div className='flex flex-row'> 
            <Options 
                id="preferredVehicle" 
                register={register}
                disabled={isLoading}
            /> 

             <Input 
                id="passengers"
                label="Number of passengers"
                type={'number'}
                register={register}
                disabled={isLoading}
                errors={errors}
                required
            />   
 
        </div> 

        <TextArea 
            id="comments"
            label="Any further comments"
            register={register}
            disabled={isLoading}
            errors={errors}
            required
        />

            
    </div>
  ) 

  const footerContent = (
    <div> 
        
    </div>
  )

  return ( 
     <Modal
        disabled={isLoading} 
        isOpen={tailoredTourModal.isOpen}
        title='Tailored Tour'
        actionLabel='Submit'
        onClose={tailoredTourModal.onClose}
        body={bodyContent}
        footer={footerContent}
        onSubmit={handleSubmit(onSubmit)}
     />
  )
}

export default TailoredTourModal