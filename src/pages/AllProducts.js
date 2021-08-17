import { useEffect, useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import ProductList from "../components/product/ProductList";
import CategoryList from "../components/category/CategoryList";

function AllProducts() {
  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState();
  const [categories, setCategories] = useState();
  const axios = require("../axios-catalog").default;

  useEffect(() => {
    axios
      .get("/products")
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => console.error(err));

    axios
      .get("/categories")
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch((err) => console.error(err));
  }, [axios]);

  useEffect(() => {
    products && categories && setLoading(false);
  }, [products, categories]);

  return (
    <>
      {isLoading && <CircularProgress className="app-loader" />}
      {!isLoading && products.length === 0 && (
        <p style={{ textAlign: "center" }}>Sorry, no products found.</p>
      )}
      {!isLoading && categories.length > 0 && (
        <CategoryList categories={categories} />
      )}
      {!isLoading && products.length > 0 && <ProductList products={products} />}
    </>
  );
}

export default AllProducts;
