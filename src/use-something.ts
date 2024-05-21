import { create} from 'zustand'

type Props = {
    location: string;
    setLocation: (location: string) => void;
}

export const useSomething = create<Props>((set) => ({
    location: '',
    setLocation: (location) => set({location })
 
}))

