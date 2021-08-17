import "./App.scss";
import { ReactComponent as AdoreLogo } from "./adore-logo.svg";
import ProductList from "./components/product/ProductList";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useState, useEffect } from "react";

const DEVELOPER = "Naman Nanavati";
const TODAY = new Date();
const YEAR = TODAY.getFullYear();

function App() {
  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState();
  const axios = require("axios").default;

  useEffect(() => {
    axios
      .get("https://www.adorebeauty.com.au/api/ecommerce/catalog/products")
      .then((res) => {
        setProducts(res.data.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [axios]);

  return (
    <div className="root">
      <header className="app-header">
        <AdoreLogo className="logo" />
      </header>
      <main className="app-content">
        {isLoading && <CircularProgress className="app-loader" />}
        {!isLoading && products.length === 0 && <p>Sorry, no products found.</p>}
        {!isLoading && products.length > 0 && <ProductList products={products} />}
      </main>
      <footer className="app-footer">
        {DEVELOPER} - {YEAR}
      </footer>
    </div>
  );
}

export default App;
