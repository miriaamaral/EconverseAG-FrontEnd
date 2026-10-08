import { Header } from './components/Header/header';
import { HeroBanner } from './components/HeroBanner/heroBanner';
import { CategoryList } from './components/CategoryList/categoryList';
import { ProductShowcase } from './components/ProductShowcase/productShowcase';
import type { Product } from './models/product.model';
import './styles/global.scss';

function App() {
  const handleSelectProduct = (product: Product) => {
    console.log('Produto selecionado:', product);
  };

  return (
    <div className="app">
      <Header />
      <main>
        <HeroBanner />
        <CategoryList />
        <ProductShowcase onSelectProduct={handleSelectProduct} />
      </main>
    </div>
  );
}

export default App;