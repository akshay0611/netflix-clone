import { X } from 'lucide-react';
import { Button } from './ui/button';
import { useStore } from '@/store/useStore';
import ReactPlayer from 'react-player';

export function MovieDetails() {
  const { selectedMovie, setSelectedMovie, isPlaying, setIsPlaying } = useStore();

  if (!selectedMovie) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="relative w-full max-w-4xl rounded-lg bg-zinc-900 p-6">
        <Button
          variant="ghost"
          className="absolute right-4 top-4 text-white"
          onClick={() => {
            setSelectedMovie(null);
            setIsPlaying(false);
          }}
        >
          <X className="h-6 w-6" />
        </Button>

        <div className="aspect-video w-full">
          {isPlaying ? (
            <ReactPlayer
              url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              width="100%"
              height="100%"
              playing
              controls
            />
          ) : (
            <img
              src={selectedMovie.image}
              alt={selectedMovie.title}
              className="h-full w-full rounded-md object-cover"
            />
          )}
        </div>

        <div className="mt-4">
          <h2 className="text-2xl font-bold text-white">{selectedMovie.title}</h2>
          <p className="mt-2 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
          <div className="mt-4 flex gap-4">
            <Button onClick={() => setIsPlaying(true)}>Play</Button>
            <Button variant="secondary">Add to My List</Button>
          </div>
        </div>
      </div>
    </div>
  );
}