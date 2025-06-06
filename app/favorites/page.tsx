'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './favorites.css';
import Navbar from '@/components/Navbar';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loadFavorites = async () => {
      const stored = localStorage.getItem('favorites') || '[]';
      const ids = JSON.parse(stored);

      if (ids.length === 0) {
        setFavorites([]);
        setLoading(false);
        return;
      }

      try {
        const requests = ids.map((id: string) =>
          fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}`)
        );
        const responses = await Promise.all(requests);
        const data = await Promise.all(responses.map((res) => res.json()));
        setFavorites(data);
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
            {favorites.map((recipe) => (
                <div key={recipe.id} className="card">
                <img src={recipe.image} alt={recipe.title} className="card-image" />
                <h2 className="card-title">{recipe.title}</h2>
                <div className="card-actions">
                    <button onClick={() => router.push(`/recipe/${recipe.id}`)} className="card-button">
                        more details
                    </button>
                    <button onClick={() => handleRemove(recipe.id)} className="card-button remove">
                        delete
                    </button>
                </div>
                </div>
            ))}
            </div>
        )}
        </div>
    </>
  );
}
