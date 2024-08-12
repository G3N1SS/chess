import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import './entrance.css'
import pig from '../../img/pig.png'
import logo from '../../img/logo.png'
import Form from '../Form/Form';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function EntrancePage({children, name, setIsError, onSubmit, isValid}){
  const { pathname } = useLocation();
  const [isRegister, setIsRegister] = useState(false);
  console.log(isRegister)
  return(
    <>
      <section className="entrance">
        {/* логотип*/}
        <div className={`container container_entrance ${isRegister === true && 'container_reversed'}`}>
          <div className={`entrance__left-wrapper ${isRegister === true  && 'entrance__left-wrapper_reversed'}`}>
            <div className="entrance__header enter"> 
              <div className="enter__logo logo">
                <img src={logo} alt="" className="logo__image" />
                <p className="logo__caption">PigChess</p>
              </div>
              {/* выпадающий список */}
              <select name="" id="" className="enter__select select">
                <option value="" className="select__option option">
                  En
                </option>
                <option value="" className="select__option">
                  Rus
                </option>
              </select>
            </div>
            {/* секция регистрации*/}
            <div className="entrance__main">
              <h2 className="entrance__title">Welcome to PigChess</h2>
              <p className="entrance__caption">{pathname === '/sign-up' ? 'Зарегистрируйтесь скорее!' : 'Давно Вас не видели!'}</p>
              <button className="entrance__google" type="button">Continue With Google</button>
              <p className="entrance__choose">Or</p>
              <Form
                name={name}
                titleButton={name === 'sign-up' ? 'Зарегистрироваться' : 'Войти'}
                isValid={isValid}
                setIsError={setIsError}
                onSubmit={onSubmit}
              >
                {children}
              </Form>
              {name === 'sign-up' ? 
                <div className='login__caption'>
                  <p className="login__caption-text">Уже зарегистрированы?</p>
                  <Link className="login__link link link_login" to="/sign-in" onClick={() => {setTimeout(setIsRegister(false), 500)}}>Войти</Link> 
                </div>
                : 
                <div className='login__caption'>
                  <p className="login__caption-text">Ещё не зарегистрированы?</p>
                  <Link className="login__link link link_login" to="/sign-up" onClick={() => {setTimeout(setIsRegister(true), 500)}}>Регистрация</Link> 
                </div>
                }
            </div>
          </div>
          <img src={pig} alt="" className={`entrance__pic ${isRegister === true && 'entrance__pic_reversed'}`} />
        </div>
      </section>
    </>
  )
}

EntrancePage.propTypes = {
    children: PropTypes.array
}