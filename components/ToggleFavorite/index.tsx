import styles from "./toggleFavorite.module.css"

const ToggleFavorite = () => {
  return (
    <button className={`${styles.favoriteBtn} ${styles.add}`}>
          add to favorites
    </button>
  )
}

export default ToggleFavorite