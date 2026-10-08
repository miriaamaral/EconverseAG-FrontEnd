# 🛒 Teste Técnico Front-End: Econverse (React + TypeScript)

Repositório dedicado ao desenvolvimento da Landing Page **e-commerce da Econverse**, como parte do processo seletivo para a vaga de Desenvolvedora Front-End.

Aqui, construi uma aplicação web, **responsiva e de alta performance, consumindo a API oficial de produtos e aplicando conceitos avançados de arquitetura de componentes, tipagem estrita com TypeScript, SCSS modular e acessibilidade.**.

---

## 🎥 Veja o Projeto em Ação!

Que tal dar uma olhada no projeto rodando ao vivo?
👉 [Desafio Econverse Front-End no ar (Vercel)](https://econverse-ag-front-end.vercel.app/)

<br>
<div align="center">
    <img src="src/assets/screenshots/desktop-preview.png" alt="Preview da Landing Page Econverse no Desktop" width="800" style="border-radius: 8px; margin-bottom: 10px;">
    <img src="src/assets/screenshots/tablet-preview.png" alt="Preview da Responsividade no Tablet" width="400" style="border-radius: 8px; margin: 5px;">
    <img src="src/assets/screenshots/mobile-preview.png" alt="Preview da Responsividade no mobile" width="200" style="border-radius: 8px; margin: 5px;">
</div>
<br>

---

## 💡 Funcionalidades Destaque

* **Consumo Real da API de Produtos:** Integração assíncrona consumindo o catálogo de produtos da Econverse com tratamento completo de estados de carregamento (`loading`) e erros via Custom Hook.

* **Vitrine Dinâmica & Carrossel Nativo:** Navegação deslizante suave com setas customizadas do Figma, permitindo alternar abas de categorias e visualizar exatamente 4 cards inteiros por linha sem cortes de layout.

* **Modal de Detalhes do Produto (`ProductModal`):** Interface interativa que exibe foto, valor formatado em `R$`, descrição curta do produto, seletor numérico de quantidade (`- 01 +`) e suporte total a acessibilidade (fechamento via tecla `ESC` ou clique no overlay semitransparente).

* **Newsletter & Rodapé Estruturado:** Formato de inscrição com validação de campos (Nome, E-mail e Checkbox de termos) e rodapé organizado em 3 faixas horizontais com redes sociais e links institucionais.

* **Design Responsivo:** Otimizado e adaptado para visualização em qualquer dispositivo, do desktop ao mobile.

---

## 🛠 Tecnologias Utilizadas

* **React 18 & Vite:** Estrutura de Single Page Application (SPA) leve, moderna e de alto desempenho.

* **TypeScript:** Tipagem estrita de contratos de dados (`Product`, `ProductsApiResponse`), garantindo previsibilidade e prevenindo erros de execução.

* **SCSS (Sass Modules):** Estilização modularizada com Sass, utilizando variáveis globais (`$color-blue-primary`, `$font-primary`), mixins flexíveis e CSS Modules para isolamento de escopo.

* **Vite Dev Proxy:** Configuração de servidor proxy interno em `vite.config.ts` para contornar restrições de CORS em ambiente de desenvolvimento local.

* **Git & GitHub:** Controle de versão rigoroso aplicando convenções de *Conventional Commits* e histórico de branches organizado.

---

## 🎯 Checklist de Requisitos do Teste Econverse

- [x] **React + TypeScript:** Desenvolvido com componentes funcionais e tipagem estrita de objetos.

- [x] **Consumo de API JSON:** Dados dinâmicos carregados via Custom Hook `useProducts`.

- [x] **Modal Interativo:** Pop-up de detalhes com preço formatado e seletor numérico de quantidade ao clicar em "Comprar" ou no card.

- [x] **Pré-processador SCSS:** Uso completo de SCSS sem vazamento de escopo visual.

- [x] **Pixel-Perfect do Figma:** Respeitadas cores, fontes, alinhamento à esquerda, botões e setas personalizadas em vetores.

- [x] **Sem Bibliotecas de UI:** Zero uso de Bootstrap, Tailwind ou bibliotecas de componentes prontas — carrossel e modal desenvolvidos do zero com React e SCSS nativos.

- [x] **Boas Práticas de SEO & HTML Semântico (Ponto Extra):** Estruturação com `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, além de atributos `alt` e hierarquia correta de headings (`h1`-`h3`).

---

## 🧠 Decisões Técnicas & Arquiteturais

* **Parametrização do `ProductShowcase` (Princípio DRY):** Para evitar duplicação de código ao longo das 3 vitrines da página, o componente foi configurado com props opcionais (`showTabs` e `showSeeAll`), permitindo reuso inteligente da estrutura e do carrossel.

* **Isolamento de Lógica com Custom Hook (`useProducts`):** Toda a regra de requisição HTTP, gerenciamento de estados (`loading`, `error`) e manipulação do retorno da API foram abstraídos do visual e centralizados no hook customizado.

* **Configuração de Proxy para Solução de CORS:** Para solucionar o bloqueio de política *Same-Origin* do navegador ao chamar a API em desenvolvimento local, foi implementada a reescrita de rotas com proxy no Vite (`/api-econverse`).

* **Design Acessível e Defensivo no Modal:** O modal inclui `stopPropagation` no container central para evitar fechamento acidental ao interagir com a tela, além de listener de teclado global para a tecla `Escape`.

---

## ⚙️ Como Rodar o Projeto (Localmente)

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/miriaamaral/EconverseAG-FrontEnd.git
   ```
2. **Acesse a pasta do projeto:**
   ```bash
   cd EconverseAG-FrontEnd
   ```
3. **Instale as dependências:**
   ```bash
   npm install
   ```
4. **Execute o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
5. **Acesse no seu navegador:** http://localhost:5173


---

## ✉️ Contato

Vamos nos conectar e construir algo incrível juntos!

* **LinkedIn:** [Miriã Amaral](https://www.linkedin.com/in/miriaamaralcs)
* **GitHub:** [miriaamaral](https://github.com/miriaamaral)
* **Email:** [miriaamaralcs@gmail.com](mailto:miriaamaralcs@gmail.com)
* **Discord:** [miriaamaralcustodiosantos](https://discord.com/channels/miriaamaralcustodiosantos)

---

<p align="center">Feito com ❤️ por Miriã Amaral</p> 
