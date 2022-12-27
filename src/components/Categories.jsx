import React, { useState } from 'react'

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0)

  const categories = ['All' ,'Meat' ,'Vegetable','Grilled','Spicy' ,'Unavailable']

  
  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li onClick={() => setActiveIndex(i)} className={activeIndex === i ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories