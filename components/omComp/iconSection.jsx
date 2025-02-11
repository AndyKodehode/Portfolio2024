import Image from "next/image"

export function AboutIcon({image, text}){

    return(
        <div className="flex flex-row md:flex-col items-center md:gap-3 gap-7 justify-center w-2/6  p-4 rounded-md h-48 w-48 shadow-md">
            <Image src={image}/>
            <p className="min-w-24 md:text-center">{text}</p>
      </div>
    )
}