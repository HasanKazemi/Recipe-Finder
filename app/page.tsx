import Navbar from "@/components/Navbar";
import styles from "./page.module.css";
import Search from "@/components/search";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Navbar />
        <Search />
      </main>
    </div>
  );
}
