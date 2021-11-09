import React, { useState, useEffect } from 'react';
import AppHeader from './app-header/index';
import BurgerConstructor from './burger-constructor';
import BurgerIngredients from './burger-ingredients';
import style from './app.module.css';
import { getItems } from '../services/actions/burgerIngredients';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const data = useSelector(store => store.burgerIngredients.items);

  useEffect(() => {
    dispatch(getItems());
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
