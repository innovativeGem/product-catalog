import './App.scss';
import {ReactComponent as AdoreLogo} from './adore-logo.svg';
import ProductList from './components/product/ProductList';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useState } from 'react';

const DEVELOPER = 'Naman Nanavati';
const TODAY = new Date();
const YEAR = TODAY.getFullYear();

function App() {
  const [isLoading, setLoading] = useState(true);

  // Temporary
  setTimeout(() => {
    setLoading(false);
  }, 500);
  return (
    <div className="root">
      <header className="app-header">
        <AdoreLogo className="logo" />
      </header>
      <main className="app-content">
        { isLoading && <CircularProgress className="app-loader" /> }
        { !isLoading && <ProductList /> }
      </main>
      <footer className="app-footer">{DEVELOPER} - {YEAR}</footer>
    </div>
  );
}

export default App;
