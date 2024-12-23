import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router";

function Nav({ text, setText, addedMovies, handleSort }) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef(null);
  function handleShow() {
    setShow((show) => !show);
  }
  useEffect(function () {
    inputRef.current.focus();
  }, []);
  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between bg-black px-1">
      <div className="flex items-center justify-center gap-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR20G05qnsm2xNIP0-wI7SQpfnMsJ7g14v1Q&s"
          className="ml-3 h-14 w-14 object-cover"
        />
        <h1 className="hidden font-serif text-xl text-white first-letter:text-[#7dd3fc] sm:hidden lg:block">
          Enjoy <span className="text-[#7dd3fc]">M</span>ovies
        </h1>
      </div>
      <nav className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Search movies"
          className="m-3 h-10 w-auto rounded-sm border-none p-2 text-black outline-none md:w-96"
          value={text}
          ref={inputRef}
          onChange={(e) => setText(e.target.value)}
          spellCheck={false}
        />
        Prashant
        <ul
          className={`fixed top-14 sm:top-0 w-[50%] right-0 sm:w-auto sm:relative p-3 z-40  transition-all duration-300 ease-in-out flex flex-col sm:flex-row sm:space-x-6 ${
            show
              ? "opacity-100 translate-x-0 pointer-events-auto"
              : "opacity-0 translate-x-full sm:opacity-100 sm:translate-x-0 pointer-events-none sm:pointer-events-auto"
          } bg-black text-white  text-center cursor-pointer space-y-5 sm:space-y-0  h-full sm:h-auto`}
        >
          <li
            onClick={() => {
              navigate("/");
              handleShow();
            }}
            className="text-xl hover:border-b-2 hover:border-white"
          >
            Home
          </li>
          <li
            onClick={() => {
              navigate("/addedMovies");
              handleShow();
            }}
            className="relative text-xl hover:border-b-2 hover:border-white"
          >
            {addedMovies.length > 0 && (
              <h3 className="absolute flex h-5 w-5 items-center justify-center rounded-full bg-red-700 text-xs sm:-right-4 sm:bottom-4">
                {addedMovies.length}
              </h3>
            )}
            Favorite
          </li>

          <select
            className="mx-auto flex flex-col items-center justify-center bg-transparent text-center text-xl outline-none hover:border-b-2 hover:border-white"
            onChange={(e) => {
              if (e.target.value === "Sort A-Z") {
                handleSort();
              }

              e.target.value = "Sort";
            }}
          >
            <option className="text-center text-black">Sort</option>
            <option className="text-center text-black">Sort A-Z</option>
          </select>
        </ul>
        {show ? (
          <IoClose
            className="mx-0 my-auto mr-3 text-2xl text-white sm:hidden"
            onClick={handleShow}
          />
        ) : (
          <GiHamburgerMenu
            className="mx-0 my-auto mr-3 text-2xl text-white sm:hidden"
            onClick={handleShow}
          />
        )}
      </nav>
    </header>
  );
}

export default Nav;
