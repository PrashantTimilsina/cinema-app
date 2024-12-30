import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Loading from "../loader/Loading";
import { FaPlus } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
function Description({ movies, addedMovies, setAddedMovies, text }) {
  const [description, setDescription] = useState(null);
  const location = useLocation();
  const imdbID = location?.state?.imdbID;
  const poster = location?.state?.Poster;
  const title = location?.state?.title;
  console.log(movies);
  function addMovies() {
    const isAlreadyWatched = addedMovies.some((movie) => movie.title === title);
    if (isAlreadyWatched) {
      alert("This movie is already added");
      return;
    }
    setAddedMovies((addedMovies) => [{ poster, title }, ...addedMovies]);
    console.log(addedMovies);
  }

  useEffect(
    function () {
      async function fetchDescription() {
        const KEY = "d270a7b";
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&i=${imdbID}`
        );
        const data = await res.json();
        console.log(data);
        if (res.ok) {
          setDescription(data);
        }
      }
      if (imdbID) fetchDescription();
    },
    [imdbID]
  );
  return (
    <div className="flex h-full w-full flex-wrap items-start justify-between bg-[#1e293b] p-6 text-xl sm:flex-nowrap">
      {description ? (
        <>
          <div className="my-2 w-[90%] sm:my-8">
            <img
              src={description?.Poster}
              alt={description?.Title}
              className="mx-auto my-0 object-cover sm:h-96 sm:w-96"
            />
            <a href={`https://hdtodayz.to/search/${text}`}>
              <button className="mx-auto my-5 flex items-center justify-center rounded-md bg-[#dc2626] p-2 px-6 text-2xl text-[#fee2e2] shadow-lg transition-all duration-300 ease-in-out hover:bg-[#f87171] hover:font-bold hover:text-[#b91c1c]">
                Watch now
              </button>
            </a>
          </div>
          <div className="my-2 space-x-2 space-y-2 px-6 text-[#e2e8f0] sm:my-10 sm:space-y-2">
            <h1 className="text-2xl text-[#f8fafc] sm:text-3xl">
              {description?.Title}
            </h1>
            <h1 className="text-xl text-[#f8fafc] sm:text-2xl">
              Actors:{description?.Actors}
            </h1>
            <p className="text-md">{description?.Plot}</p>
            <p>Year: {description?.Year}</p>
            <p>Genre: {description?.Genre}</p>
            <p>Language: {description?.Language}</p>
            <p>Runtime : {description?.Runtime}</p>
            <p className="flex items-center gap-3">
              Rating:
              <FaStar /> {description?.Ratings[0]?.Value}
            </p>
            <button
              className="relative top-8 flex items-center justify-center gap-2 bg-[#64748b] p-3 text-[#f8fafc]"
              onClick={addMovies}
            >
              <FaPlus />
              Add to favorite
            </button>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Description;
