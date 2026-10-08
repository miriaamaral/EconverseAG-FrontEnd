import React, { useRef, useState } from "react";
import { ProductCard } from "../ProductCard/productCard";
import type { Product } from "../../models/product.model";
import styles from "./ProductShowcase.module.scss";
import vetorEsquerdo from "../../assets/icons/vetor-esquerdo.png";
import vetorDireito from "../../assets/icons/vetor-direito.png";

const CATEGORY_TABS = [
  "CELULARES",
  "ACESSÓRIOS",
  "TABLETS",
  "NOTEBOOKS",
  "TVS",
  "VER TODOS",
];

interface ProductShowcaseProps {
  products: Product[];
  loading: boolean;
  error: string | null;
  onSelectProduct: (product: Product) => void;
  title?: string;
  showTabs?: boolean;
  showSeeAll?: boolean;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  products,
  loading,
  error,
  onSelectProduct,
  title = "Produtos relacionados",
  showTabs = true,
  showSeeAll = false,
}) => {
  const [activeTab, setActiveTab] = useState("CELULARES");
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={styles.showcaseSection} aria-label={title}>
      <div className="container">
        <div className={styles.titleContainer}>
          <div className={styles.line} />
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.line} />
        </div>

        {showSeeAll && (
          <div className={styles.seeAllContainer}>
            <a href="#ver-todos" className={styles.seeAllLink}>
              Ver todos
            </a>
          </div>
        )}

        {showTabs && (
          <ul className={styles.tabsList}>
            {CATEGORY_TABS.map((tab) => (
              <li key={tab}>
                <button
                  type="button"
                  className={`${styles.tabButton} ${
                    activeTab === tab ? styles.active : ""
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        )}

        {loading && (
          <div className={styles.loadingState}>Carregando produtos...</div>
        )}

        {error && <div className={styles.errorState}>{error}</div>}

        {!loading && !error && products.length > 0 && (
          <div className={styles.carouselWrapper}>
            <button
              type="button"
              className={`${styles.arrowButton} ${styles.prev}`}
              onClick={() => handleScroll("left")}
              aria-label="Anterior"
            >
              <img src={vetorEsquerdo} alt="Anterior" />
            </button>

            <div className={styles.cardsContainer} ref={carouselRef}>
              {products.map((product, index) => (
                <ProductCard
                  key={`${product.productName}-${index}`}
                  product={product}
                  onSelectProduct={onSelectProduct}
                />
              ))}
            </div>

            <button
              type="button"
              className={`${styles.arrowButton} ${styles.next}`}
              onClick={() => handleScroll("right")}
              aria-label="Próximo"
            >
              <img src={vetorDireito} alt="Próximo" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};