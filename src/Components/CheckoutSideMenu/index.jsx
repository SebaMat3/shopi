import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppiContext } from '../Context';
import { useContext } from 'react';
import OrderCard from '../OrderCard';



const CheckoutSideMenu = () => {
    const context = useContext(ShoppiContext);
    console.log('CART: '+context.cartProducts);
    return (
        <aside className={`${context.isSideMenuOpen ? 'flex':'hidden'} flex-col bg-white fixed right-0 border border-black rounded-lg top-[69px] w-[360px] h-[calc(100vh-68px)]`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <button onClick={()=> context.closeSideMenu()}>
                    <XMarkIcon className='w-7 h-7 rounded-full hover:bg-red-600 cursor-pointer'/>   
                </button>
            </div>
            <div className='px-6'>
                {
                    context.cartProducts.map(product => (
                        <OrderCard
                        key={product.id}
                        title={product.title}
                        imageUrl={product.images}
                        price={product.price}
                        />
                    ))
                }
            </div>
        </aside>
    )
}


export default CheckoutSideMenu;