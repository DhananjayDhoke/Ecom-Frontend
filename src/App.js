import React, { useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { createRoot } from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import Protected from './features/auth/components/protected';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser } from './features/auth/authSlice';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';


const router = createBrowserRouter([
  {
    path: "/",
    element: (<Protected>
      <Home></Home>
    </Protected>)
  },
  {
    path: "/login",
    element:<LoginPage></LoginPage> ,
  },
  {
    path: "/signup",
    element:<SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element:<Protected>
      <CartPage></CartPage>
    </Protected>,
  },
  {
    path: "/checkout",
    element:<Protected>
      <CheckoutPage></CheckoutPage>
    </Protected>,
  },
  {
    path: "/product-details/:id",
    element:<Protected>
      <ProductDetailsPage></ProductDetailsPage>
    </Protected>,
  },
]);
function App() {
  const user = useSelector(selectLoggedInUser)
  const dispatch = useDispatch();
  useEffect(()=>{
     if(user){
      dispatch(fetchItemsByUserIdAsync(user.id))
     }
  },[dispatch,user]);

  return (
    <div className="App">
   <RouterProvider router={router} />
 </div>
  );
}




export default App;
