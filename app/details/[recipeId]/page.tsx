import { RecipeDetailProps } from '@/types/types'
import axios from 'axios';
import './detail.css'
import Navbar from '@/components/Navbar';

const Details = async({params}:RecipeDetailProps) => {
    const id = params.recipeId;
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/recipes/${id}/information?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`)
    const recipe = response.data
  return (
    <>
      <Navbar />
      <div className="recipe-container">
        <div className="image-wrapper">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="recipe-image"
          />
        </div>

        <h1 className="recipe-title">{recipe.title}</h1>

        <button
          // onClick={handleFavorite}
          // className={`favorite-btn ${isFavorite ? 'remove' : 'add'}`}
        >
          {/* {isFavorite ? 'حذف از علاقه‌مندی‌ها' : 'ذخیره در علاقه‌مندی‌ها'} */}
        </button>

        <section className="recipe-section">
          <h2>Ingredients🧂</h2>
          <ul>
            {recipe.extendedIngredients.map((item: Ingredient, index: number) => (
              <li key={index}>{item.original}</li>
            ))}
          </ul>
        </section>

        <section className="recipe-section">
          <h2>Preparation steps 👩‍🍳</h2>
          <div
            className="instructions"
            dangerouslySetInnerHTML={{
              __html: recipe.instructions || 'Preparation steps dosent exist',
            }}
          />
        </section>

        <section className="recipe-info">
          <p>⏱ Preparation time: <strong>{recipe.readyInMinutes} minutes</strong></p>
          <p>👥 Number of people: <strong>{recipe.servings} person</strong></p>
        </section>
      </div>
    </>
  );
}

export default Details