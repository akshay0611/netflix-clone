# Netflix Clone

This project is a Netflix clone built using React. It aims to replicate the user interface and functionality of the popular streaming service, allowing users to browse movies, search for specific titles, and view movie details.

## Features

- **Responsive Navbar**: A fixed navigation bar that includes a logo, menu items, and a search input.
- **Search Functionality**: Users can search for movies by title, with results displayed dynamically.
- **Movie Display**: Movies are displayed in rows, categorized as "Trending Now" and "Popular on Netflix."
- **Movie Details**: Users can click on a movie to view more details.
- **Profile Page**: A dedicated route for user profiles.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Router**: For routing and navigation within the application.
- **CSS**: For styling the components and layout.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/netflix-clone.git
   cd netflix-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

Open your browser and navigate to http://localhost:3000 to view the application.

## File Structure

```
/src
  ├── components
  │   ├── navbar.css          # Styles for the navbar component
  │   ├── navbar.tsx          # Navbar component
  │   ├── search-results.tsx   # Component to display search results
  │   ├── featured-movie.tsx   # Featured movie component
  │   ├── movie-row.tsx        # Component to display rows of movies
  │   ├── movie-details.tsx     # Component for movie details
  │   └── Profile.tsx          # User profile component
  ├── App.tsx                  # Main application component
  ├── data
  │   └── movies.ts            # Sample movie data
  └── store
      └── useStore.ts          # State management using a custom store
```

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- Inspired by the Netflix user interface.
- Thanks to the React community for their support and resources.
