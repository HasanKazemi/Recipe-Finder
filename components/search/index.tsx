import styles from './search.module.css'
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className={styles.searchContainer}>
        <h2 className={styles.searchTitle}>Search for recipes</h2>
        <div className={styles.searchBarContainer}>
            <input type="text" className={styles.searchInput} placeholder="Search for recipes by ingredients, cuisine, or keywords..." />
            <button className={styles.searchButton}><CiSearch fill='#112e01' /></button>
        </div>
    </div>
  )
}

export default Search