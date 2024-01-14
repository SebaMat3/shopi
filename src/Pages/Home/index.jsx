import { useContext } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetails from "../../Components/ProductDetails";
import { ShoppiContext } from '../../Components/Context';



function Home() {
  const context = useContext(ShoppiContext);

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return (
        context.filteredItems.map(item => (
          <Card key={item.id} data={item}/>
        ))
      )
    } else {
      return (
        <div>Sorry... nothing like that around here.</div>
      )
    }
  }


  return (
    <Layout>
      <div className="flex justify-center items-center mb-4 p-4 w-80 relative   ">
        <h1 className='font-medium text-xl' >Home</h1>
      </div>
        <input type="text" 
          placeholder="Search what you want"
          className="border border-black rounded-lg mb-4 p-4 w-80 focus: outline-none"
          onChange={(event)=>(context.setSearchByTitle(event.target.value))}
        />
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {renderView()}
      </div>
      <ProductDetails/>
    </Layout>
  );
}

export default Home;