"use client"
import { Recipes } from "@/types/types"
import Image from "next/image"
import { useRouter } from "next/navigation"
import styles from "./recipesCard.module.css"

const RecipesCard = ({recipes}:{recipes:Recipes[]}) => {
  const router = useRouter()
  return (
    <>
        {recipes.map(recipe=>(
            <div key={recipe.id} onClick={()=>router.push(`/details/${recipe.id}`)} className={styles.resultCard}>
              <Image src={recipe.image} height={100} width={128} quality={95} alt='recipe' className={styles.thumbnail} />
              <div className={styles.cardBody}>
                <h4 className={styles.title}>{recipe.title}</h4>
                <p className={styles.summary}>{recipe.summary.replace(/<[^>]+>/g, '').slice(0,100)}...</p>
                <button className={styles.moreBtn}>more details</button>
              </div>
            </div>
        ))}
    </>
  )
}

export default RecipesCard