import Image from "next/image"

export function AboutIcon({image, text}){

    return(
        <div className="flex flex-row md:flex-col items-center md:gap-3 gap-7 justify-center  p-4 rounded-md h-48 w-48 shadow-md">
            <div className="flex h-24 items-center">
              <Image src={image}/>
            </div>
            <div className="flex items-start h-16">
              <p className="min-w-24 md:text-center">{text}</p>
            </div>
      </div>
    )
}