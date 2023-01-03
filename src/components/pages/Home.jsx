import React, { useState, useEffect } from 'react'

import Sceleton from '../PizzaBlock/Sceleton'
import Sort from '../Sort'
import Categories from '../Categories'
import PizzaBlock from '../PizzaBlock'


const Home = () => {
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
        <>
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
        </>
    )
}

export default Home