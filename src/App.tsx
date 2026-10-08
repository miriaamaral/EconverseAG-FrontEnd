import { useState } from "react";
import { Header } from "./components/Header/header";
import { HeroBanner } from "./components/HeroBanner/heroBanner";
import { CategoryList } from "./components/CategoryList/categoryList";
import { ProductShowcase } from "./components/ProductShowcase/productShowcase";
import { PartnerBanners } from "./components/PartnerBanners/partnerBanners";
import { ProductModal } from "./components/ProductModal/productModal";
import type { Product } from "./models/product.model";
import "./styles/global.scss";

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="app">
      <Header />
      <main>
        <HeroBanner />
        <CategoryList />
        <ProductShowcase onSelectProduct={(p) => setSelectedProduct(p)} />
        <PartnerBanners />
      </main>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}

export default App;
