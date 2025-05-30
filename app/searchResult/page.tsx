"use client"
import { Recipes } from '@/types/types'
import axios from 'axios'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from "./searchResult.module.css"
import Navbar from '@/components/Navbar'
import FilterResult from '@/components/FilterResult'

const SearchResult = () => {
  const searchParams = useSearchParams()
  const query = searchParams.get('query')
  const [recipes, setRecipes] = useState<Recipes[] | []>([])

  const [cuisine, setCuisine] = useState<string>("")
  const [diet, setDiet] = useState<string>("")
  const [sort, setSort] = useState<string>("")

  const cuisineValues = ["Italian","Mxican","European"]
  const dietValues = ["vegan","vegeterian"]
  const sortValues= ["popularity","healthiness","time"]

    useEffect(() => {
      if (query) {
        const fetchRecipes = async () => {
          try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}?query=${query}&cuisine=${cuisine}&diet=${diet}&sort=${sort}&number=20&apiKey=${process.env.NEXT_PUBLIC_API_KEY}&addRecipeInformation=true`);
            setRecipes(res.data.results);
            console.log(res.data.results)
          } catch (err) {
            console.error(err);
          }
        };
        fetchRecipes();
      }
    }, [query,cuisine,diet,sort]);

  return (
    <div>
      <Navbar />
      <div className={styles.filterContainer}>
        <FilterResult label="cuisine" values={cuisineValues} setState={setCuisine} />
        <FilterResult label="diet" values={dietValues} setState={setDiet} />
        <FilterResult label="sort" values={sortValues} setState={setSort} />
      </div>
      <div className={styles.pageHeaderContainer}></div>
      <div className={styles.resultContainer}>
        {recipes.map(recipe=>(
            <div key={recipe.id} className={styles.resultCard}>
              <Image src={recipe.image} height={100} width={128} quality={95} alt='recipe' className={styles.thumbnail} />
              <h4 className={styles.title}>{recipe.title}</h4>
              <p className={styles.summary}>{recipe.summary.replace(/<[^>]+>/g, '').slice(0,100)}...</p>
              <button className={styles.moreBtn}>more details</button>
            </div>
          ))}
      </div>
    </div>
  )
}

export default SearchResult