import React, { useState, useEffect } from 'react';
import AppHeader from './app-header/index';
import BurgerConstructor from './burger-constructor';
import BurgerIngredients from './burger-ingredients';
import style from './app.module.css';

function App() {
  const DATA_URL = 'https://norma.nomoreparties.space/api/ingredients';
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(DATA_URL)
    .then(resp => resp.json())
    .then(data => setData(data.data))
    .catch(err => {
      console.log(err);
      setData(null);
    });
  }, []);

  return (
    <div className={style.app}>
      <AppHeader/>
      <main className={style.main}>
        { data &&
        <>
          <BurgerIngredients data={data}/>
          <BurgerConstructor bun={data.find(x => x.type === 'bun')} mains={data.filter(x => x.type !== 'bun')}/>
        </>
        }
      </main>
    </div>
  );
}

export default App;
