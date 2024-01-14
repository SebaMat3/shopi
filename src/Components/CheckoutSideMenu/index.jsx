import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppiContext } from '../Context';
import OrderCard from '../OrderCard';
import { totalPrice } from '../../Utils/index.js';



const CheckoutSideMenu = () => {
    const context = useContext(ShoppiContext);
    
    const handleDelete = (id) => {
        const updatedCart = context.cartProducts.filter(product => product.id != id);
        context.setCartProducts(updatedCart);
    };  
    const handleCheckout = ( order ) => {
        const orderToSave = {
            date : new Date().toLocaleDateString(),
            products : order,
            total : totalPrice(order),
            quantity : order.length,
            id: crypto.randomUUID()

        };
        context.setOrder([...context.order, orderToSave]);
        context.setCartProducts([]);
        context.setCount(0);
        context.closeSideMenu();
        context.setSearchByTitle(null);
    };
    return (
        <aside className={`${context.isSideMenuOpen ? 'flex':'hidden'} flex-col  bg-white fixed right-0 border border-black rounded-lg top-[69px] w-[360px] h-[calc(100vh-68px)]`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <button onClick={()=> context.closeSideMenu()}>
                    <XMarkIcon className='w-6 h-6 text-black rounded-full hover:bg-red-600 cursor-pointer'/>   
                </button>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
                {
                    context.cartProducts.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                };
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='text-md font-light'>Total: </span>
                    <span className='text-2xl font-semibold'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to={'my-orders/last'}>
                    <button className='w-full py-3 bg-black text-white rounded-lg'
                        onClick={() => handleCheckout(context.cartProducts)}
                    >Checkout</button>
                </Link>
               
            </div>
        </aside>
    )
};


export default CheckoutSideMenu;