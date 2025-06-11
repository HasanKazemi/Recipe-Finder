"use client"
import { Recipes } from '@/types/types'
import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from "./searchResult.module.css"
import Navbar from '@/components/Navbar'
import FilterResult from '@/components/FilterResult'
import Pagination from '@/components/pagination'
import RecipesCard from '@/components/RecipesCards'
import { useSearchParams } from 'next/navigation'

const SearchResult = () => {
  const searchParams = useSearchParams()
  const query = searchParams.get('query')

  const [recipes, setRecipes] = useState<Recipes[] | []>([])
  const [page, setPage] = useState<number>(1)
  const [totalResults, setTotalResults] = useState<number>(0)

  const [cuisine, setCuisine] = useState<string>("")
  const [diet, setDiet] = useState<string>("")
  const [sort, setSort] = useState<string>("")

  const cuisineValues = ["Italian","Mxican","European"]
  const dietValues = ["vegan","vegeterian"]
  const sortValues= ["popularity","healthiness","time"]
  const pageSize = 20
    useEffect(() => {
      if (query) {
        const fetchRecipes = async () => {
          const offset = (page - 1) * pageSize
          try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/recipes/complexSearch`,{
              params: {
                query,
                cuisine,
                diet,
                sort,
                offset,
                number: pageSize,
                apiKey: process.env.NEXT_PUBLIC_API_KEY,
                addRecipeInformation: true,
              }
            });
            setRecipes(res.data.results);
            setTotalResults(res.data.totalResults);
          } catch (err) {
            console.error(err);
          }
        };
        fetchRecipes();
      }
    }, [query,cuisine,diet,sort,page]);

    const totalPages = Math.ceil(totalResults / pageSize)

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
        <RecipesCard recipes={recipes} />
      </div>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  )
}

export default SearchResult