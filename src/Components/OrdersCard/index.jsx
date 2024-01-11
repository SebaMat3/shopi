import { ChevronRightIcon } from '@heroicons/react/24/solid';

const OrdersCard = props => {
    const { totalPrice, totalProducts, date } = props
    
    return (
        <div className='flex justify-between p-4 mb-3 w-80 items-center border border-black rounded-lg'>
            <div className='flex justify-between w-full'>
                <p className='flex flex-col justify-start'>
                    <span className='font-light text-gray-700'>{date}</span>
                    <span className='font-light left-0'>{totalProducts} items.</span>
                </p>
                <p className='flex items-center text-lg gap-2'>
                    <span className='font-medium text-2xl'>${totalPrice}</span>  
                    <ChevronRightIcon className="w-6 h-6 text-black hover:bg-blue-800 cursor-pointer"/>          
                </p>
            </div>
        </div>
      
    )
}

export default OrdersCard;