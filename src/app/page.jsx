export default function Page() {
  return <>
  
  <div className="bg-black text-white h-screen py-4 px-5 flex flex-col justify-center items-center">

    <h1 className="text-3xl font-bold">NEXT<span className="text-[#1384FD]">COUNTER</span></h1>

    <div className="flex justify-center items-center mt-5 gap-5">
    <button className="bg-[#1384FD]">Increment</button>
    <button className="bg-[#1384FD]">Decrement</button>
    </div>

  </div>

  </>
}
