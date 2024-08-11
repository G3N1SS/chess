import { Link } from "react-router-dom";


export default function Footer({}){
  return(
    <footer className="footer">
      <div className="footer__right">

      </div>
      <div className="footer__left">
        <nav className="footer__nav">
          <Link to='/profile'>Профиль</Link>
          <Link to='/'>Главная</Link>
          <Link to='https://github.com/G3N1SS/chess'>ГитХаб</Link>
        </nav>
      </div>
    </footer>
  )
}