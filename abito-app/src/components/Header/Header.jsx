import './Header.css'

const Header = () => {
  return (<header className="header">
      <div className="container">
        <div className="header-box">
          <a
            href="index.html"
            className="header-logo"
          >
            <img
              src="/1-3 lessons/images/logo.svg"
              alt="logo"
              width="27px"
              height="27px"
            />
            <span className="logo-text">Abito</span>
          </a>
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