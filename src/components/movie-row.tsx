import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { MovieCard } from './movie-card';
import { Movie } from '@/data/movies';

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

export function MovieRow({ title, movies }: MovieRowProps) {
  return (
    <div className="py-8">
      <h2 className="mb-4 px-12 text-2xl font-semibold text-white">{title}</h2>
      <div className="group relative">
        <Button
          variant="ghost"
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-black/50 text-white opacity-0 transition-opacity group-hover:opacity-100"
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
        
        <div className="flex gap-2 overflow-x-auto px-12 scrollbar-hide">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        <Button
          variant="ghost"
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-black/50 text-white opacity-0 transition-opacity group-hover:opacity-100"
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      </div>
    </div>
  );
}