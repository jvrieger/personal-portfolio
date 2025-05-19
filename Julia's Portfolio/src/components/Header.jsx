import { Link } from "react-router-dom";
import "../styles/Header.css"

export default function Header() {
  return (
    <>
      <div className="header-container">
        <h1>Julia Rieger</h1>
        <Link className="home" to={"/"}>Home</Link>
        <Link className="about" to={"/about"}>About</Link>
        <Link className="projects" to={"/projects"}>Projects</Link>
      </div>
    </>
  );
}