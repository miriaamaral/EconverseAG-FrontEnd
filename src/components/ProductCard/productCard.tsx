import React from "react";
import type { Product } from "../../models/product.model";
import {
  formatCurrency,
  calculateOldPrice,
  formatInstallments,
} from "../../utils/formatters";
import styles from "./ProductCard.module.scss";

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
}) => {
  const oldPrice = calculateOldPrice(product.price);

  return (
    <article
      className={styles.card}
      onClick={() => onSelectProduct(product)}
      aria-label={`Ver detalhes de ${product.productName}`}
    >
      <div className={styles.imageContainer}>
        <img src={product.photo} alt={product.productName} loading="lazy" />
      </div>

      <div className={styles.productInfo}>
        <h3 className={styles.title}>{product.productName}</h3>

        <p className={styles.oldPrice}>{formatCurrency(oldPrice)}</p>
        <p className={styles.currentPrice}>{formatCurrency(product.price)}</p>
        <p className={styles.installments}>
          {formatInstallments(product.price)}
        </p>
        <p className={styles.freeShipping}>Frete grátis</p>

        <button
          type="button"
          className={styles.buyButton}
          onClick={(e) => {
            e.stopPropagation();
            onSelectProduct(product);
          }}
        >
          Comprar
        </button>
      </div>
    </article>
  );
};