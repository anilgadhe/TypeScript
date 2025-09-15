import { useEffect, useState } from "react"
import type { ProductContract } from "../contracts/ProductContract"

import axios from "axios";
import { Navbar } from "./Navbar";

export function DataBinding() {

    const [categories, setCategories] = useState<String[]>();

    const [products, setProducts] = useState<ProductContract[]>();

    function getCategory() {

        axios.get(`https://fakestoreapi.com/products/categories`).then((res) => {
            setCategories(res.data);
        })
    }
    
    interface Iproduct{
        Name:string;
    }

    function getProduct() {

        axios.get(`https://fakestoreapi.com/products`).then((res) => {
            setProducts(res.data);
        })
    }

    function handleClick(e:any, product:Iproduct){
          alert(`Clicked ${e.target.name} \n ${e.clientX} \n${product.Name} `);
    }

    useEffect(() => {
        getCategory();
        getProduct()
    }, [])

    return (
        <div>
            <Navbar brand="Fakestore" items={["Home","About","Contact"]}/>
            <h2>Select Category</h2>

            <button onClick={((event)=>handleClick(event,{Name:'TV'}))}>Click me!</button>
            <select>
                {categories?.map((category, i) => (
                    <option key={i} >{category}</option>
                ))}
            </select>

            <div>
                <ul>
                    {

                        products?.map((product,i )=> <li key={i}> <img src={product.image} width="50" height="50"/> {product.title} </li>)

                    }
                </ul>
            </div>
        </div>
    )

}