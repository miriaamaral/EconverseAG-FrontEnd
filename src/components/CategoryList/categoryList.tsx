import React from 'react';
import styles from './CategoryList.module.scss';

import tecnologiaIcon from '../../assets/icons/tecnologia.png';
import supermercadoIcon from '../../assets/icons/supermercado.png';
import bebidasIcon from '../../assets/icons/bebidas.png';
import ferramentasIcon from '../../assets/icons/ferramentas.png';
import saudeIcon from '../../assets/icons/saude.png';
import esportesIcon from '../../assets/icons/esportes.png';
import modaIcon from '../../assets/icons/moda.png';

interface CategoryItem {
  id: string;
  name: string;
  icon: string;
  isActive?: boolean;
}

const CATEGORIES: CategoryItem[] = [
  { id: 'tech', name: 'Tecnologia', icon: tecnologiaIcon, isActive: true },
  { id: 'super', name: 'Supermercado', icon: supermercadoIcon },
  { id: 'drink', name: 'Bebidas', icon: bebidasIcon },
  { id: 'tools', name: 'Ferramentas', icon: ferramentasIcon },
  { id: 'health', name: 'Saúde', icon: saudeIcon },
  { id: 'sports', name: 'Esportes e Fitness', icon: esportesIcon },
  { id: 'fashion', name: 'Moda', icon: modaIcon },
];

export const CategoryList: React.FC = () => {
  return (
    <section className={styles.categorySection} aria-label="Categorias de produtos">
      <div className="container">
        <ul className={styles.categoryList}>
          {CATEGORIES.map((category) => (
            <li key={category.id}>
              <button
                type="button"
                className={`${styles.categoryCard} ${category.isActive ? styles.active : ''}`}
              >
                <div className={styles.iconBox}>
                  <img src={category.icon} alt={category.name} />
                </div>
                <span className={styles.categoryName}>{category.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};