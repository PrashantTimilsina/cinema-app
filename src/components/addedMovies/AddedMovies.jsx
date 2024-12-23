function AddedMovies({ addedMovies, setAddedMovies }) {
  function handleDelete(index) {
    const filterData = addedMovies.filter((_, i) => i != index);
    setAddedMovies(filterData);
    localStorage.setItem("tasks", JSON.stringify(filterData));
  }
  return (
    <div className="flex h-full w-full flex-wrap items-center justify-center gap-9 bg-[#020617] p-5 sm:items-start sm:justify-start">
      {addedMovies.length === 0 && (
        <h1 className="mx-auto my-0 text-[#f8fafc] sm:text-3xl">
          No favorite movies
        </h1>
      )}
      {addedMovies.map((el, i) => (
        <div
          key={i}
          className="mt-6 flex h-auto w-64 flex-col items-center justify-center gap-2 rounded-sm bg-[#0f172a] p-4 sm:w-56"
        >
          <img
            src={el.poster}
            alt="Movie image"
            className="h-56 w-56 rounded-md object-cover"
          />
          <h1 className="text-md text-[#cbd5e1]">{el.title}</h1>
          <button
            className="text-md rounded-md bg-[#dc2626] p-1 px-7 text-[#fecaca]"
            onClick={() => handleDelete(i)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default AddedMovies;
