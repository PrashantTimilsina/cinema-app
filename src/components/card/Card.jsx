import { useNavigate } from "react-router";
import Loading from "../loader/Loading";

function Card({ movies }) {
  const navigate = useNavigate();
  return (
    <div className="relative z-0 mx-auto my-0 -mt-20 w-full bg-[#020617]">
      <div className="text-center">
        <h1 className="p-3 text-2xl sm:text-3xl">Movies</h1>
      </div>
      <div className="flex flex-wrap items-center justify-evenly space-y-5">
        {movies ? (
          movies?.map((el, i) => (
            <div
              key={i}
              className="flex cursor-pointer flex-col items-center justify-center gap-2 bg-[#0f172a] p-5 sm:w-72"
              onClick={() =>
                navigate("/description", {
                  state: {
                    imdbID: el?.imdbID,
                    Poster: el?.Poster,
                    title: el?.Title,
                  },
                })
              }
            >
              <img
                src={el?.Poster}
                alt={el.Title}
                className="h-60 w-60 rounded-sm object-cover"
              />
              <h1 className="font-semibold text-[#e2e8f0]">{el?.Title}</h1>
              <h1>{el?.Type.toUpperCase()}</h1>
              <h1>{el?.Year}</h1>
            </div>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default Card;
