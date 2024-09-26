"use client"

import Image from "next/image"
import { useState } from "react"

export function Carousel({bilde}){

    
    return(
        <div className="w-5/6 flex justify-center items-center bg-portfolio-primary-blue p-12">
             <Image className="w-3/6" src={bilde}/>
             
        </div>
    )
}