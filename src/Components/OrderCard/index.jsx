import { XMarkIcon } from '@heroicons/react/24/solid';


const OrderCard = props => {
    const { id, title, price, imageUrl, handleDelete } = props
    let renderXMarkIcon;
    if (handleDelete) {
        renderXMarkIcon =<button>
                    <XMarkIcon 
                        className='w-5 h-5 text-black rounded-full hover:bg-red-600 cursor-pointer'
                        onClick={() => handleDelete(id)}
                    />
                </button>
        }
    return (
        <div className='flex justify-between items-center mb-3'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20 '>
                    <img className='w-full h-full object-cover rounded-lg' src={imageUrl} alt={title} />
                </figure>
                <p className='text-sm font-light text-gray-600'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>{`$`+price}</p>
                {renderXMarkIcon}
            </div>   
        </div>
      
    )
}

export default OrderCard;
