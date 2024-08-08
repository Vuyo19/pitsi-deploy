'use client'
import React from 'react'
import Image from "next/image"
import Button from './Button'

interface BannerProps { 
    title: string
    subHeading?: string
    img: string 
    imgHeight: number 
    imgWidth: number
    twoSides?: boolean
}

const Banner: React.FC<BannerProps> = ({ title, subHeading, img, imgHeight, imgWidth, twoSides }) => { 
  return (  

    <> 
        {twoSides ? 
            <> 
                <div className='flex flex-col gap-6 sm:flex sm:flex-row mb-10 mt-4 justify-between'> 
                    <div className='text-center w-full sm:w-1/2 flex items-center justify-center'>
                        <div>
                            <h1 className='font-bold text-5xl mb-2'> {title} </h1> 
                            <h2 className='font-normal text-3xl mb-3'> {subHeading} </h2>
                            <Button title='Know More' /> 
                        </div> 
                    </div> 

                    <div className='flex items-center justify-center'> 
                        <div className='relative bg-black rounded-3xl w-2/3 sm:w-full h-full'> 
                            <Image 
                                src={img}
                                width={imgWidth}
                                height={imgHeight}
                                alt='Image'
                                className='relative sm:left-[-100px] top-[50px]'
                            />
                        </div>
                    </div>
                </div>
            </> : 
            <> 
                <div className='border-2 relative bg-black text-white rounded-lg mb-16 mt-2'>
                    <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-col items-center
                        justify-evenly">  

                        <h1 className='font-bold text-4xl'> {title} </h1>

                        <div className='py-5'> 
                            <Button title='View Services' /> 
                        </div> 

                        <div className='top-[10.5em] sm:mt-10 absolute sm:top-20'> 
                            {img ? <Image 
                                width={imgWidth}
                                height={imgHeight}
                                alt={'Car Image'}
                                src={img} /> : null
                            }
                        </div> 
                    </div> 
                </div> 
            </>
        }
    </>
 
  )
}

export default Banner