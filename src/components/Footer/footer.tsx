import React, { useState } from "react";
import styles from "./footer.module.scss";
import logoImg from "../../assets/img/logo.png";
import instagramIcon from "../../assets/icons/instagram.png";
import facebookIcon from "../../assets/icons/facebook.png";
import linkedinIcon from "../../assets/icons/linkedin.png";

export const Footer: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [termos, setTermos] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && nome && termos) {
      alert(`Obrigado, ${nome}! Você se inscreveu com o e-mail: ${email}`);
      setNome("");
      setEmail("");
      setTermos(false);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.newsletterBar}>
        <div className={`container ${styles.newsletterContainer}`}>
          <div className={styles.newsletterText}>
            <h3>Inscreva-se na nossa newsletter</h3>
            <p>
              Assine a nossa newsletter e receba as novidades e conteúdos
              exclusivos da Econverse.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
            <div className={styles.inputsRow}>
              <input
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">INSCREVER</button>
            </div>

            <div className={styles.checkboxRow}>
              <input
                type="checkbox"
                id="termos"
                checked={termos}
                onChange={(e) => setTermos(e.target.checked)}
                required
              />
              <label htmlFor="termos">Aceito os termos e condições</label>
            </div>
          </form>
        </div>
      </div>

      <div className={styles.mainFooter}>
        <div className={`container ${styles.mainContainer}`}>
          <div className={styles.brandCol}>
            <img
              src={logoImg}
              alt="Econverse Logo"
              className={styles.footerLogo}
            />
            <p className={styles.brandDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className={styles.socialIcons}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
            </div>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Institucional</h4>
            <ul>
              <li>
                <a href="#sobre">Sobre Nós</a>
              </li>
              <li>
                <a href="#movimento">Movimento</a>
              </li>
              <li>
                <a href="#trabalhe">Trabalhe Conosco</a>
              </li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Ajuda</h4>
            <ul>
              <li>
                <a href="#suporte">Suporte</a>
              </li>
              <li>
                <a href="#fale">Fale Conosco</a>
              </li>
              <li>
                <a href="#faq">Perguntas Frequentes</a>
              </li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Termos</h4>
            <ul>
              <li>
                <a href="#termos">Termos e Condições</a>
              </li>
              <li>
                <a href="#privacidade">Política de Privacidade</a>
              </li>
              <li>
                <a href="#trocas">Trocas e Devoluções</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className="container">
          <p className={styles.copyrightText}>
            Copyright © 2026. Todos os direitos reservados. Econverse & Miriã
            Amaral.
          </p>
        </div>
      </div>
    </footer>
  );
};
