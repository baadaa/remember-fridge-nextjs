import { createContext, useContext } from 'react';

import { User } from '@/types/types';

export type UserContextType = {
  localUser: User;
  setLocalUser: (data: User) => void;
};

const initialValue: UserContextType = {
  localUser: {
    id: '',
    name: '',
    avatar: null,
  },
  setLocalUser: (data) => console.warn('no theme provider', data),
};
export const LocalUserContext = createContext<UserContextType>(initialValue);

export const useLocalUser = (): UserContextType => useContext(LocalUserContext);
