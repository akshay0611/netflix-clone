import { Play, Info } from 'lucide-react';
import { Button } from './ui/button';

export function FeaturedMovie() {
  return (
    <div className="relative h-[80vh] w-full">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0"
          alt="Featured Movie"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      </div>
      
      <div className="relative z-10 flex h-full flex-col justify-center px-12">
        <h1 className="max-w-2xl text-5xl font-bold text-white">Stranger Things</h1>
        <p className="mt-4 max-w-lg text-lg text-gray-200">
          When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.
        </p>
        <div className="mt-8 flex gap-4">
          <Button size="lg">
            <Play className="mr-2 h-5 w-5" /> Play
          </Button>
          <Button variant="secondary" size="lg">
            <Info className="mr-2 h-5 w-5" /> More Info
          </Button>
        </div>
      </div>
    </div>
  );
}