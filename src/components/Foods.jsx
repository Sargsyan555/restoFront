import React, { useEffect, useState } from "react";
import "./Foods.css"
const foodTypes = {
    pizza: [
      { name: "Margherita", price: 10, url: "https://www.allrecipes.com/thmb/pENwa46VDqWGvYkycgTqHxr4xfo=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/48727-Mikes-homemade-pizza-DDMFS-beauty-4x3-BG-2974-a7a9842c14e34ca699f3b7d7143256cf.jpg"},
      { name: "Pepperoni", price: 12, url: "https://www.allrecipes.com/thmb/pENwa46VDqWGvYkycgTqHxr4xfo=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/48727-Mikes-homemade-pizza-DDMFS-beauty-4x3-BG-2974-a7a9842c14e34ca699f3b7d7143256cf.jpg" },
      { name: "Hawaiian", price: 11, url: "https://www.allrecipes.com/thmb/pENwa46VDqWGvYkycgTqHxr4xfo=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/48727-Mikes-homemade-pizza-DDMFS-beauty-4x3-BG-2974-a7a9842c14e34ca699f3b7d7143256cf.jpg" }
    ],
    salads: [
      { name: "Caesar Salad", price: 8, url:  "https://www.bama.no/siteassets/fotoware/2022/6/gf_gresksalat.jpg?width=750&height=750&mode=crop"},
      { name: "Greek Salad", price: 9, url:  "https://www.bama.no/siteassets/fotoware/2022/6/gf_gresksalat.jpg?width=750&height=750&mode=crop"},
      { name: "Cobb Salad", price: 10, url: "https://www.bama.no/siteassets/fotoware/2022/6/gf_gresksalat.jpg?width=750&height=750&mode=crop"}
    ],
    soups: [
      { name: "Tomato Soup", price: 6, url: "https://t3.ftcdn.net/jpg/02/45/00/72/360_F_245007231_vDwC9ceDNtjUCA5YDuq6mPDRG5ocPg0B.jpg" },
      { name: "Chicken Noodle Soup", price: 7, url: "https://t3.ftcdn.net/jpg/02/45/00/72/360_F_245007231_vDwC9ceDNtjUCA5YDuq6mPDRG5ocPg0B.jpg" },
      { name: "Minestrone", price: 6, url: "https://t3.ftcdn.net/jpg/02/45/00/72/360_F_245007231_vDwC9ceDNtjUCA5YDuq6mPDRG5ocPg0B.jpg" }
    ],
    desserts: [
      { name: "Chocolate Cake", price: 5, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9sHwej3teQk6wK7LSt6N1R2BtaF6w5sbJqY4EEFM7lQ&s" },
      { name: "Cheesecake", price: 6, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9sHwej3teQk6wK7LSt6N1R2BtaF6w5sbJqY4EEFM7lQ&s" },
      { name: "Apple Pie", price: 5, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9sHwej3teQk6wK7LSt6N1R2BtaF6w5sbJqY4EEFM7lQ&s" }
    ],
    drinks: [
      { name: "Cola", price: 2, url: "https://www.acouplecooks.com/wp-content/uploads/2021/06/Strawberry-Water-006.jpg" },
      { name: "Iced Tea", price: 3 , url: "https://www.acouplecooks.com/wp-content/uploads/2021/06/Strawberry-Water-006.jpg"},
      { name: "Lemonade", price: 3, url: "https://www.acouplecooks.com/wp-content/uploads/2021/06/Strawberry-Water-006.jpg" }
    ]
  };
  
export default function Foods({ selectedFood }) {
    const [filteredFoods, setFilteredFoods] = useState([]);


  useEffect(() => {
    if (selectedFood && foodTypes[selectedFood]) {
      const filtered = foodTypes[selectedFood];
      setFilteredFoods(filtered);
      console.log(filtered)
    }
  }, [selectedFood]);

  return (
    <div className="selectedFood">
      <h2>{selectedFood}</h2>
      <ul>
        {filteredFoods.map((food, index) => (
          <li key={index}>
            <img src="https://myplate-prod.azureedge.us/sites/default/files/styles/medium/public/2020-11/myplate-brand--labelled.png?itok=7VtFXcBC" alt="" />
            <div className="info">
              <h4>{food.name}</h4> 
              <p>price is - ${food.price} </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}