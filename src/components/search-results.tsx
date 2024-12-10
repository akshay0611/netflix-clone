import { useStore } from '@/store/useStore';
import { trendingMovies, popularMovies } from '@/data/movies';
import { MovieCard } from './movie-card';

export function SearchResults() {
  const { searchQuery } = useStore();

  if (!searchQuery) return null;

  const allMovies = [...trendingMovies, ...popularMovies];
  const filteredMovies = allMovies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-x-0 top-16 z-40 bg-black/95 p-6">
      <h2 className="mb-4 text-xl font-semibold text-white">
        Search Results for "{searchQuery}"
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}