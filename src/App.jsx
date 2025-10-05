import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'



function App() {
  const [display, setDisplay] = useState("")
  
  const handleCalc = (e)=>{ 
    e.preventDefault()
    setDisplay(e.target.value)
  }

  return (
    <>
      {/* <!-- component --> */}
      <style>@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);</style>

      <div className="min-w-screen min-h-screen bg-blue-900 flex items-center justify-center px-5 py-5">
        <div className="w-full mx-auto rounded-xl bg-gray-100 shadow-xl shadow-blue-600  text-gray-800 relative overflow-hidden" style={{ maxWidth: '300px' }}>
          <div className="w-full h-40 bg-gradient-to-b from-gray-800 to-gray-700 flex items-end text-right">
            <div className="w-full py-5 px-6 text-6xl text-white font-thin">{display} </div>
          </div>
          <div className="w-full bg-gradient-to-b from-indigo-400 to-indigo-500">
            <div className="flex w-full">
              <div className="w-1/4 border-r border-b border-indigo-400">
                <input className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light text-center caret-transparent" defaultValue="C"  onClick = {(e)=> setDisplay("")}/>
              </div>
              <div className="w-1/4 border-r border-b border-indigo-400">
                <input className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light text-center caret-transparent" defaultValue="Del"  onClick = {(e)=> setDisplay(display.slice( 0 , -1))}/>
              </div>
              <div className="w-1/4 border-r border-b border-indigo-400">
                <input className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light text-center caret-transparent" defaultValue="%"  onClick = {(e)=> setDisplay(display + e.target.value)}/>
              </div>
              <div className="w-1/4 border-r border-b border-indigo-400">
                <input className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light text-center caret-transparent" defaultValue="/"  onClick = {(e)=> setDisplay(display + e.target.value)}/>
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-1/4 border-r border-b border-indigo-400">
                <input className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light text-center caret-transparent" defaultValue="7"  onClick = {(e)=> setDisplay(display + e.target.value)}/>
              </div>
              <div className="w-1/4 border-r border-b border-indigo-400">
                <input className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light text-center caret-transparent" defaultValue="8"  onClick = {(e)=> setDisplay(display + e.target.value)}/>
              </div>
              <div className="w-1/4 border-r border-b border-indigo-400">
                <input className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light text-center caret-transparent" defaultValue="9"  onClick = {(e)=> setDisplay(display + e.target.value)}/>
              </div>
              <div className="w-1/4 border-r border-b border-indigo-400">
                <input className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light text-center caret-transparent" defaultValue="*"  onClick = {(e)=> setDisplay(display + e.target.value)}/>
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-1/4 border-r border-b border-indigo-400">
                <input className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light text-center caret-transparent" defaultValue="4"  onClick = {(e)=> setDisplay(display + e.target.value)}/>
              </div>
              <div className="w-1/4 border-r border-b border-indigo-400">
                <input className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light text-center caret-transparent" defaultValue="5"  onClick = {(e)=> setDisplay(display + e.target.value)}/>
              </div>
              <div className="w-1/4 border-r border-b border-indigo-400">
                <input className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light text-center caret-transparent" defaultValue="6"  onClick = {(e)=> setDisplay(display + e.target.value)}/>
              </div>
              <div className="w-1/4 border-r border-b border-indigo-400">
                <input className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light text-center caret-transparent" defaultValue="-"  onClick = {(e)=> setDisplay(display + e.target.value)}/>
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-1/4 border-r border-b border-indigo-400">
                <input className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light text-center caret-transparent" defaultValue="1"  onClick = {(e)=> setDisplay(display + e.target.value)}/>
              </div>
              <div className="w-1/4 border-r border-b border-indigo-400">
                <input className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light text-center caret-transparent" defaultValue="2"  onClick = {(e)=> setDisplay(display + e.target.value)}/>
              </div>
              <div className="w-1/4 border-r border-b border-indigo-400">
                <input className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light text-center caret-transparent" defaultValue="3"  onClick = {(e)=> setDisplay(display + e.target.value)}/>
              </div>
              <div className="w-1/4 border-r border-b border-indigo-400">
                <input className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light text-center caret-transparent" defaultValue="+"  onClick = {(e)=> setDisplay(display + e.target.value)}/>
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-1/4 border-r border-indigo-400">
                <input className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light text-center caret-transparent" defaultValue="0"  onClick = {(e)=> setDisplay(display + e.target.value)}/>
              </div>
              <div className="w-1/4 border-r border-indigo-400">
                <input className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light text-center caret-transparent" defaultValue="."  onClick = {(e)=> setDisplay(display + e.target.value)}/>
              </div>
              <div className="w-2/4 border-r border-indigo-400">
                <input className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light text-center caret-transparent" defaultValue="="  onClick = {(e)=> setDisplay(eval(display))}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES --> */}
      {/* <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img className="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg" />
          </a>
        </div>
      </div> */}
    </>
  )
}

export default App
