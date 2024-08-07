'use client' 

import { create } from 'zustand';  

interface CorporateShuttleModal {
    isOpen: boolean; 
    onOpen: () => void; 
    onClose: () => void;
} 

export const useCorporateShuttleModal = create<CorporateShuttleModal>((set) => ({
    isOpen: false, 
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
})) 

