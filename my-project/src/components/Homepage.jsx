import { Container } from "postcss";
import { NavBar } from "./NavBar";

export default function Homepage() {
  return (
    <>
      <NavBar />
      <div className="container mx-auto min-h-screen">
      <div className="base-100 m-auto w-3/6 h-100vh place-content">
        <p className="text-secondary text-5xl font-dhurjati p-3 text-center text-decoration-line: underline decoration-double underline-offset-8">
          WELCOME TO THE ALWAYS-CREATIVE, EVER-INNOVATIVE MIND OF AL...
        </p>
        <p className="text-primary text-3xl font-dhurjati p-1 text-center border-b-4 border-b-secondary">
          Formally called Alexandra Labaisse! This is the main site for all of
          my projects, from art to web and game development...stay tuned!
        </p>
        <div className="ms-auto me-auto w-10 h-10 mt-10 flex flex-row justify-center gap-2">
          <input
            type="radio"
            name="theme-buttons"
            className="btn btn-primary theme-controller"
            aria-label="B+M"
            value="bnm"
            onClick={() =>
              document.body.setAttribute("data-theme", "bnm")}
          />
          <input
            type="radio"
            name="theme-buttons"
            className="btn btn-primary theme-controller"
            aria-label="Shadowtown"
            value="shadowtown"
            onClick={() =>
              document.body.setAttribute("data-theme", "shadowtown")}
          />
        </div>
        <p className="text-secondary font-dhurjati text-3xl text-center text-decoration-line: underline ms-auto me-auto h-10 mt-1 flex flex-row justify-center">
          Theme Controller
        </p>
      </div>
      </div>
    </>
  );
}
