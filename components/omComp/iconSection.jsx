import Image from "next/image"

export function AboutIcon({image, text}){

    return(
        <div className="flex flex-col items-center md:gap-3 gap-7 justify-center  p-4 rounded-md h-48 w-48 shadow-md">
            <div className="md:flex h-12 md:h-24 md:items-center ">
              <Image src={image}/>
            </div>
            <div className="md:flex md:items-start md:h-16">
              <p className="min-w-24 text-center">{text}</p>
            </div>
      </div>
    )
}