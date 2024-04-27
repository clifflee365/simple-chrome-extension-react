import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"

function App() {
  // const [count, setCount] = useState(0)
  const [color, setColor] = useState("#bfdbfe")

  const handleClick = async () => {
    const [tab] = await chrome.tabs.query({ active: true })

    chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      args: [color],
      func: (color) => {
        // alert("Hello from my extension!")
        document.body.style.backgroundColor = color
      },
    })
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div className="operation">
          <input
            type="color"
            onChange={(e) => setColor(e.currentTarget.value)}
            value={color}
          />

          <button onClick={handleClick}>🎨 Change</button>
          {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        </div>
        <div className="tips">
          <p>1. Click on the color palette to select a color</p>
          <p>2. Click the Change button</p>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
