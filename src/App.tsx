import { useState } from 'react';
import { Header } from './components/Header/header';
import { HeroBanner } from './components/HeroBanner/heroBanner';
import { CategoryList } from './components/CategoryList/categoryList';
import { ProductShowcase } from './components/ProductShowcase/productShowcase';
import { PartnerBanners } from './components/PartnerBanners/partnerBanners';
import { BrandShowcase } from './components/BrandShowcase/brandShowcase';
import { ProductModal } from './components/ProductModal/productModal';
import type { Product } from './models/product.model';
import './styles/global.scss';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="app">
      <Header />
      <main>
        <HeroBanner />
        <CategoryList />

        {/* 1ª Vitrine: Com abas de categorias */}
        <ProductShowcase onSelectProduct={(p) => setSelectedProduct(p)} />

        {/* 1ª Seção de Banners de Parceiros */}
        <PartnerBanners />

        {/* 2ª Vitrine: Sem abas e com "Ver todos" */}
        <ProductShowcase
          onSelectProduct={(p) => setSelectedProduct(p)}
          showTabs={false}
          showSeeAll={true}
        />

        {/* 2ª Seção de Banners de Parceiros */}
        <PartnerBanners />

        {/* Carrossel de Marcas */}
        <BrandShowcase />

        {/* 3ª Vitrine: Sem abas e com "Ver todos" */}
        <ProductShowcase
          onSelectProduct={(p) => setSelectedProduct(p)}
          showTabs={false}
          showSeeAll={true}
        />
      </main>

      {/* Modal Global de Produto */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}

export default App;