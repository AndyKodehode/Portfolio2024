import Image from "next/image"

export function YearCard({bilde, tittel, undertittel, tekst}){
    return(
        <div className="w-4/6 flex flex-col gap-4">
          <h1>{tittel}</h1>
          <h2 className="font-normal">{undertittel}</h2>
          <Image  src={bilde}/>
          <p>{tekst}</p>
        </div>
    )
}