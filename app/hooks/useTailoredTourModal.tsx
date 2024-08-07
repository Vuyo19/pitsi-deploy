'use client'; 

import { create } from 'zustand'; 

interface TailoredTourModalStore {
    isOpen: boolean; 
    onOpen: () => void;  
    onClose: () => void;  
}

export const useTailoredTourModal = create<TailoredTourModalStore>((set) => ({
    isOpen: false, 
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
})); 

