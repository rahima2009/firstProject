import { Header } from "../components/header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { Cart } from "./cart";
import { useState } from "react";
import {products} from '../data/products.json'
import { category } from "../components/category";

export const Back = () => {
  const [data, setData] = useState(products)
console.log(data);


const categoryClick = (text) =>{
  const newList = products.filter((elem) => elem.category ===text )
  setData([...newList])
  
 
}

  
  return (
    <div>
      <Header category={category} categoryClick={categoryClick}/>
      <Routes>
        <Route path="/" element={<Home  data={data}/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

