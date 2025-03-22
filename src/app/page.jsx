"use client"
import { useState } from "react"
export default function Page() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return <>
  
  <div className="bg-black text-white h-screen py-4 px-5 flex flex-col justify-center items-center">

      <h1 className="text-[40px] mb-2">{count}</h1>
    <h1 className="text-3xl font-bold">NEXT<span className="text-[#1384FD]">COUNTER</span></h1>


    <div className="flex justify-center items-center mt-5 gap-5">
    <button onClick={increment} className="bg-[#1384FD] px-3 py-1.5 rounded hover:cursor-pointer hover:scale-[1.1] transition-all">Increment</button>
    <button onClick={decrement} className="bg-[#E22336] px-3 py-1.5 rounded  hover:cursor-pointer hover:scale-[1.1] transition-all">Decrement</button>
    </div>

  </div>

  </>
}
