'use client'
import Link from 'next/link'
import React from 'react'

interface NavItemsProps {
    link: string
    children: React.ReactNode
}

const NavItems: React.FC<NavItemsProps> = ({ link, children }) => {
  return (
    <Link href={link}> 
        {children}
    </Link>
  )
}

export default NavItems