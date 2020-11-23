import React, { useState, useEffect, createContext } from 'react';
import debounce from 'lodash.debounce';

const Store = ({ children }) => {
    const [windowDimension, setWindowDimension] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
          setWindowDimension(window.innerWidth)
          console.log(window.innerWidth)
        }
    
        const debouncedHandleResize = debounce(handleResize, 100, { 'leading': false, 'trailing': true });
        window.addEventListener('resize', debouncedHandleResize);
    
        return () => { window.removeEventListener('resize', debouncedHandleResize) };
      }, []);

      const isMobile = windowDimension < 805;

    return (
        <Context.Provider value={isMobile}>
            {children}
        </Context.Provider>
    );
}

export const Context = createContext();
export default Store;

