import React from 'react';
import BurgerConstructor from '../components/burger-constructor';
import BurgerIngredients from '../components/burger-ingredients';

const IngredientPagePage = () => {
  return (
    <>
      <BurgerIngredients />
      <BurgerConstructor />
    </>
  );
}

export default IngredientPagePage;