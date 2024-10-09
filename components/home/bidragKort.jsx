
import Image from "next/image"

export function BidragsKort({bilde, tittel, tekst}){

    return(
        <div className=" flex flex-col items-center justify-center w-60 lg:w-80 h-52  rounded-md shadow-lg border-solid border-2 p-4 gap-2">
              <Image 
                  alt="bilde av valg for brukeren"
                  src={bilde}
                  width={75}
                  height={75}
                  className=" w-3/12 lg:w-2/12 md:w-3/12"
                ></Image>
                <h3>{tittel}</h3>
                <p className="w-5/6 text-center">{tekst}</p>

        </div>
    )
}