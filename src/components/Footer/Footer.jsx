import { Link } from "react-router-dom";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__left">
          <nav className="footer__nav">
            <Link to="/profile" className="footer__nav-link">
              Профиль
            </Link>
            <Link to="/" className="footer__nav-link">
              Главная
            </Link>
            <Link
              to="https://github.com/G3N1SS/chess"
              className="footer__nav-link"
            >
              ГитХаб
            </Link>
          </nav>
        </div>
        <div className="footer__right">
          <h3 className="footer__right-title">Создатели</h3>
          <a
            target="_blank"
            href="https://github.com/G3N1SS"
            className="footer__right-text"
          >
            Арег Саркисян (Full-stack)
          </a>
          <a
            target="_blank"
            href="https://github.com/DuckHacker-0xD"
            className="footer__right-text"
          >
            Даниил Сидоров (Frontend)
          </a>
          <a target="_blank" href="#" className="footer__right-text">
            Павлуша (Красил кнопки)
          </a>
        </div>
      </div>
    </footer>
  );
}
