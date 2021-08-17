import "./App.scss";
import { ReactComponent as AdoreLogo } from "./adore-logo.svg";
import ProductList from "./components/product/ProductList";
import CategoryList from "./components/category/CategoryList";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useState, useEffect } from "react";

const DEVELOPER = "Naman Nanavati";
const TODAY = new Date();
const YEAR = TODAY.getFullYear();

function App() {
  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState();
  const [categories, setCategories] = useState();
  const axios = require("./axios-catalog").default;

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
    (products && categories) && setLoading(false);
  }, [products, categories]);

  return (
    <div className="root">
      <header className="app-header">
        <AdoreLogo className="logo" />
      </header>
      <main className="app-content">
        { categories && <CategoryList categories={categories} /> }
        {isLoading && <CircularProgress className="app-loader" />}
        {!isLoading && products.length === 0 && <p style={{textAlign: "center"}}>Sorry, no products found.</p>}
        {!isLoading && products.length > 0 && <ProductList products={products} />}
      </main>
      <footer className="app-footer">
        {DEVELOPER} - {YEAR}
      </footer>
    </div>
  );
}

export default App;
