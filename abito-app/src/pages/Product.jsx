import {useOutletContext, useParams} from "react-router-dom";

const Product = () => {
  const { id } = useParams()
  const {products} = useOutletContext()
  const findProduct = products.find((product) => product.id === +id)

  return (
    <section className="content">
      <div className="container">
        {findProduct
          ? <div className="content-box">
            <div className="content-product">
              <div className="content-product__left prod-left">
                <h2 className="prod-left__title">{findProduct.title}</h2>
                <div className="prod-left__image">
                  <img
                    src={findProduct.img}
                    alt=""
                  />
                </div>
                <p className="prod-left__desc">
                  {findProduct.desc}
                </p>
              </div>
              <div className="content-product__right prod-right">
                <h2 className="prod-right__price">{findProduct.price}</h2>
                <button className="prod-right__button btn btn-primary">Показать телефон</button>
              </div>
            </div>
            <div className="content-side">
              <h3 className="content-side__title">Сервисы и услуги</h3>
              <div className="content-side__benefits-list">
                <div className="content-side__benefits-item benefits">
                  <div className="benefits__img">
                    <img
                      src="/images/delivery-truck.svg"
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
                      src="/images/car.svg"
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
                      src="/images/home.svg"
                      alt="home"
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
                >Обработка данных
                </a>
              </footer>
            </div>
          </div>
          : <h2>Такой товар не найден</h2>}
      </div>
    </section>
  )
}

export default Product