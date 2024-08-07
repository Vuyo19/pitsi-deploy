

export async function POST(request: Request) {
    
    const body = await request.json(); 

    const { form, name, surname, contactNumber, durationStay, preferredVehicle, passengers, comments,
    trip, flightNumber, returnFlightNumber, pickUpPoint } = body 


}