'use client'

import React from 'react' 

interface ButtonProps {
    title: string
    disabled?: boolean; 
    outline?: boolean 
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({ title, outline, disabled, onClick }) => {
  return (
    <button 
    onClick={onClick}
    className={outline ? 
    'bg-white py-2 px-6 rounded-xl font-bold border-secondary border-2 text-secondary' : 
    'bg-secondary rounded-xl py-2 px-6 font-bold text-white'}> 
        {title}
    </button>
  )
}

export default Button