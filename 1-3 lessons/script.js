const cardWrapper = document.querySelector('.content-main__list')
const searchInput = document.querySelector('.search-box input')
const searchBtn = document.querySelector('.search-button')

const cardArray = [
  {
    id: 1,
    title: 'Первый товар',
    price: '170 ₽',
    address: 'Казань, р-н Вахитовский',
    time: '10 июля 11:39',
    img: '/images/card-image.jpg',
  },
  {
    id: 2,
    title: 'Второй товар',
    price: '171 ₽',
    address: 'Казань, р-н Вахитовский',
    time: '10 июля 11:39',
    img: '/images/card-image.jpg',
  },
  {
    id: 3,
    title: 'Третий товар',
    price: '172 ₽',
    address: 'Казань, р-н Вахитовский',
    time: '10 июля 11:39',
    img: '/images/card-image.jpg',
  },
  {
    id: 4,
    title: 'Четвертый товар',
    price: '173 ₽',
    address: 'Казань, р-н Вахитовский',
    time: '10 июля 11:39',
    img: '/images/card-image.jpg',
  },
  {
    id: 5,
    title: 'Пятый товар',
    price: '174 ₽',
    address: 'Казань, р-н Вахитовский',
    time: '10 июля 11:39',
    img: '/images/card-image.jpg',
  },
  {
    id: 6,
    title: 'Шестой товар',
    price: '175 ₽',
    address: 'Казань, р-н Вахитовский',
    time: '10 июля 11:39',
    img: '/images/card-image.jpg',
  },
]

const render = (cardList) => {
  cardWrapper.innerHTML = ''

  cardList.forEach((item, idx) => {
    cardWrapper.insertAdjacentHTML('beforeend', `
     <a href="product.html" class="content-main__item card-item">
        <div class="card-item__image">
          <img
            src="${item.img}"
            alt="${item.title}"
            loading="lazy"
          />
        </div>
        <div class="card-item__info">
          <h3 class="card-item__title">${item.title}</h3>
          <span class="card-item__price">${item.price}</span>
          <span class="card-item__desc">${item.address}</span>
          <span class="card-item__desc"><time datetime="07-10T11:39">${item.time}</time></span>
        </div>
     </a>
    `)
  })
}

const filteredArray = (array, value) => {
  return array.filter((item) => {
    return item.title.includes(value) || item.price.includes(value)
  })
}

cardWrapper.style.justifyContent = 'flex-start'
cardWrapper.style.gap = '30px'

searchBtn.addEventListener('click', () => {
  render(filteredArray(cardArray, searchInput.value))
})


