import React from 'react';
import AppHeader from './components/AppHeader/index';
import BurgerConstructor from './components/BurgerConstructor';
import BurgerIngredients from './components/BurgerIngredients';
import './App.css';
import { data } from './utils/data';

function App() {
  return (
    <div className="app">
      <AppHeader />
      <div style={{display: 'flex', height: 'calc(100vh - 85px)', 'max-width': '1240px', margin: '0 auto'}}>
        <BurgerIngredients data={data} />
        <BurgerConstructor bun={data.find(x => x.type === 'bun')} mains={data.filter(x => x.type !== 'bun')} />
      </div>
    </div>
  );
}

export default App;
