import Card from "../../components/card/Card";

import Hero from "../../components/hero/Hero";

import { useEffect } from "react";
import Footer from "../footer/Footer";

function Home({ movies, setMovies, text, setLoading, loading }) {
  async function fetchData() {
    setLoading(true);
    const KEY = "d270a7b";
    const res = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=${text}`);
    const data = await res.json();
    console.log(data);
    if (res.ok) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
    setLoading(false);
  }

  useEffect(
    function () {
      if (text === "") return;
      fetchData();
    },
    [text]
  );

  return (
    <div className="bg-black text-white">
      <Hero />

      <Card movies={movies} loading={loading} />
      <Footer />
    </div>
  );
}

export default Home;
