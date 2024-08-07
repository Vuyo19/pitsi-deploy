'use client'
import Image from "next/image";
import { Container } from "./components/Container";
import Banner from "./components/Banner";
import { Categories, PitsiFacts, Reasons, Services, Vehicles } from "./utils/constants";
import Button from "./components/Button";
import { useTailoredTourModal } from "@/app/hooks/useTailoredTourModal";
import { useAirportShuttleModal } from "./hooks/useAirportShuttleModal";
import { useCorporateShuttleModal } from "./hooks/useCorporateShuttle";

export default function Home() { 


  const tailoredTourModal = useTailoredTourModal();
  const airportShuttleModal = useAirportShuttleModal(); 
  const CorporateShuttleModal = useCorporateShuttleModal(); 

  return (
    <Container> 
        <div>
          <Banner 
            title='Giving Time Back To You'
            img='https://65e81151f52e248c552b-fe74cd567ea2f1228f846834bd67571e.ssl.cf1.rackcdn.com/ldm-images/2019-Mercedes-Benz-C_300-Sedan.png'
            imgHeight={350}
            imgWidth={350} />  
            
            {/* Available Services */}

            <div> 
              <h2 className="font-bold text-3xl text-center"> Available Services </h2>  
              <div className="flex flex-col gap-10 md:flex-row mt-4"> 
                  {Services.map((service) => (
                    <div key={service.id} className="px-4 justify-center text-center items-center w-full md:w-1/3 md:text-left md:justify-start md:items-start flex flex-col gap-2"> 
                        <Image 
                          src={service.icon}
                          width={100}
                          height={100}
                          alt={service.alt}
                        /> 
                        <h3 className="font-bold"> {service.title} </h3>
                        <p> {service.description} </p> 

                        {/* Button to book the service */} 
                        {service.id === 1 && (
                          <Button 
                            title="Book Now"
                            onClick={tailoredTourModal.onOpen}
                          />
                        )} 

                        {service.id === 2 && (
                          <Button 
                            title="Book Now" 
                            onClick={CorporateShuttleModal.onOpen}
                          />
                        )} 

                        {service.id === 3 && (
                          <Button 
                            title="Book Now"
                            onClick={airportShuttleModal.onOpen}
                          />
                        )}
                        

                    </div> 
                  ))}
              </div>
            </div> 
            
            {/* Browse Category */}
            <div> 
              <h2 className="font-bold text-3xl text-center mb-4 mt-20"> Browse Category </h2> 
              <div className="flex flex-row gap-0 sm:gap-10 justify-between sm:justify-center items-center"> 
                  {Categories.map((category) => (
                    <div key={category.id} className="rounded-lg px-4 py-2 border-2 border-gray-400 items-center text-center"> 
                        <Image
                          src={category.icon}
                          width={60}
                          height={60}
                          alt={category.alt}
                        /> 
                        <h3 className="font-bold text-lg"> {category.title} </h3>
                    </div> 
                  ))}
              </div> 
            </div>  

            {/* Explore Available Vehicles */}
            <div> 
              <h2 className="font-bold text-3xl text-center mt-20 mb-4"> Explore Available Vehicles </h2>  
              
              <div className="flex flex-row gap-0 sm:gap-10 justify-between sm:justify-center items-center"> 
                {Vehicles.map((vehicle) => (
                    <div key={vehicle.id} className="rounded-lg h-64 px-4 py-2 border-2 border-gray-400 flex items-center justify-center">
                    <div className="h-40 relative grid grid-rows-3 items-center justify-items-center">
                      <div className="flex items-center justify-center mb-2">
                        <Image
                          width={200}
                          height={200}
                          src={vehicle.image}
                          alt={vehicle.alt}
                        />
                      </div>
                      <h3 className="font-bold text-lg mt-2 row-start-2"> {vehicle.title} </h3>
                      <Button
                        title="Book Now"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us? */} 
            <div className="mb-10">  
              <h2 className="font-bold text-3xl text-center mb-4 mt-20"> Why Choose Us? </h2> 
              <div className="flex flex-col md:flex-row mt-4"> 
                  {Reasons.map((reason) => (
                    <div key={reason.id} className="mb-2 md:mb-0 px-4 justify-center text-center items-center w-full md:w-1/2 md:text-left md:justify-start md:items-start flex flex-col gap-2"> 
                      
                      <Image 
                        src={reason.icon}
                        width={100}
                        height={100}
                        alt={reason.alt}
                      />  

                      <h3 className="font-bold"> {reason.title} </h3>
                      <p> {reason.description} </p>


                    </div>
                  ))}
              </div>
            </div>
        </div>
    </Container>
    
  );
}
