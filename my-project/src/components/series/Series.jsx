import { NavBar } from "../NavBar";
import { Link } from "react-router-dom";

export default function Series() {
  return (
    <>
      <NavBar />
      <div className="base-100 m-auto w-full min-h-screen place-content">
        <p className="">My Series</p>
        <p className="">
          These are my series! Each series includes a premise, along with a few
          characters.
        </p>
        <Link to="/series/bnm" className="btn btn-ghost text-xl font-dhurjati text-secondary">
          Beats And Melody
        </Link>
        <Link to="/series/st" className="btn btn-ghost text-xl font-dhurjati text-secondary">
          Shadowtown
        </Link>
        <Link to="/series/hp" className="btn btn-ghost text-xl font-dhurjati text-secondary">
          Hokus Pokus
        </Link>
        <Link to="/series/ppp" className="btn btn-ghost text-xl font-dhurjati text-secondary">
          Post Pandemic Palooza
        </Link>
        <Link to="/series/bgcg" className="btn btn-ghost text-xl font-dhurjati text-secondary">
          Bubblegum Cowgirl
        </Link>
        <Link to="/" className="btn btn-ghost text-xl font-dhurjati text-secondary">
          Fungiverse
        </Link>
        <Link to="/series/dd" className="btn btn-ghost text-xl font-dhurjati text-secondary">
          Deplorable Days
        </Link>
      </div>
    </>
  );
}
