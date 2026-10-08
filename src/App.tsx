import { useState } from 'react';
import { Header } from './components/Header/header';
import { HeroBanner } from './components/HeroBanner/heroBanner';
import { CategoryList } from './components/CategoryList/categoryList';
import { ProductShowcase } from './components/ProductShowcase/productShowcase';
import { ProductModal } from './components/ProductModal/productModal';
import type { Product } from './models/product.model';
import './styles/global.scss';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="app">
      <Header />
      <main>
        <HeroBanner />
        <CategoryList />
        <ProductShowcase onSelectProduct={handleSelectProduct} />
      </main>

      {/* Modal de Detalhes do Produto */}
      <ProductModal product={selectedProduct} onClose={handleCloseModal} />
    </div>
  );
}

export default App;