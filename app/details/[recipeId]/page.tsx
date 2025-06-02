import { RecipeDetailProps } from '@/types/types'
import axios from 'axios';
import './detail.css'

const Details = async({params}:RecipeDetailProps) => {
    const id = params.recipeId;
    const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`)
    const recipe = response.data
  return (
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
        <h2>🧂 مواد لازم</h2>
        <ul>
          {recipe.extendedIngredients.map((item: Ingredient, index: number) => (
            <li key={index}>{item.original}</li>
          ))}
        </ul>
      </section>

      <section className="recipe-section">
        <h2>👩‍🍳 مراحل تهیه</h2>
        <div
          className="instructions"
          dangerouslySetInnerHTML={{
            __html: recipe.instructions || 'مراحل تهیه موجود نیست.',
          }}
        />
      </section>

      <section className="recipe-info">
        <p>⏱ زمان آماده‌سازی: <strong>{recipe.readyInMinutes} دقیقه</strong></p>
        <p>👥 تعداد نفرات: <strong>{recipe.servings} نفر</strong></p>
      </section>
    </div>
  );
}

export default Details