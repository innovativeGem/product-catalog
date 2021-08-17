import "./App.scss";
import { ReactComponent as AdoreLogo } from "./adore-logo.svg";
import AllProducts from "./pages/AllProducts";
import ProductDetails from "./pages/ProductDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const DEVELOPER = "Naman Nanavati";
const TODAY = new Date();
const YEAR = TODAY.getFullYear();

function App() {
  return (
    <div className="root">
      <header className="app-header">
        <AdoreLogo className="logo" />
      </header>
      <main className="app-content">
        <Router>
          <Switch>
            <Route path="/" exact>
              <AllProducts />
            </Route>
            <Route path="/:id">
              <ProductDetails />
            </Route>
            <Route>
              <h2>Oops! Page not found!</h2>
            </Route>
          </Switch>
        </Router>
      </main>
      <footer className="app-footer">
        {DEVELOPER} - {YEAR}
      </footer>
    </div>
  );
}

export default App;
