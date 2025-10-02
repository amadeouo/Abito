import {Outlet} from "react-router-dom";
import Header from "../components/Header/Header";
import {useEffect, useState} from "react";
import cardArray from "../constants";

const Layout = () => {
  const [searchText, setSearchText] = useState('')
  const [products, setProducts] = useState([])

  const handleSearch = (event) => {
    setSearchText(event.target.value)
  }

  const handleSearchArray = () => {
    setProducts(cardArray.filter((p) => p.title.includes(searchText) || p.price.includes(searchText)))
  }

  useEffect(() => {
    setProducts(cardArray)
  }, [])


  return (
    <>
      <Header />
      <main>
        <section className="search">
          <div className="container">
            <div className="search-box">
              <input
                type="text"
                placeholder="Поиск по объявлениям"
                id="search_ads"
                value={searchText}
                onChange={handleSearch}
              />
              <button
                className="btn btn-outline search-button"
                type="submit"
                onClick={handleSearchArray}
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
        <Outlet context={{products}} />
      </main>
    </>
  )
}

export default Layout