import { useState } from 'react';
import { useProducts } from './hooks/useProducts';
import { Header } from './components/Header/header';
import { HeroBanner } from './components/HeroBanner/heroBanner';
import { CategoryList } from './components/CategoryList/categoryList';
import { ProductShowcase } from './components/ProductShowcase/productShowcase';
import { PartnerBanners } from './components/PartnerBanners/partnerBanners';
import { BrandShowcase } from './components/BrandShowcase/brandShowcase';
import { Footer } from './components/Footer/footer';
import { ProductModal } from './components/ProductModal/productModal';
import type { Product } from './models/product.model';
import './styles/global.scss';

function App() {
  const { products, loading, error } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="app">
      <Header />
      <main>
        <HeroBanner />
        <CategoryList />

        <ProductShowcase
          products={products}
          loading={loading}
          error={error}
          onSelectProduct={(p) => setSelectedProduct(p)}
        />

        <PartnerBanners />

        <ProductShowcase
          products={products}
          loading={loading}
          error={error}
          onSelectProduct={(p) => setSelectedProduct(p)}
          showTabs={false}
          showSeeAll={true}
        />

        <PartnerBanners />

        <BrandShowcase />

        <ProductShowcase
          products={products}
          loading={loading}
          error={error}
          onSelectProduct={(p) => setSelectedProduct(p)}
          showTabs={false}
          showSeeAll={true}
        />
      </main>

      <Footer />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}

export default App;