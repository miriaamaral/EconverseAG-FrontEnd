import React from 'react';
import styles from './HeroBanner.module.scss';

import heroBannerImg from '../../assets/img/hero-banner.jpeg';

export const HeroBanner: React.FC = () => {
  return (
    <section
      className={styles.heroSection}
      style={{ backgroundImage: `url(${heroBannerImg})` }}
      aria-label="Destaques e Promoções"
    >
      <div className={styles.overlay}>
        <div className="container">
          <div className={styles.content}>
            <h1 className={styles.title}>
              Venha conhecer nossas<br />
              promoções
            </h1>
            <p className={styles.subtitle}>
              <span className={styles.highlight}>50% Off</span> nos produtos
            </p>
            <a href="#vitrine" className={styles.ctaButton}>
              Ver produto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};