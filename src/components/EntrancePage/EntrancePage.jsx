import PropTypes from 'prop-types';
import { useLocation } from 'react-router';

export default function EntrancePage({children, name, setIsError}){
  const { pathname } = useLocation();
  return(
    <>
      <section className="entrance">
        {/* логотип*/}
        <div className="entrance__header enter"> 
          <div className="enter__logo logo">
            <img src="" alt="" className="logo__image" />
            <p className="logo__caption"></p>
          </div>
          {/* выпадающий список */}
          <select name="" id="" className="enter__select select">
            <option value="" className="select__option option">
            </option>
            <option value="" className="select__option">
            </option>
          </select>
        </div>
        {/* секция регистрации*/}
        <div className="entrance__main">
          <h2 className="entrance__title">Welcome to PigChess</h2>
          <p className="entrance__caption">Welcome to PigChess {pathname === '/sign-up' ? 'Зарегистрируйтесь скорее!' : 'Давно Вас не видели!'}</p>
          <button className="entrance__google" type="button"></button>
          <p className="entrance__choose">Or</p>
          {children}
        </div>
      </section>
    </>
  )
}

EntrancePage.propTypes = {
    children: PropTypes.array
}