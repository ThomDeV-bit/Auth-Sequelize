'use client';
import React from "react"
import Image from "next/image";

export default function Home() {
  const [count, setCount] = React.useState(0)
  return (
    <main className="flex justify- min-h-screen justify-between p-24 bg-gradient-to-r from-cyan-500 to-blue-500  ">
      

      <section className=" text-center">
      <div className="">
      <img 
      src="./favicon.ico"
      alt="Landscape picture"/>
      </div>
        <h1> Sing In</h1>
        <div className="flex flex-col border border-sky-800 bg- p-5 rounded-lg">
        <form className="flex flex-col  gap-2 " onSubmit={(e) => {
          e.preventDefault();
          console.log('funcionou')
        }}>
          <input className="bg-transparent border border-black  rounded-lg placeholder-white p-1 " placeholder="User" type="text" name="User Name" value="" />
          <input className="bg-transparent border border-black  rounded-lg placeholder-white p-1 " placeholder="Passowrd" type="text" name="Passowrd" value="" />

          <button className="bg-blue-900" type="submit">Enviar</button>
        </form>
      </div>
      </section>
      
    </main>
  )
}
