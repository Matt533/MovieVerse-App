# The MovieVerse App

**The MovieVerse App** is a React-based application that integrates the TMDB (The Movie Database) API to display movies. The app allows users to search for movies by name, add and remove movies from favorites, and store the favorite movies in `localStorage`. The favorite movie state is managed using `useContext`, enabling data sharing between components.

**Features** 

- **Searching movies by Title** - Users can search movies by given title in the search box. If such movie/s exists, they will be displayed on the page.

- **Add & Remove to Favorite List** - Users can add movies to their favorite list simply by clicking the heart icon! Then the movie will  be shown on their separate Favorites Page where they can see all their favorite movies. Favorite movies can also be removed from the Favorite List by clicking the heart icon again. Even on the home page, the movies that were added to the favorite list, will have their heart icon colored red.

- **Stored in `localStorage`** - Favorite movies are stored in the browser's localStorage so that if we close the app or refresh it the changes stay consistent.

- **Context for sharing state for components (`useContext`)** - The App is using useContext, so that the state is shared among all components and it stays consistent if any change happens.

- **useEffect && useState** - Each component has its own useStates for local state and useEffect for side effects that need to be rendered when the component is initialized or if any changes happend to the dependecy array in some components.

- **Axios & API Call** - The app uses the TMDB API as previously stated. For calling the API and handling the response we used Axios with async functions.

- **React Routing** - We are using the React BrowseRouter so that we enable some kind of navigation through the app. There is Home and Favorites pages which have their own routes. 

## Installation

1. Clone the repository: 
- git clone https://github.com/Matt533/MovieVerse-App

2. Navigate to the project directory:
- cd movieApp

3. Run commands:
- npm install
- npm install axios
- npm install react-router-dom 

4. Open app on your browser:
- npm run dev
- ctrl + click -> http://localhost:3000

-- Note --
To use the TMDB API, you will need to register and log in.
After that you need to get your own API_KEY. Afer getting your api_key put it into the api.js file where it says "your_api_key";
