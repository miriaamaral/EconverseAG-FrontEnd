import { Header } from './components/Header/header';
import { HeroBanner } from './components/HeroBanner/heroBanner';
import './styles/global.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroBanner />
      </main>
    </div>
  );
}

export default App;