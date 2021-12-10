import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import style from './style.module.css';

import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import LoginLink from '../../components/login-link';

const ForgotPasswordPage = () => {
  const [successRequest, setSuccessRequest] = useState(false);
  const [email, setEmail] = useState('');

  const onChange = setValue => e => {
    setValue(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    fetch('https://norma.nomoreparties.space/api/password-reset', {
      method: 'POST',
      body: {
        email
      }
    })
    .then(resp => {
      return resp.json();
    })
    .then(data => {
      if (data.success === true) {
        setSuccessRequest(true);
      }
    })
  }

  if (successRequest) {
    return <Redirect to="/reset-password" />
  }

  return (
    <div className={`${style.wrapper}`}>
      <div className="text text_type_main-medium mt-6">Восстановление пароля</div>
      <div className="mt-6">
        <Input
          type="email"
          placeholder="Укажите e-mail"
          onChange={onChange(setEmail)}
          value={email}
          name={'email'}
        />
      </div>
      <div className="mt-6">
        <Button type="primary" size="medium" onClick={handleSubmit}>
          Восстановить
        </Button>
      </div>
      <div className="mt-20">
        <LoginLink text="Вспомнили пароль?" linkText="Войти" to="/login"/>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;