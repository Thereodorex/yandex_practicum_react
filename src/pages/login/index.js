import React, { useState } from 'react';
import style from './style.module.css';

import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import LoginLink from '../../components/login-link';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChange = setValue => e => {
    setValue(e.target.value);
  }

  return (
    <div className={`${style.wrapper}`}>
      <div className="text text_type_main-medium mt-6">Вход</div>
      <div className="mt-6">
        <Input
          type="email"
          placeholder="E-mail"
          onChange={onChange(setEmail)}
          value={email}
          name={'email'}
        />
      </div>
      <div className="mt-6">
        <PasswordInput
          className="mt-6"
          onChange={onChange(setPassword)}
          value={password}
          name={'password'}
        />
      </div>
      <div className="mt-6">
        <Button type="primary" size="medium">
          Войти
        </Button>
      </div>
      <div className="mt-20">
        <LoginLink text="Вы — новый пользователь?" linkText="Зарегистрироваться" to="/register"/>
        <LoginLink text="Забыли пароль?" linkText="Восстановить пароль" to="/forgot-password"/>
      </div>
    </div>
  );
}

export default LoginPage;