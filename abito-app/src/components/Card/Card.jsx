import './Card.css'

const Card = (props) => {
  const {
    id,
    title,
    price,
    address,
    time,
    img,
  } = props

  return (
    <>
      <a href="#!" className="content-main__item card-item">
        <div className="card-item__image">
          <img
            src={img}
            alt={`${id} товар`}
            loading="lazy"
          />
        </div>
        <div className="card-item__info">
          <h3 className="card-item__title">{title}</h3>
          <span className="card-item__price">{price}</span>
          <span className="card-item__desc">{address}</span>
          <span className="card-item__desc"><time dateTime="07-10T11:39">{time}</time></span>
        </div>
      </a>
    </>
  )
}

export default Card