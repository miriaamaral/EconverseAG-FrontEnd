import { Header } from './components/Header/header';
import './styles/global.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="container" style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h2>O header da Econverse está no ar!</h2>
        <p style={{ color: '#808080', marginTop: '10px' }}>
          Próximo passo: HeroBanner e Lista de Categorias.
        </p>
      </main>
    </div>
  );
}

export default App;