import { NavBar } from "./NavBar";

export default function Homepage() {
  <>
    <html data-theme="default"></html>
    <html data-theme="retro"></html>
    <html data-theme="cyberpunk"></html>
    <html data-theme="valentine"></html>
    <html data-theme="aqua"></html>
  </>;
  return (
    <>
      <NavBar />
      <div className="base-100 m-auto w-3/6 h-40 place-content">
          <p className="text-secondary text-5xl font-dhurjati p-3 text-center text-decoration-line: underline decoration-double underline-offset-8">
            WELCOME TO THE ALWAYS-CREATIVE, EVER-INNOVATIVE MIND OF AL...
          </p>
          <p className="text-primary text-3xl font-dhurjati p-1 text-center">
            Formally called Alexandra Labaisse! This is the main site for all of
            my projects, from art to web and game development...stay tuned!
          </p>
          <div className="ms-auto me-auto w-10 h-10 flex flex-row justify-center">
          <input
            type="checkbox"
            value="bnm"
            className="toggle theme-controller"
          />
          <button className="btn btn-primary">One</button>
          <button className="btn btn-secondary">Two</button>
          <button className="btn btn-accent btn-outline">Three</button>
        </div>
        </div>
    </>
  );
}
