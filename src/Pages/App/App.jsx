import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppiProvider } from "../../Components/Context";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import SignIn from "../SignIn";
import Home from "../Home";
import NotFound from "../NotFound";
import Navbar from "../../Components/Navbar";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/*", element: <NotFound /> }
  ]);

  return routes;
};

const App = () => {
  return (
    <ShoppiProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppiProvider>
  );
}

export default App;
