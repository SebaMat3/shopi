import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { ShoppiContext } from '../../Components/Context';
import OrdersCard from '../../Components/OrdersCard';

function MyOrders() {
  const context = useContext(ShoppiContext);
  console.log(context.order);
  return (
    <Layout>
      <div className="w-80 relative flex items-center mb-4 justify-center">
        <h1 className='font-medium text-xl' >My Orders</h1>
      </div>
      {
        context.order?.map((order, index) => (
          <Link to={`/my-orders/${order.id}`} key={index}>
            <OrdersCard 
              date = {order.date}
              totalProducts = {order.quantity}
              totalPrice = {order.total}
              products = {order.products}
            />
          </Link>
        ))
      }
    </Layout>
  );
}

export default MyOrders;