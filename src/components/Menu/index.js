import React, { useContext, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { SearchContext } from "../../contexts/SearchContext";

import Input from '../Input'

const Menu = () => {

  const { cart } = useContext(CartContext)
  const { searchedTerm, setSearchedTerm } = useContext(SearchContext)
  const navigate = useNavigate()
  const location = useLocation();


  const handleChangeSearchInput = (e) => setSearchedTerm(e.target.value)

  return (

    <header className="menu">
      <div className="menu-content">
        <h1>Sushi Lab</h1>

        {location.pathname === '/' && <Input
          value={searchedTerm}
          onChange={handleChangeSearchInput}
          placeholder="O que deseja ?"
          name="text"
        />}

        <ul>
          <li onClick={() => navigate('/cart')} data-testid="cart-link">
            <FaCartPlus color="#fff" />
            Carrinho - {cart.length} items
          </li>
        </ul>
      </div>
    </header>

  );
};

export default Menu;
