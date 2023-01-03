import React, { useState, useEffect } from 'react'
import Categories from './components/Categories'
import Header from './components/Header'
import PizzaBlock from './components/PizzaBlock'
import Sceleton from './components/PizzaBlock/Sceleton'
import Sort from './components/Sort'
import './scss/app.scss'


function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsloading] = useState(true)

  useEffect(() => {
    fetch('https://63addb98ceaabafcf16e07a0.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr) //render pizza
        setIsloading(false) // loading done
      })
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">All pizzas</h2>
          <div className="content__items">
            {isLoading
              ? [...new Array(6)].map((_, index) => <Sceleton key={index} />)        // fake Array for rendering Sceleton
              : items.map((obj) =>
                <PizzaBlock key={obj.id} {...obj} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
