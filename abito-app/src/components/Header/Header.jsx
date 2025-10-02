import './Header.css'
import {Link} from "react-router-dom"

const Header = () => {
  return (<header className="header">
      <div className="container">
        <div className="header-box">
          <Link
            to={'/'}
            className="header-logo"
          >
            <img
              src="/images/logo.svg"
              alt="logo"
              width="27px"
              height="27px"
            />
            <span className="logo-text">Abito</span>
          </Link>
          <div className="header-controls">
            <button className="btn btn-outline">Вход и регистрация</button>
            <button className="btn btn-primary">Подать объявление</button>
          </div>

          <div className="burger-button">
            <img
              src="/1-3 lessons/images/burger-button.svg"
              alt="menu"
              aria-label="Меню"
              title="Меню"
            />
          </div>
        </div>
      </div>
    </header>)
}

export default Header