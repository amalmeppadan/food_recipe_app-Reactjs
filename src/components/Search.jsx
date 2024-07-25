import styles from "./search.module.css"
import { useEffect, useState } from "react";

export default function Search({foodData,setFooddata}){
    const[query,setQuery]=useState("");
    const URL = "https://api.spoonacular.com/recipes/complexSearch";
    const API_KEY= "b2dd184899fe4e6b8b1781a2b90df570";
    useEffect(()=>{
        async function fetchData(){

      const response=  await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await response.json();
      console.log(data);
      setFooddata(data.results);
        }fetchData();
    },
    [query]
);
    return (
        <div className={styles.searchContainer}>

            <input className={styles.input} onChange={(e)=>setQuery(e.target.value)}  value={query} type="text" placeholder="🔍 search here..." />



        </div>


    );
}