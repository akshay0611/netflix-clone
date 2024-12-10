import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and Route
import { FeaturedMovie } from './components/featured-movie';
import { MovieRow } from './components/movie-row';
import { Navbar } from './components/navbar';
import { MovieDetails } from './components/movie-details';
import { SearchResults } from './components/search-results';
import { Profile } from './components/Profile'; // Import the Profile component
import { trendingMovies, popularMovies } from '@/data/movies';
import { useStore } from '@/store/useStore';

function App() {
  const { searchQuery } = useStore();

  return (
    <Router> {/* Wrap your app in Router */}
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/profile" element={<Profile />} /> {/* Route for Profile Page */}
          <Route path="/" element={
            <>
              {!searchQuery && (
                <>
                  <FeaturedMovie />
                  <div className="relative z-10 -mt-32">
                    <MovieRow title="Trending Now" movies={trendingMovies} />
                    <MovieRow title="Popular on Netflix" movies={popularMovies} />
                  </div>
                </>
              )}
              <SearchResults />
              <MovieDetails />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;