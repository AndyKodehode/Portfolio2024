import Image from "next/image"

export function YearCard({bilde, tittel, undertittel, tekst}){
    return(
        <div className="lg:w-4/6 min-h-full flex flex-col gap-4 p-12 shadow-lg rounded-2xl">
          <h1>{tittel}</h1>
          <h2 className="font-normal">{undertittel}</h2>
          <Image  src={bilde}/>
          <p>{tekst}</p>
        </div>
    )
}