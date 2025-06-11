"use client"
import styles from "./toggleFavorite.module.css"

const ToggleFavorite = ({recipe}) => {
    const handleToggle = ()=>{
        console.log(recipe);
        
        localStorage.setItem("favorites",JSON.stringify(recipe))
    }
  return (
    <button className={`${styles.favoriteBtn} ${styles.add}`} onClick={handleToggle}>
          add to favorites
    </button>
  )
}

export default ToggleFavorite