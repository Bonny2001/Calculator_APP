import { useState, useEffect } from 'react'

function App() {
  const [display, setDisplay] = useState("")

  const handleClick = (value) => {
    if (value === "C" || value === "Escape") {
      setDisplay("")
    } else if (value === "Del" || value === "Backspace") {
      setDisplay(display.slice(0, -1))
    } else if (value === "=" || value === "Enter") {
      try {
        setDisplay(eval(display).toString())
      } catch {
        setDisplay("Error")
      }
    } else if ("0123456789+-*/.%".includes(value)) {
      setDisplay(display + value)
    }
  }

  // Handle keyboard input
  useEffect(() => {
    const handleKeyPress = (e) => {
      handleClick(e.key)
    }
    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [display])

  return (
    <>
      <style>@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);</style>

      <div className="min-w-screen min-h-screen bg-blue-900 flex items-center justify-center px-5 py-5">
        <div
          className="w-full mx-auto rounded-xl bg-gray-100 shadow-xl shadow-blue-600 text-gray-800 relative overflow-hidden"
          style={{ maxWidth: "300px" }}
        >
          {/* Display */}
          <div className="w-full h-40 bg-gradient-to-b from-gray-800 to-gray-700 flex items-end text-right">
            <div className="w-full py-5 px-6 text-6xl text-white font-thin break-all">{display}</div>
          </div>

          {/* Buttons */}
          <div className="w-full bg-gradient-to-b from-indigo-400 to-indigo-500">

            {/* Row 1 */}
            <div className="flex w-full">
              <button onClick={() => handleClick("C")} className="w-1/4 h-16 border-r border-b border-indigo-400 hover:bg-indigo-700 text-white text-xl">C</button>
              <button onClick={() => handleClick("Del")} className="w-1/4 h-16 border-r border-b border-indigo-400 hover:bg-indigo-700 text-white text-xl">Del</button>
              <button onClick={() => handleClick("%")} className="w-1/4 h-16 border-r border-b border-indigo-400 hover:bg-indigo-700 text-white text-xl">%</button>
              <button onClick={() => handleClick("/")} className="w-1/4 h-16 border-b border-indigo-400 hover:bg-indigo-700 text-white text-xl">/</button>
            </div>

            {/* Row 2 */}
            <div className="flex w-full">
              <button onClick={() => handleClick("7")} className="w-1/4 h-16 border-r border-b border-indigo-400 hover:bg-indigo-700 text-white text-xl">7</button>
              <button onClick={() => handleClick("8")} className="w-1/4 h-16 border-r border-b border-indigo-400 hover:bg-indigo-700 text-white text-xl">8</button>
              <button onClick={() => handleClick("9")} className="w-1/4 h-16 border-r border-b border-indigo-400 hover:bg-indigo-700 text-white text-xl">9</button>
              <button onClick={() => handleClick("*")} className="w-1/4 h-16 border-b border-indigo-400 hover:bg-indigo-700 text-white text-xl">*</button>
            </div>

            {/* Row 3 */}
            <div className="flex w-full">
              <button onClick={() => handleClick("4")} className="w-1/4 h-16 border-r border-b border-indigo-400 hover:bg-indigo-700 text-white text-xl">4</button>
              <button onClick={() => handleClick("5")} className="w-1/4 h-16 border-r border-b border-indigo-400 hover:bg-indigo-700 text-white text-xl">5</button>
              <button onClick={() => handleClick("6")} className="w-1/4 h-16 border-r border-b border-indigo-400 hover:bg-indigo-700 text-white text-xl">6</button>
              <button onClick={() => handleClick("-")} className="w-1/4 h-16 border-b border-indigo-400 hover:bg-indigo-700 text-white text-xl">-</button>
            </div>

            {/* Row 4 */}
            <div className="flex w-full">
              <button onClick={() => handleClick("1")} className="w-1/4 h-16 border-r border-b border-indigo-400 hover:bg-indigo-700 text-white text-xl">1</button>
              <button onClick={() => handleClick("2")} className="w-1/4 h-16 border-r border-b border-indigo-400 hover:bg-indigo-700 text-white text-xl">2</button>
              <button onClick={() => handleClick("3")} className="w-1/4 h-16 border-r border-b border-indigo-400 hover:bg-indigo-700 text-white text-xl">3</button>
              <button onClick={() => handleClick("+")} className="w-1/4 h-16 border-b border-indigo-400 hover:bg-indigo-700 text-white text-xl">+</button>
            </div>

            {/* Row 5 */}
            <div className="flex w-full">
              <button onClick={() => handleClick("0")} className="w-1/4 h-16 border-r border-indigo-400 hover:bg-indigo-700 text-white text-xl">0</button>
              <button onClick={() => handleClick(".")} className="w-1/4 h-16 border-r border-indigo-400 hover:bg-indigo-700 text-white text-xl">.</button>
              <button onClick={() => handleClick("=")} className="w-2/4 h-16 border-indigo-400 hover:bg-indigo-700 text-white text-xl">=</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
