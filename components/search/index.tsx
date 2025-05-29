"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './search.module.css'
import { CiSearch } from "react-icons/ci";

const Search = () => {
  const [searchParam, setSearchParam] = useState<string>("")
  const router = useRouter()
  const handleRoute = ()=>{
    router.push(`/searchResult?query=${searchParam}`)
  }
  return (
    <div className={styles.searchContainer}>
        <h2 className={styles.searchTitle}>Search for recipes</h2>
        <div className={styles.searchBarContainer}>
            <input value={searchParam} onChange={(e)=>setSearchParam(e.target.value)} type="text" className={styles.searchInput} placeholder="Search for recipes by ingredients, cuisine, or keywords..." />
            <button onClick={handleRoute} className={styles.searchButton}>
              <CiSearch fill='#112e01' />
            </button>
        </div>
    </div>
  )
}

export default Search