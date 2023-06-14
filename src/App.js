import React from 'react';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Cart } from './features/cart/Cart';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
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
    element:<Cart></Cart>,
  },
]);
function App() {
  return (
    <div className="App">
   <RouterProvider router={router} />
 </div>
  );
}




export default App;
