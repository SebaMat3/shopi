import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppiContext } from '../Context';
import { useContext } from 'react';


const ProductDetails = () => {
    const context = useContext(ShoppiContext);

    return (
    <aside className={`${context.isProductDetailsOpen ? 'flex':'hidden'} flex-col bg-white fixed right-0 border border-black rounded-lg top-[69px] w-[360px] h-[calc(100vh-68px)]`}>
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>Detail</h2>
            <button onClick={()=> context.closeProductDetails()}>
                <XMarkIcon className='w-7 h-7 rounded-full hover:bg-red-600 cursor-pointer'/>   
            </button>

        </div>
        <figure className='px-6'>
            <img className='w-full h-full object-cover rounded-lg' 
                src={context.productToShow.images ? context.productToShow.images[0]: ''} alt={context.productToShow.title} />
        </figure>
        <p className='flex flex-col p-6'>
            <span className='font-medium text-2xl'>{context.productToShow?.title}</span>
            <span className='font-medium text-md'>{`$`+context.productToShow?.price}</span>
            <span className='font-light text-sm'>{context.productToShow?.description}</span>
        </p>
    </aside>
    )
}


export default ProductDetails;