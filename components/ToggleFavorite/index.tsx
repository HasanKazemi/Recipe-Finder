"use client"
import { useEffect, useState } from "react"
import styles from "./toggleFavorite.module.css"

const ToggleFavorite = ({recipe}) => {
  const [favorites, setFavorites] = useState(() => {
    if (typeof window !== "undefined") {
      const storedFavorites = localStorage.getItem("favorites")
      return storedFavorites ? JSON.parse(storedFavorites) : []
    }
    return []
  })

  // Update localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

  // Check if current recipe is in favorites
  const isFavorited = favorites.some(fav => fav.id === recipe.id)

  // Toggle favorite status of the recipe
  const handleToggle = () => {
    if (isFavorited) {
      // Remove from favorites
      setFavorites(prev => prev.filter(fav => fav.id !== recipe.id))
    } else {
      // Add to favorites
      setFavorites(prev => [...prev, recipe])
    }
  }

  return (
    <button
      className={`${styles.favoriteBtn} ${isFavorited ? styles.remove : styles.add}`}
      onClick={handleToggle}
    >
      {isFavorited ? "remove from favorites" : "add to favorites"}
    </button>
  )
}

export default ToggleFavorite