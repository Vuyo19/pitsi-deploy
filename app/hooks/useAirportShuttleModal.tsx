'use client' 

import { create } from 'zustand'; 
 
interface AirportShuttleModal {
    isOpen: boolean; 
    onOpen: () => void; 
    onClose: () => void;
}

export const useAirportShuttleModal = create<AirportShuttleModal>((set) => ({
    isOpen: false, 
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));


