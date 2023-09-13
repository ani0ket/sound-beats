import { useEffect, useContext } from "react";

import "./Home.scss";

import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);

  useEffect(() => {
    console.log("ran");
    const getProducts = () => {
      fetchDataFromApi("/api/products?populate=*").then((res) => {
        console.log(res);
        setProducts(res);
      });
    };
    getProducts();
    const getCategories = () => {
      fetchDataFromApi("/api/categories?populate=*").then((res) => {
        // console.log(res);
        setCategories(res);
      });
    };
    getCategories();
  }, []);

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          {categories && <Category categories={categories} />}
          {products && (
            <Products products={products} headingText="Popular Products" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
