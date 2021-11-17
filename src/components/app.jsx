import React, { useEffect } from 'react';
import AppHeader from './app-header/index';
import BurgerConstructor from './burger-constructor';
import BurgerIngredients from './burger-ingredients';
import style from './app.module.css';
import { getItems } from '../services/actions/burgerIngredients';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div className={style.app}>
      <AppHeader/>
      <main className={style.main}>
        {
        <>
          <BurgerIngredients />
          <BurgerConstructor />
        </>
        }
      </main>
    </div>
  );
}

export default App;
