import Image from "next/image"

export function YearCard({bilde}){
    return(
        <div className="w-4/6">
          <Image src={bilde}/>
        </div>
    )
}