import styles from "./fooditem.module.css"
export default function Fooditem({food,setFoodId}){
    return(
        <div className={styles.itemContainer}>
            <img className={styles.itemImage} src={food.image} alt="" />

            <div className={styles.itemContent}>

                <p className={styles.itemName}>{food.title}</p>
                
            </div>  

            <div className={styles.buttonContainer}></div> 
        
         <button onClick={()=>{
            setFoodId(food.id);
         }} className={styles.itemButton}>View Recipe</button>

      
        </div>

    );
}