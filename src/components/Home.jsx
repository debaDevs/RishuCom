import React from "react"
import deba from '../assets/deba.jpg'

function Home() {
    return <div>
         <div className="">
            <img className="object-cover h-[400px] w-full" src={deba} alt="" />
         </div>
         <div className="m-6">
            <div className="text-center font-bold text-4xl text-slate-800 my-2">HEY !!</div>
            <div className="text-center font-bold text-4xl text-slate-800 my-2">RISHU HERE</div>
            <div className="text-center font-bold text-4xl text-slate-800">HIT ME UP HOMIES</div>


         </div>
    </div>
}

export default Home;