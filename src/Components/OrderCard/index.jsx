import { XMarkIcon } from '@heroicons/react/24/solid';


const OrderCard = props => {
    const { title, price, imageUrl} = props
    
    return (
        <div className='flex justify-between items-center gap-2 mb-2'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20 '>
                    <img className='w-full h-full object-cover rounded-lg' src={imageUrl} alt={title} />
                </figure>
                <p className='text-sm font-light text-gray-600'>{title}</p>
            </div>
            <div className='flex'>
                <p className='text-sm font-medium'>{`$`+price}</p>
                <button //</div>onClick={()=> context.closeSideMenu() }
                >
                    <XMarkIcon className='w-4 h-4 ml-1 right-0 rounded-full hover:bg-red-600 cursor-pointer'/>   
                </button>
            </div> 
        </div>
    )
}

export default OrderCard;
