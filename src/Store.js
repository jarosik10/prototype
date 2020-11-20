import React, { useState, createContext } from 'react';

const Store = ({ children }) => {
    const [showMobileNavigation, setShowMobileNavigation] = useState(true);
    return (
        <Context.Provider value={[showMobileNavigation, setShowMobileNavigation]}>
            {children}
        </Context.Provider>
    );
}

export const Context = createContext();
export default Store;

