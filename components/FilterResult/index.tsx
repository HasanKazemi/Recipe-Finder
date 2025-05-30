import styles from "./filter.module.css"
import { FilterProps } from "@/types/types"

const FilterResult = ({label, values, setState} : FilterProps) => {
  return (
    <div className={styles.container}>
        <label>{label}</label>
        <select onChange={(e)=>setState(e.target.value)} className={styles.select}>
            <option value=""> - select - </option>
            {values.map(item=>(
                <option value={item} key={item}>{item}</option>
            ))}
        </select>
    </div>
  )
}

export default FilterResult