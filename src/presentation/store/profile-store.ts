import {create} from 'zustand';

export interface ProfileState {
  name: string;
  email: string;
}

export const useProfileStore = create<ProfileState>()((set, get) => ({
  name: 'Mauri',
  email: 'mauri.monzon91@gmail.com',
}));
