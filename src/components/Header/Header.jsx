import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Header({loggedIn}){
  return(
    <header className="header">
      <img src="" alt="" className="header__logo" />
      <div className="header__account account">
        <button className="account__btn">
          <img src="" alt="" className="account__btn-img" />
          <p className="account__btn-text">Аккаунт</p>
        </button>
      </div>
      <h1>Hello</h1>
      <Link to="/sign-up">регистрация </Link>
      <Link to="/sign-in">логин </Link>
      <Link to='chess'>шахматы</Link>
    </header>
  )
}

Header.propTypes = {
    loggedIn: PropTypes.bool
}