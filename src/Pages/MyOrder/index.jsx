import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Layout from "../../Components/Layout";
import { ShoppiContext } from '../../Components/Context';
import OrderCard from '../../Components/OrderCard';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

function MyOrder() {
  const context = useContext(ShoppiContext);
    //Get the url
    const currentPath = window.location.pathname
    //Cut the url to get last part (beyond my-orders/)
    let index = currentPath.substring(currentPath.lastIndexOf('/')+1)
    if (index === 'last') index = context.order?.length - 1;
    
    console.log(index);
    
  return (
    <Layout>
      <div className="w-80 flex relative mb-6 justify-center">
        <Link to={'/my-orders'}>
          <ChevronLeftIcon className="absolute left-0 w-5 h-5 text-black rounded-full hover:bg-red-600 cursor-pointer"/>
        </Link>
        <h1 className='font-medium text-xl'>My Order</h1>
      </div>
      <div className='flex flex-col w-80'>
                {
                    context.order?.[index]?.products.map(product => (
                        <OrderCard
                          key={product.id}
                          id={product.id}
                          title={product.title}
                          imageUrl={product.images}
                          price={product.price}
                        />
                    ))
                }
            </div>
    </Layout>
  );
}

export default MyOrder;