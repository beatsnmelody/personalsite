import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import "./App.css"

export default function App() {
  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])
  return (
    <select className="gradientselect" data-choose-theme>
        <option disabled value="">
          Pick a theme
        </option>
        <option value="">Default</option>
        <option value="dark">Dark</option>
        <option value="cupcake">CupCake</option>
 </select>
  );
}
