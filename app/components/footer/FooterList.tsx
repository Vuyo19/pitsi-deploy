'use client'

interface FooterListProps {
    children: React.ReactNode; 
}

import React from 'react'

const FooterList: React.FC<FooterListProps> = ({ children }) => {
  return (
    <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/6 
    mb-6 flex flex-col gap-2'>
        {children}
    </div>
  )
}

export default FooterList