import React from "react";
import styles from "./PartnerBanners.module.scss";
import partnerBgImg from "../../assets/img/background-card-parceiros.png";

export const PartnerBanners: React.FC = () => {
  return (
    <section
      className={styles.partnerSection}
      aria-label="Banners de Parceiros"
    >
      <div className="container">
        <div className={styles.bannersGrid}>
          <div
            className={styles.partnerCard}
            style={{ backgroundImage: `url(${partnerBgImg})` }}
          >
            <div className={styles.cardContent}>
              <h3 className={styles.title}>Parceiros</h3>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur
              </p>
              <button type="button" className={styles.actionButton}>
                Confira
              </button>
            </div>
          </div>

          <div
            className={styles.partnerCard}
            style={{ backgroundImage: `url(${partnerBgImg})` }}
          >
            <div className={styles.cardContent}>
              <h3 className={styles.title}>Parceiros</h3>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur
              </p>
              <button type="button" className={styles.actionButton}>
                Confira
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};