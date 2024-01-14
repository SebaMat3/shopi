import { useState, createContext, useEffect } from 'react';

export const ShoppiContext = createContext();

export const ShoppiProvider = ({ children }) => {
    //Shopping Cart – Increment quantity
    const [count, setCount] = useState(0);
    console.log('COUNT:' + count);
    //Shopping Cart – Add to cart
    const [cartProducts, setCartProducts] = useState([]);
    //Shopping Cart – Order
    const [order, setOrder] = useState([]);

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

    //Home - Get products 
    const [items, setItems] = useState(null);
    //Home - Searchbar
    const [searchByTitle, setSearchByTitle] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);
    //Home - Category filter
    const [searchByCategory, setSearchByCategory] = useState(null);

    //Effects & try-catch to work with API asynchronism, promises
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
    }, [])
    
    const filterSearchByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    };
    const filterSearchByCategory = (items, searchByCategory) => {
        console.log('items:', items);
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    };

    const filterBy = (searchType, items, searchByCategory, searchByTitle) => {
        if (searchType === 'BY_TITLE') {
            return filterSearchByTitle(items, searchByTitle)
        }
        if (searchType === 'BY_CATEGORY') {
            return filterSearchByCategory(items, searchByCategory)
        }
        if (searchType === 'BY_CATEGORY_AND_TITLE') {
            return filterSearchByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
        if (!searchType) {
            return items;
        }
    };

    useEffect (() =>{
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByCategory, searchByTitle))
        if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY',items, searchByCategory, searchByTitle))
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY_AND_TITLE',items, searchByCategory, searchByTitle))
        if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null,items, searchByCategory, searchByTitle));
    }, [items, searchByCategory, searchByTitle])
    
    console.log('filteredItems:', filteredItems);


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
            setCartProducts,
            order,
            setOrder,
            items, 
            setItems,
            searchByTitle, 
            setSearchByTitle,
            filteredItems,
            setFilteredItems,
            searchByCategory, 
            setSearchByCategory
        }}
        >
            {children}
        </ShoppiContext.Provider>
    )
};