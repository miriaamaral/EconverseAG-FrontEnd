import React from 'react';
import styles from './BrandShowcase.module.scss';
import brandLogo from '../../assets/img/logo.png';

const BRANDS = [1, 2, 3, 4, 5];

export const BrandShowcase: React.FC = () => {
  return (
    <section className={styles.brandSection} aria-label="Navegue por marcas">
      <div className="container">
        <h2 className={styles.title}>Navegue por marcas</h2>
        
        <ul className={styles.brandList}>
          {BRANDS.map((brand, index) => (
            <li key={index}>
              <div className={styles.brandCircle}>
                <img src={brandLogo} alt={`Marca parceira ${brand}`} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};