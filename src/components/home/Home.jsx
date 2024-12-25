import Card from "../../components/card/Card";
import Hero from "../../components/hero/Hero";
import { useEffect } from "react";
import Footer from "../footer/Footer";
import Loading from "../loader/Loading";

function Home({ movies, setMovies, text, setLoading, loading }) {
  async function fetchData() {
    try {
      setLoading(true);
      const KEY = "d270a7b";
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${KEY}&s=${text}`
      );
      const data = await res.json();
      console.log(data);

      if (res.ok && data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]); // Clear the movie list if none are found
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (text === "") return;
    fetchData();
  }, [text]);

  return (
    <div className="bg-black text-white">
      <Hero />
      {loading && <Loading />}
      {!loading && (!movies || movies.length === 0) && (
        <p className="flex justify-center p-2 text-2xl">No movies found</p>
      )}
      {!loading && movies?.length > 0 && (
        <Card movies={movies} loading={loading} />
      )}
      <Footer />
    </div>
  );
}

export default Home;
