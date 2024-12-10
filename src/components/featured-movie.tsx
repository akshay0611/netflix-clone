import { useState } from 'react';
import { Play, Info } from 'lucide-react';
import { Button } from './ui/button';

export function FeaturedMovie() {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const handleMoreInfoClick = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
          <Button variant="secondary" size="lg" onClick={handleMoreInfoClick}>
            <Info className="mr-2 h-5 w-5" /> More Info
          </Button>
        </div>
      </div>

      {/* Modal for displaying more information */}
      {isModalOpen && (
        <div className="fixed inset-0 z-20 bg-black/50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold text-gray-800">Stranger Things - More Info</h2>
            <p className="mt-4 text-gray-600">
              Stranger Things is a thrilling sci-fi horror series set in the 1980s. The show follows a group of kids as they uncover a parallel dimension, government experiments, and dangerous monsters. It's filled with nostalgia, mystery, and suspense.
            </p>
            <div className="mt-6 flex justify-end">
              <Button onClick={handleCloseModal}>Close</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
