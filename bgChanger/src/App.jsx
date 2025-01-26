import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
   <div className='w-full h-screen duration-200' style= {{backgroundColor: color}}> 
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
         <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-6 py-4 rounded-xl font-bold'>
          <button className='outline-none px-5 py-2 rounded-full text-white shadow-lg cursor-pointer' style={{backgroundColor: "red"}} onClick={ () => setColor("red")}>
            Red
          </button>
          <button className='outline-none px-5 py-2 rounded-full text-white shadow-lg cursor-pointer' style={{backgroundColor: " green"}} onClick={ () => setColor("green")}>
            Green
          </button>
          <button className='outline-none px-5 py-2 rounded-full text-white shadow-lg cursor-pointer' style={{backgroundColor: "blue"}} onClick={ () => setColor("blue")}>
            Blue
          </button>
          <button className='outline-none px-5 py-2 rounded-full text-white shadow-lg cursor-pointer' style={{backgroundColor: "olive"}} onClick={ () => setColor("olive")}>
            Olive
          </button>
          <button className='outline-none px-5 py-2 rounded-full text-white shadow-lg cursor-pointer' style={{backgroundColor: "gray"}} onClick={ () => setColor("gray")}>
          Gray
          </button>
          <button className='outline-none px-5 py-2 rounded-full text-white shadow-lg cursor-pointer' style={{backgroundColor: "yellow"}} onClick={ () => setColor("yellow")}>
            Yellow
          </button>
          <button className='outline-none px-5 py-2 rounded-full text-white shadow-lg cursor-pointer' style={{backgroundColor: "pink"}} onClick={ () => setColor("pink")}>
            Pink
          </button>
          <button className='outline-none px-5 py-2 rounded-full text-white shadow-lg cursor-pointer' style={{backgroundColor: "purple"}} onClick={ () => setColor("purple")}>
            Purple
          </button>
          <button className='outline-none px-5 py-2 rounded-full text-white shadow-lg cursor-pointer' style={{backgroundColor: "black"}} onClick={ () => setColor("black")}>
            black
          </button>
          {/* <button className='outline-none px-5 py-2 rounded-full text-white shadow-lg' style={{backgroundColor: "lawender"}} onClick={ () => setColor("lawender")}>
            Lawender
          </button> */}
         </div>
    </div>
    </div>
  )
}

export default App
