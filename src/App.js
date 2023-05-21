import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  const [books, setBooks] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const url = "https://www.googleapis.com/books/v1/volumes?q=react";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooks(data.items));
  }, []);
const addToFavorite =(book)=>{
if(!favorite.includes(book)){
  const UpdatedBooks = [...favorite, book];
  setFavorite(UpdatedBooks);
 

}
}
const deleteFavorite = (book)=>{
  const result = favorite.filter((fav)=>fav.id!==book.id)
setFavorite(result)
}
  

  return (
    <div className="App">
    
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home books={books} addToFavorite={addToFavorite} />}
        />
        <Route
          path="/favorite"
          element={
            <Favorite favorite={favorite} deleteFavorite={deleteFavorite} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
