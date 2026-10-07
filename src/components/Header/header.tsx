import React from 'react';
import styles from './Header.module.scss';

import logoImg from '../../assets/img/logo.png';
import seloIcon from '../../assets/icons/selo-verificacao.png';
import entregasIcon from '../../assets/icons/entregas.png';
import cartaoIcon from '../../assets/icons/cartao-credito.png';
import lupaIcon from '../../assets/icons/lupa.png';
import pedidosIcon from '../../assets/icons/pedidos.png';
import coracaoIcon from '../../assets/icons/coracao.png';
import usuarioIcon from '../../assets/icons/usuario.png';
import carrinhoIcon from '../../assets/icons/carrinho-compras.png';
import coroaIcon from '../../assets/icons/coroa-simples.png';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      {/* 1. Top Bar de Benefícios */}
      <div className={styles.topBar}>
        <div className="container">
          <div className={styles.topBarContent}>
            <div className={styles.benefitItem}>
              <img src={seloIcon} alt="" aria-hidden="true" className={styles.iconSm} />
              <p>Compra <strong>100% segura</strong></p>
            </div>
            <div className={styles.benefitItem}>
              <img src={entregasIcon} alt="" aria-hidden="true" className={styles.iconSm} />
              <p><strong>Frete grátis</strong> acima de R\$ 200</p>
            </div>
            <div className={styles.benefitItem}>
              <img src={cartaoIcon} alt="" aria-hidden="true" className={styles.iconSm} />
              <p><strong>Parcele</strong> suas compras</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Conteúdo Principal do Header */}
      <div className={styles.mainHeader}>
        <div className="container">
          <div className={styles.mainContent}>
            {/* Logo Oficial Econverse */}
            <a href="/" className={styles.logo} aria-label="Econverse Home">
              <img src={logoImg} alt="Econverse" />
            </a>

            {/* Barra de Pesquisa */}
            <div className={styles.searchBar}>
              <input
                type="text"
                placeholder="O que você está procurando?"
                aria-label="Campo de busca de produtos"
              />
              <button type="button" className={styles.searchButton} aria-label="Buscar">
                <img src={lupaIcon} alt="Buscar" />
              </button>
            </div>

            {/* Ícones de Ação do Usuário */}
            <div className={styles.actions}>
              <button type="button" className={styles.actionButton} title="Meus Pedidos" aria-label="Meus Pedidos">
                <img src={pedidosIcon} alt="" aria-hidden="true" />
              </button>
              <button type="button" className={styles.actionButton} title="Favoritos" aria-label="Favoritos">
                <img src={coracaoIcon} alt="" aria-hidden="true" />
              </button>
              <button type="button" className={styles.actionButton} title="Minha Conta" aria-label="Minha Conta">
                <img src={usuarioIcon} alt="" aria-hidden="true" />
              </button>
              <button type="button" className={styles.actionButton} title="Carrinho de Compras" aria-label="Carrinho de Compras">
                <img src={carrinhoIcon} alt="" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Menu de Navegação por Categorias */}
      <nav className={styles.navigation} aria-label="Navegação por Categorias">
        <div className="container">
          <ul className={styles.navList}>
            <li>
              <a href="#todas" className={styles.navLink}>
                TODAS CATEGORIAS
              </a>
            </li>
            <li>
              <a href="#supermercado" className={styles.navLink}>
                SUPERMERCADO
              </a>
            </li>
            <li>
              <a href="#livros" className={styles.navLink}>
                LIVROS
              </a>
            </li>
            <li>
              <a href="#moda" className={styles.navLink}>
                MODA
              </a>
            </li>
            <li>
              <a href="#lancamentos" className={styles.navLink}>
                LANÇAMENTOS
              </a>
            </li>
            <li>
              <a href="#ofertas" className={`${styles.navLink} ${styles.highlight}`}>
                OFERTAS DO DIA
              </a>
            </li>
            <li>
              <a href="#assinatura" className={styles.navLink}>
                <img src={coroaIcon} alt="" aria-hidden="true" className={styles.crownIcon} />
                ASSINATURA
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};