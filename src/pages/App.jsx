import { useEffect, useState } from "react";

import logo from "../assets/devflix.png";
import searchIcon from "../assets/search.svg";
import menuIcon from "../assets/menu-outline.svg"
import Menu from "../components/menu/menu";

import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";
import "./App.css";
import MovieCard from "../components/movieCard/movieCard";
import Footer from "../components/footer/footer";
import SocialLinks from "../components/socialLinks/social.Links";



const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [isMenu, setIsMenu] = useState(true);
  
  const apiKey = "d2817d74";
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    console.log(data);
    setMovies(data.Search);
  };

  const handleKeyPress = (e) => {
    e.key ==="Enter" && searchMovies(searchTerm);
    searchMovies(searchTerm)
  };

  const toggleMenu = () => {
    setIsMenu(!isMenu);
    
  }

  return (
      <div id="app">
      <div className="logo">
        <img src={logo} alt="logo devflix" />
      </div>
      <div className="searchBar">
        <ion-icon name="menu" onClick={toggleMenu}/>
       {isMenu && <Menu click={toggleMenu}/>}
        <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Pesquise Filmes"
        />
        
        <img
          src={searchIcon}
          alt="Icone de pesquisa"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      </div>
      {movies?.length > 0 ? (
        <div className="container">
           {movies.map((movie) => (
           <MovieCard key={movie.imdbID} movies={movie} />
           ))}
        </div>
      ): (
        <div className="empty">
          <h2>Nenhum filme encontrado 😣</h2>
        </div>
      )}
      <Footer link={"https:github.com.br"}>MuriloGaliazzi</Footer>
    

    </div>
 );
};

export default App;
