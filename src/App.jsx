import { BrowserRouter, Routes } from "react-router";
import Description from "./components/description/Description";
import { Route } from "react-router";
import Home from "./components/home/Home";
import { useEffect, useState } from "react";
import Layout from "./components/layout/Layout";
import AddedMovies from "./components/addedMovies/AddedMovies";

function App() {
  const [movies, setMovies] = useState([]);
  const [text, setText] = useState("avatar");
  const [loading, setLoading] = useState(true);
  const [addedMovies, setAddedMovies] = useState([]);
  useEffect(function () {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setAddedMovies(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(
    function () {
      if (addedMovies.length > 0) {
        localStorage.setItem("tasks", JSON.stringify(addedMovies));
      }
    },
    [addedMovies]
  );

  function handleSort() {
    if (movies && movies.length > 0) {
      const sortedMovies = movies
        .slice()
        .sort((a, b) => a.Title.localeCompare(b.Title));

      setMovies(sortedMovies);
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout
              text={text}
              setText={setText}
              addedMovies={addedMovies}
              handleSort={handleSort}
            />
          }
        >
          <Route
            path="/"
            element={
              <Home
                movies={movies}
                setMovies={setMovies}
                text={text}
                loading={loading}
                setLoading={setLoading}
                setAddedMovies={setAddedMovies}
                addedMovies={addedMovies}
              />
            }
          />
          <Route
            path="description"
            element={
              <Description
                addedMovies={addedMovies}
                setAddedMovies={setAddedMovies}
                text={text}
              />
            }
          />
          <Route
            path="addedMovies"
            element={
              <AddedMovies
                addedMovies={addedMovies}
                setAddedMovies={setAddedMovies}
          
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
