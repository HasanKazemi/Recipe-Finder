import { PaginationProps } from '@/types/types'
import styles from "./pagination.module.css"

const Pagination = ({page, setPage, totalPages}:PaginationProps) => {
  console.log("page ",page);
  console.log("totalPages ",totalPages);
  
  return (
    <div className={styles.btnContainer}>
        <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1} className={styles.btn}>prev</button>
        <button onClick={() => setPage((prev) => prev + 1)} disabled={page >= totalPages} className={styles.btn}>next</button>
    </div>
  )
}

export default Pagination