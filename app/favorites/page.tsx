'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './favorites.css';
import Navbar from '@/components/Navbar';
import RecipesCard from '@/components/RecipesCards';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loadFavorites = async () => {
      const stored = JSON.parse(localStorage.getItem('favorites') || '[]');
console.log(stored);

      // if (ids.length === 0) {
      //   setFavorites([]);
      //   setLoading(false);
      //   return;
      // }

      try {
        setFavorites(stored);
      } catch (err) {
        console.error(err);
        setFavorites([]);
      } finally {
        setLoading(false);
      }
    };

    loadFavorites();
  }, []);

  const handleRemove = (id: number) => {
    const updated = favorites.filter((fav) => fav.id !== id);
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated.map((fav) => fav.id)));
  };

  if (loading) return <p className="loading">Loading...</p>;

  return (
    <>
        <Navbar />
        <div className="search-container">
        <h1 className="search-title">Favorites recipes</h1>

        {favorites.length === 0 ? (
            <p className="loading">there is no recipe exist.</p>
        ) : (
            <div className="grid">
              <RecipesCard recipes={favorites} />
            </div>
        )}
        </div>
    </>
  );
}
