import { useEffect } from "react"
import styles from "./filter.module.css"
import { useRouter } from "next/navigation"
import { FilterProps } from "@/types/types"

const FilterResult = ({cuisine, setCuisine, query} : FilterProps) => {
    const router = useRouter()
    useEffect(() => {
      router.push(`/searchResult?query=${query}&cuisine=${cuisine}`)
    }, [cuisine])

  return (
    <div className={styles.container}>
        <select onChange={(e)=>setCuisine(e.target.value)}>
            <option value="">cuisine</option>
            <option value="italian">italian</option>
            <option value="mexican">mexican</option>
            <option value="chinese">chinese</option>
            <option value="European">European</option>
        </select>
    </div>
  )
}

export default FilterResult