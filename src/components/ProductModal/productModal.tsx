import React, { useState, useEffect } from "react";
import type { Product } from "../../models/product.model";
import { formatCurrency } from "../../utils/formatters";
import styles from "./ProductModal.module.scss";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
}) => {
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Fechar modal"
        >
          &times;
        </button>

        <div className={styles.imageSection}>
          <img src={product.photo} alt={product.productName} />
        </div>

        <div className={styles.infoSection}>
          <div>
            <h2 id="modal-product-title" className={styles.productTitle}>
              {product.productName}
            </h2>
            <p className={styles.productPrice}>
              {formatCurrency(product.price)}
            </p>
            <p className={styles.productDescription}>
              {product.descriptionShort ||
                "Many desktop publishing packages and web page editors now use Many desktop publishing packages and web page editors now use."}
            </p>
            <a href="#detalhes" className={styles.moreDetailsLink}>
              Veja mais detalhes do produto &gt;
            </a>
          </div>

          <div className={styles.actionsRow}>
            <div className={styles.quantitySelector}>
              <button
                type="button"
                onClick={handleDecrease}
                aria-label="Diminuir quantidade"
              >
                -
              </button>
              <span>{String(quantity).padStart(2, "0")}</span>
              <button
                type="button"
                onClick={handleIncrease}
                aria-label="Aumentar quantidade"
              >
                +
              </button>
            </div>

            <button
              type="button"
              className={styles.buyButton}
              onClick={() => {
                alert(
                  `Produto "${product.productName}" (${quantity}x) adicionado ao carrinho!`,
                );
                onClose();
              }}
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};