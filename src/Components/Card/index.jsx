import { useContext } from "react";
import { ShoppiContext } from "../Context";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/solid";




const Card = (data) => {
    //'I want you to read the global state'
    const context = useContext(ShoppiContext);

    const openProduct = (productDetails) =>{
        context.openProductDetails();
        context.setProductToShow(productDetails);
        context.closeSideMenu();
    } 
    const addProductToCart = (Event, productData) => {
        Event.stopPropagation(); // avoids event propagation to main div (openProductDetails())
        context.setCartProducts([...context.cartProducts, productData]);
        context.setCount(context.count + 1);
        context.closeProductDetails();       
        context.openSideMenu();
    }
    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0;

            if (isInCart) {
                return (
                    <CheckIcon 
                    className='h-6 w-6 hover:bg-blue-500 absolute flex top-0 right-0 justify-center items-center rounded-full m-1'
                />)
            } else {
                return (
                <PlusCircleIcon 
                className='h-6 w-6 hover:bg-blue-500 absolute flex top-0 right-0 justify-center items-center rounded-full m-1'
                onClick={(Event)=> { 
                    addProductToCart(Event, data.data);
                }}/>
                )
            }      
    }
	return (
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'
            onClick={()=> openProduct(data.data)}>
            <figure className='relative mb-2 w-full h-4/5'>
                <figcaption className='absolute bottom-0 left-0 rounded-lg bg-white/60 text-black text-xs m-2 px-3 py-0.5'>
                    {data.data?.category?.name}
                </figcaption>
                <img className='w-full h-full object-cover rounded-lg' src={data.data?.images[0]} alt={data.data?.title} />
                
                {renderIcon(data.data?.id)}

            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>
                    {data.data?.title}
                </span>
                <span className='text-lg font-medium'>
                    {`$`+data.data?.price}
                </span>
            </p>
        </div>
    )
}

export default Card;