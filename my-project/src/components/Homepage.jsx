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
      <div className="m-3 flex flex-row-reverse">
        <input
          type="checkbox"
          value="valentine"
          className="toggle theme-controller"
        />
        <button className="btn btn-primary">One</button>
        <button className="btn btn-secondary">Two</button>
        <button className="btn btn-accent btn-outline">Three</button>
        <div>
        <p className="text-accent text-5xl font-dhurjati p-3">
          WELCOME TO THE ALWAYS-CREATIVE, EVER-INNOVATIVE MIND OF AL...
        </p>
        <p className="text-secondary text-3xl font-dhurjati p-1">
          Formally called Alexandra Labaisse! This is the main site for all of
          my projects, from art to web and game development, and maybe some
          beats in the future...? Stay tuned!
        </p>
        </div>
      </div>
    </>
  );
}
