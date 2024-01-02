import { createContext } from 'react'


const ShoppiContext = createContext();

export const ShoppiProvider = ({ children }) => {
    return (
        <ShoppiContext.Provider //value={}
        >
            {children}
        </ShoppiContext.Provider>
    )
}