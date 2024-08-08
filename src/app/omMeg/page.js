import Image from "next/image"
import MegSelv from "../../../public/MegSelv.jpg"


export default function OmMeg(){
    return(
        <div className="w-full flex flex-row gap-20">
            <div className="w-2/6 h-full z-10">
               <Image src={MegSelv}/>
            </div>

            <div className="w-3/6 flex flex-col p-12">
                <h1>Hvem er jeg?</h1>
                <p className="lg:text-[30] lg:pb-12 md:pb-7 p-5 md:p-0 text-center md:text-left">En rolig mann fra Bergen som brenner for design, kreativitet og utvikling</p>
                <div className="flex flex-row gap-2">
                    <div className="flex flex-col w-full ">
                        <h3>Hvem er jeg i teamet</h3>
                        <p className="w-4/6">Jeg er den som setter igang ting, lager planer og liker å se resultater. 
                            Jeg liker å tenke på den røde tråden i prosjektene og se fremgang. Jeg liker å finne løsninger på utfordringer istedenfor å se problemer. 
                            Selv om jeg er selvstendig setter jeg veldig pris på hjelp, veiledning og tilbakemeldinger fra kollegaer.</p>
                    </div>
                    <div className="flex flex-col w-full">
                        <h3>Hvem er jeg i relasjon til andre</h3>
                        <p className="w-full">Jeg liker å bruke litt tid på å bli kjent med folk og ta inn mine omgivelser. 
                            Jeg er en som kan få folk til å le når de blir kjent med meg og som jeg tror folk syns det er behagelig å være rundt.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}