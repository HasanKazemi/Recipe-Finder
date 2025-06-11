import { extendedIngredients, RecipeDetailProps } from '@/types/types'
import axios from 'axios';
import './detail.css'
import Navbar from '@/components/Navbar';
import styles from './detail.module.css'

const Details = async({params}:RecipeDetailProps) => {
    const id = params.recipeId;
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/recipes/${id}/information?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`)
    const recipe = response.data
    console.log(recipe)
  return (
    <>
      <Navbar />
      <div className={styles.recipeContainer}>
        <div className={styles.imageWrapper}>
          <img
            src={recipe.image}
            alt={recipe.title}
            className={styles.recipeImage}
          />
        </div>

        <h1 className={styles.recipeTitle}>{recipe.title}</h1>

        <button>
          add to favorites
        </button>

        <section className={styles.recipeSection}>
          <h2 className={styles.ingredientsTitle}>Ingredients🧂</h2>
          <ul className={styles.ingredientsList}>
            {recipe.extendedIngredients.map((item:extendedIngredients, index: number) => (
              <li key={index}>{item.original}</li>
            ))}
          </ul>
        </section>

        <section className={styles.recipeSection}>
          <h2>Preparation steps 👩‍🍳</h2>
          <div
            className={styles.instructions}
            dangerouslySetInnerHTML={{
              __html: recipe.instructions || 'Preparation steps dosent exist',
            }}
          />
        </section>

        <section className={styles.recipeInfo}>
          <p>⏱ Ready in: <strong>{recipe.readyInMinutes} minutes</strong></p>
          <p>👥 Servings: <strong>{recipe.servings} person</strong></p>
        </section>
      </div>
    </>
  );
}

export default Details