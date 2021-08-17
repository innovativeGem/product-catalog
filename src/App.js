import './App.scss';
import {ReactComponent as AdoreLogo} from './adore-logo.svg';
import ProductList from './components/product/ProductList';

const DEVELOPER = 'Naman Nanavati';
const TODAY = new Date();
const YEAR = TODAY.getFullYear();

function App() {
  return (
    <div className="root">
      <header className="app-header">
        <AdoreLogo className="logo" />
      </header>
      <main className="app-content">
        <ProductList />
      </main>
      <footer className="app-footer">{DEVELOPER} - {YEAR}</footer>
    </div>
  );
}

export default App;
