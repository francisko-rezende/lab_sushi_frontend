import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Cart from '../pages/Cart';
import { Contact } from '../pages/Contact';
import Details from '../pages/Details';

import Home from '../pages/Home';
import Order from '../pages/Order';
import { Orders } from '../pages/Orders';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="details/:id" element={<Details />} />
      <Route path="cart" element={<Cart />} />
      <Route path="order" element={<Order />} />
      <Route path="my-orders" element={<Orders />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;