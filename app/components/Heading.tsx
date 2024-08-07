'use client'


interface HeadingProps {
    title: string, 
    center?: boolean, 
    subtitle?: string; 

} 

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <div className={center ? 'text-center' : 'text-start'}> 
        <h1 className="font-bold text-2xl"> {title} </h1>  
        <div className='font-light text-neutral-500 mt-2'>
            {subtitle}
        </div>
    </div>
  )
}

export default Heading; 