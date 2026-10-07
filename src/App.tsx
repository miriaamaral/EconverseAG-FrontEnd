import { Header } from './components/Header/header';
import { HeroBanner } from './components/HeroBanner/heroBanner';
import { CategoryList } from './components/CategoryList/categoryList';
import './styles/global.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroBanner />
        <CategoryList />
      </main>
    </div>
  );
}

export default App;