import { useContext } from 'react';

import { NavDrawerContext } from './context';

export const useNavDrawer = () => useContext(NavDrawerContext);
