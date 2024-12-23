import { Outlet } from "react-router";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";

function Layout({ text, setText, addedMovies, handleSort }) {
  return (
    <div>
      <Nav
        text={text}
        setText={setText}
        addedMovies={addedMovies}
        handleSort={handleSort}
      />
      <div className="mt-14">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
