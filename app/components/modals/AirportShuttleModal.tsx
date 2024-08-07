'use client'

import { useState } from 'react'
import { Modal } from './Modal'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useAirportShuttleModal } from '@/app/hooks/useAirportShuttleModal'
import Heading from '../Heading'
import Input from '../inputs/input'
import Radiobox from '../inputs/radiobox'
import Options from '../inputs/options'

const AirportShuttleModal = () => { 

  const airportShuttleModal = useAirportShuttleModal(); 
  const [ isLoading, setIsLoading] = useState(false);  

  const { register, handleSubmit, getValues, formState: {errors}} = useForm<FieldValues>({
    defaultValues: {
        name: '', 
        surname: '', 
        trip: '', 
        flightNumber: '',
        pickupPoint: '',
        preferredVehicle: ''
    }
  })  

  // Retrieve the value of the trip field
  const tripValue = getValues('trip');

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // submitting the request form. 
  }

  const bodyContent = (
    <div className='flex flex-col gap-4'> 
        <Heading 
          title='Flight to car'
          subtitle="Quick airport shuttle solutions"
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

        <div> 
            <Radiobox 
                id='trip'
                register={register}
                options={[ 
                    { 
                        id: 1,
                        name: 'One-way'
                    }, 
                    {
                        id: 2,
                        name: 'Return'
                    }
                ]}
            />
        </div>  

        <div> 
            <Input 
                id="flightNumber"
                label="Enter flight number"
                register={register}
                disabled={isLoading}
                errors={errors}
                required
            />   

            {tripValue === 'Return' && (
                <Input 
                    id="flightNumber"
                    label="Enter return flight number"
                    register={register}
                    disabled={isLoading}
                    errors={errors}
                    required
                /> 
            )}

        </div> 

        <div> 
            <Input 
                id="pickupPoint"
                label="Pick up point"
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
    </div>
  ) 

  const footerContent = (
    <div> 
        
    </div>
  )

  return ( 
     <Modal
        disabled={isLoading} 
        isOpen={airportShuttleModal.isOpen}
        title='Airport Shuttle'
        actionLabel='Submit'
        onClose={airportShuttleModal.onClose}
        body={bodyContent}
        footer={footerContent}
        onSubmit={handleSubmit(onSubmit)}
     />
  )
}

export default AirportShuttleModal