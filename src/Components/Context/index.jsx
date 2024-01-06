import { useState, createContext } from 'react';

export const ShoppiContext = createContext();

export const ShoppiProvider = ({ children }) => {
    //Shopping Cart – Increment quantity
    const [count, setCount] = useState(0);
    console.log('COUNT:' + count);

    //Shopping Cart – Add to cart
    const [cartProducts, setCartProducts] = useState([])

    // Cards - Which product details 
    const [productToShow, setProductToShow] = useState({});
    //Product Details – Close/Open 
    const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(false);
    const openProductDetails = () => setIsProductDetailsOpen(true);
    const closeProductDetails = () => setIsProductDetailsOpen(false);
    
    //SideMenu – Close/Open 
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const openSideMenu = () => setIsSideMenuOpen(true);
    const closeSideMenu = () => setIsSideMenuOpen(false);


    
    return (
        <ShoppiContext.Provider value={{
            count,
            setCount,
            isProductDetailsOpen,
            openProductDetails,
            closeProductDetails,
            isSideMenuOpen,
            openSideMenu,
            closeSideMenu,
            productToShow,
            setProductToShow,
            cartProducts, 
            setCartProducts
        }}
        >
            {children}
        </ShoppiContext.Provider>
    )
};