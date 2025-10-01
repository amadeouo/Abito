import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import cardArray from "../constants";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="search">
          <div className="container">
            <div className="search-box">
              <input
                type="text"
                placeholder="Поиск по объявлениям"
                id="search_ads"
              />
              <button
                className="btn btn-outline search-button"
                type="submit"
              >
                <img
                  className="search-button__icon"
                  src="/1-3 lessons/images/search.svg"
                  alt="search"
                  aria-label="search"
                  title="search"
                  width="15"
                  height="15"
                />
                <span className="search-button__text">Найти</span>
              </button>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container">
            <div className="content-box">
              <div className="content-main">
                <h2 className="content-main__title">Рекомендации для вас</h2>
                <div className="content-main__list">
                  {
                    cardArray.map(card => (
                      <Card
                        key={card.id}
                        title={card.title}
                        price={card.price}
                        address={card.address}
                        time={card.time}
                        img={card.img}
                      />
                    ))
                  }
                </div>
              </div>
              <div className="content-side">
                <h3 className="content-side__title">Сервисы и услуги</h3>
                <div className="content-side__benefits-list">
                  <div className="content-side__benefits-item benefits">
                    <div className="benefits__img">
                      <img
                        src="/1-3 lessons/images/delivery-truck.svg"
                        alt="truck"
                        width="30"
                        height="30"
                      />
                    </div>
                    <h4 className="benefits__title">Доставка</h4>
                    <p className="benefits__desc">Проверка при получении и возможность бесплатно вернуть товар</p>
                  </div>
                  <div className="content-side__benefits-item benefits">
                    <div className="benefits__img">
                      <img
                        src="/1-3 lessons/images/car.svg"
                        alt="car"
                        width="30"
                        height="30"
                      />
                    </div>
                    <h4 className="benefits__title">Автотека</h4>
                    <p className="benefits__desc">Отчёт с историей авто: пробег, владельцы, сведения о залоге, ДТП и ремонтах</p>
                  </div>
                  <div className="content-side__benefits-item benefits">
                    <div className="benefits__img">
                      <img
                        src="/1-3 lessons/images/home.svg"
                        alt="car"
                        width="30"
                        height="30"
                      />
                    </div>
                    <h4 className="benefits__title">Онлайн-бронирование жилья</h4>
                    <p className="benefits__desc">Посуточная аренда квартир и домов: большой выбор вариантов для поездок по России</p>
                  </div>
                </div>
                <hr className="content-side__line" />
                  <footer className="content-side__footer footer">
                    <p className="footer__company-info">© ООО «Абито», 2011–2021</p>
                    <a
                      className="footer__privacy"
                      href="#!"
                    >Политика конфиденциальности
                    </a>
                    <a
                      className="footer__privacy"
                      href="#!"
                    >
                      Обработка данных
                    </a>
                  </footer>
              </div>
            </div>
          </div>
        </section>
      </main>
  </div>
)
}

export default Home