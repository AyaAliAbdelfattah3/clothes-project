import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";


 const Layout = ()=>(
  <>
  <NavBar/>
  <Outlet/>
  <Footer/>
  </>
 )
const App = () => {
const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    )
  );
   return <RouterProvider router={router} />;

};

export default App;
