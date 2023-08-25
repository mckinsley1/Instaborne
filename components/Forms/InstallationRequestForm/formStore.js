import { create } from 'zustand'

export const useStore = create((set) => ({
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  address: '',
  city: '',
  province: '',
  postalCode: '',
  setFirstName: (firstName) => set(() => ({ firstName: firstName})),
  setLasttName: (lastName) => set(() => ({ lastName: lastName})),
  setEmail: (email) => set({ email: email }),
  setProvince: (province) => set({province: province})
}))