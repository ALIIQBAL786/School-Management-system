import {useState,useEffect} from "react";
import ProductList from "./productlist";
import useFetch from "./usefetch";
const Home = () => {
    const {products,isPending,error}=useFetch('http://localhost:8000/products');
    
}
 
export default Home;