import styles from "./foodDetails.module.css";
import { useEffect, useState } from "react";

export default function Fooddetails({foodId}){

    const[food,setFood]=useState({});
    const[isLoading,setisLoading]=useState(true)

    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY= "b2dd184899fe4e6b8b1781a2b90df570";

    useEffect(()=> {
        async function fetchFood(){
       const response= await fetch(`${URL}?apiKey=${API_KEY}`);
       const data = await response.json();
       setFood(data);
       setisLoading(false)

        }
        fetchFood();
    },[foodId]);

    return (
        <div>
            <div className={styles.recipeCard}>
                <h1 className={styles.recipeName}> {food.title}</h1>

           
            <img className={styles.recipeImage} src={food.image} alt="" />

            <div className={styles.recipeDetails}>
            <span>
                <strong>🕰️{food.readyInMinutes} Minutes</strong>
            </span>
            <span>
            👨‍👩‍👧‍👦<strong>Serves {food.servings}</strong>
            </span>
            <span>
              <strong>{food.vegetarian ? "🥕 Vegetarian":" 🍖 Non-vegetarian"}</strong>
            </span>
            <span>
              <strong> {food.vegan ? "🐮 Vegan": ""}</strong> 
            </span>
            </div> 
            <div>
                💲<span> <strong>{food.pricePerServing}Per serving </strong></span>
            </div>
                <h1>Instructions</h1>
                <div className={styles.recipeInstructions}>
                  <ol>
                {isLoading ? <p>Data is Loading...</p>: 
                food.analyzedInstructions[0].steps.map((step)=>(
                    <li>{step.step}</li>
                ))
                }
                </ol>
                
            </div>
            </div>
        </div>

    );

}