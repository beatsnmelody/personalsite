export default function Homepage() {
  <>
    <html data-theme="default"></html>
    <html data-theme="retro"></html>
    <html data-theme="cyberpunk"></html>
    <html data-theme="valentine"></html>
    <html data-theme="aqua"></html>
  </>;
  return (
    <div>
      <input
        type="checkbox"
        value="valentine"
        className="toggle theme-controller"
      />
      <button className="btn btn-primary">One</button>
      <button className="btn btn-secondary">Two</button>
      <button className="btn btn-accent btn-outline">Three</button>
    </div>
  );
}
