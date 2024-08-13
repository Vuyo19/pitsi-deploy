'use client'
import Image from "next/image";
import { Container } from "./components/Container";
import Banner from "./components/Banner";
import { Categories, PitsiFacts, Reasons, Services, Vehicles } from "./utils/constants";
import Button from "./components/Button";
import { useTailoredTourModal } from "@/app/hooks/useTailoredTourModal";
import { useAirportShuttleModal } from "./hooks/useAirportShuttleModal";
import { useCorporateShuttleModal } from "./hooks/useCorporateShuttle";
import { useCallback, useState } from "react";
import { Modal } from "./components/modals/Modal";
import CheckAvailabilityForm from "./CheckAvailabilityForm";
import FormWrap from "./components/FormWrap";

export default function Home() { 


  const tailoredTourModal = useTailoredTourModal();
  const airportShuttleModal = useAirportShuttleModal(); 
  const CorporateShuttleModal = useCorporateShuttleModal();  

  // for genericModal. 
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState("");

  const openModal = useCallback((vehicleName: string) => {
    setSelectedVehicle(vehicleName);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setSelectedVehicle("");
  }, []);

  const handleSubmit = useCallback(() => {
    // Handle submission logic here
    closeModal(); // Optionally close the modal after submission
  }, [closeModal]); 

  const body = (
    <> 

      <h1 className="font-bold mb-2"> {selectedVehicle} </h1> 

      <CheckAvailabilityForm />

    </>
  )

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
              
              <div className="flex flex-wrap justify-center gap-6 mt-5">
                {Services.map((service) => (
                  <div
                    key={service.id}
                    className="flex flex-col items-center justify-between text-center w-full max-w-sm p-6 rounded-lg bg-white"
                  >
                    <div className="flex flex-col items-center">
                      <Image
                        src={service.icon}
                        width={100}
                        height={100}
                        alt={service.alt}
                        className="mb-4"
                      />
                      <h3 className="font-bold text-xl mb-2"> {service.title} </h3>
                      <p className="mb-4"> {service.description} </p>
                    </div>
                    <div className="mt-auto">
                      {service.id === 1 && (
                        <Button title="Book Now" onClick={tailoredTourModal.onOpen} />
                      )}
                      {service.id === 2 && (
                        <Button title="Book Now" onClick={CorporateShuttleModal.onOpen} />
                      )}
                      {service.id === 3 && (
                        <Button title="Book Now" onClick={airportShuttleModal.onOpen} />
                      )}
                    </div>
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
              
              <div className="flex justify-center">
                <div className="w-full max-w-screen-lg px-4">
                  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols">
                    {Vehicles.map((vehicle) => ( 
                      <div
                        key={vehicle.id}
                        className="rounded-lg h-64 w-full p-4 border-2 border-gray-400 flex flex-col items-center justify-between"
                      >
                        <div className="flex flex-col items-center">
                          <div className="flex-shrink-0 p-2 bg-white rounded-lg">
                            <Image
                              width={200}
                              height={120}
                              src={vehicle.image}
                              alt={vehicle.alt}
                              className="w-48 h-28 object-cover rounded-lg" // Fixed dimensions
                            />
                          </div>
                          <h3 className="font-bold text-lg mt-4 text-center"> {vehicle.title} </h3>
                        </div>
                        <Button title="Check Availability" onClick={() => openModal(vehicle.title)}  />
                      </div>
                    ))}
                  </div>
                </div>
              </div>  

              <Modal
                isOpen={modalOpen}
                onClose={closeModal}
                onSubmit={handleSubmit}
                title="Vehicle Availability"
                actionLabel="Check Availability"
                body={body}
                secondaryActionLabel="Cancel"
                secondaryAction={closeModal}
              />
            

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
