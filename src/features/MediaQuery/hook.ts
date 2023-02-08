import { useContext } from 'react';

import { MediaQueryContext } from './context';

export const useMediaQuery = () => useContext(MediaQueryContext);
