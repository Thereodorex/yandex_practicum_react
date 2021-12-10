import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppHeader from './components/app-header/index';
import style from './app.module.css';
import { getItems } from './services/actions/burgerIngredients';
import { useDispatch } from 'react-redux';
import { BurgerPage, LoginPage, RegisterPage, ForgotPasswordPage, ResetPasswordPage, ProfilePage, IngredientPage, NotFound404 } from './pages';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div className={style.app}>
      <AppHeader/>
      <main className={style.main}>
        <Router>
          <Switch>
            <Route path="/" exact={true}>
              <BurgerPage />
            </Route>
            <Route path="/login" exact={true}>
              <LoginPage />
            </Route>
            <Route path="/register" exact={true}>
              <RegisterPage />
            </Route>
            <Route path="/forgot-password" exact={true}>
              <ForgotPasswordPage />
            </Route>
            <Route path="/reset-password" exact={true}>
              <ResetPasswordPage />
            </Route>
            <Route path="/profile" exact={true}>
              <ProfilePage />
            </Route>
            <Route path={`/ingredients/:id`} exact={true}>
              <IngredientPage />
            </Route>
            <Route>
              <NotFound404 />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
