import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { priceFormat } from "../../utils/priceFormat";
import ProductCard from "../../components/ProductCard";
import { productsAction, productsActions } from "../../actions/product.action";
import { toast } from "react-toastify";
import { SearchContext } from "../../contexts/SearchContext";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { searchedTerm } = useContext(SearchContext)

  const navigate = useNavigate()


  const handleNavigateToDetails = (product) => {
    navigate(`/details/${product.id}`, { state: product })
  }

  useEffect(() => {
    productsActions.getProductsAction()
      .then((response) => {
        setProducts(response.data.map((item) => {
          return {
            ...item,
            priceFormatted: priceFormat(item.price)
          }
        }))
      })
      .catch(() => toast.error('Houve um erro ao buscar os produtos :('))
  }, [])


  const filteredProducts = products.filter(({ name }) => name.includes(searchedTerm))


  return (
    <div>
      <div className="main-container">
        <div data-testid="products-list" className="products-list">
          {filteredProducts.map((product) => (
            <ProductCard product={product}
              onClick={() => handleNavigateToDetails(product)}
              key={product.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
