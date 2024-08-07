'use client' 

import { useState } from 'react'
import { Modal } from './Modal'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useCorporateShuttleModal } from '@/app/hooks/useCorporateShuttle'
import Heading from '../Heading'
import Input from '../inputs/input'
import Options from '../inputs/options'
import TextArea from '../inputs/textArea'

const CorporateShuttleModal = () => { 

  const corporateShuttleModal = useCorporateShuttleModal(); 
  const [ isLoading, setIsLoading] = useState(false);  

  const { register, handleSubmit, formState: {errors}} = useForm<FieldValues>({
    defaultValues: {
      name: '', 
      surname: '',
      contactNumber: '', 
      preferredVehicle: '', 
      passengers: '', 
      comments: ''
    }
  }) 

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // submitting the request form. 
  }

  const bodyContent = (
    <div className='flex flex-col gap-4'> 
        <Heading 
            title='Drive in style'
            subtitle="Enjoy our corporate package"
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

              <Options 
                id="preferredVehicle" 
                register={register}
                disabled={isLoading}
            /> 
          </div> 

          <div> 
            
            <Input 
                  id="passengers"
                  label="Number of passengers"
                  type={'number'}
                  register={register}
                  disabled={isLoading}
                  errors={errors}
                  required
              />    


            <TextArea 
                  id="comments"
                  label="Any further comments"
                  register={register}
                  disabled={isLoading}
                  errors={errors}
                  required
              />
          </div>
    </div>
  ) 

  const footerContent = (
    <div> 
        
    </div>
  )

  return ( 
     <Modal
        disabled={isLoading} 
        isOpen={corporateShuttleModal.isOpen}
        title='Corporate Shuttle'
        actionLabel='Submit'
        onClose={corporateShuttleModal.onClose}
        body={bodyContent}
        footer={footerContent}
        onSubmit={handleSubmit(onSubmit)}
     />
  )
}

export default CorporateShuttleModal; 