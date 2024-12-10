import { Movie } from '@/data/movies';
import { useStore } from '@/store/useStore';
import { Play, Plus } from 'lucide-react';

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const { setSelectedMovie } = useStore();

  return (
    <div
      className="group relative flex-shrink-0 cursor-pointer"
      onClick={() => setSelectedMovie(movie)}
    >
      <img
        src={movie.image}
        alt={movie.title}
        className="h-[200px] w-[350px] rounded-md object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
        <button className="rounded-full bg-white/20 p-2 hover:bg-white/30">
          <Play className="h-6 w-6 text-white" fill="white" />
        </button>
        <button className="rounded-full bg-white/20 p-2 hover:bg-white/30">
          <Plus className="h-6 w-6 text-white" />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black p-4 opacity-0 transition-opacity group-hover:opacity-100">
        <h3 className="text-lg font-semibold text-white">{movie.title}</h3>
      </div>
    </div>
  );
}