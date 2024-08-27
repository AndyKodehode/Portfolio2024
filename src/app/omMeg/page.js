import Image from "next/image"
import MegSelv from "../../../public/MegSelv.jpg"
import Lys from "../../../public/Lys.svg"
import Target from "../../../public/Target.svg"
import Briller from "../../../public/Briller.svg"
import Books from "../../../public/Books.svg"


export default function OmMeg(){
    return(
        <div className="w-full flex flex-col md:flex-row gap-20 items-center">
            <div className="md:w-2/6 w-5/6 md:h-full z-10 pt-12">
               <Image src={MegSelv}/>
            </div>
            
            <div className="md:w-4/6 w-full flex flex-col ">
                    <div className="w-full flex flex-col p-12 gap-7">
                        <div className="flex flex-col gap-3">
                            <h1>Hvem er jeg?</h1>
                            <p className="lg:text-[20px] lg:pb-12 md:pb-7 p-5 md:p-0 text-left">En rolig mann fra Bergen som brenner for design, kreativitet og utvikling</p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 w-full">
                            <div className="flex flex-col w-full ">
                                <h3>Hvem er jeg i teamet</h3>
                                <p className="w-5/6">Jeg er den som setter igang ting, lager planer og liker å se resultater. 
                                    Jeg liker å tenke på den røde tråden i prosjektene og se fremgang. Jeg liker å finne løsninger på utfordringer istedenfor å se problemer. 
                                    Selv om jeg er selvstendig setter jeg veldig pris på hjelp, veiledning og tilbakemeldinger fra kollegaer.</p>
                            </div>
                            <div className="flex flex-col w-full">
                                <h3>Hvem er jeg i relasjon til andre</h3>
                                <p className="w-5/6">Jeg liker å bruke litt tid på å bli kjent med folk og ta inn mine omgivelser. 
                                    Jeg er en som kan få folk til å le når de blir kjent med meg og som jeg tror folk syns det er behagelig å være rundt.</p>
                            </div>
                        </div>

                        <div className="w-full flex flex-col items-center pt-16 pr-12 gap-12">
                            <h3>Mine styrker</h3>
                           <div className="w-full flex flex-col md:flex-row justify-evenly items-center gap-12">
                                <div className="flex flex-row md:flex-col items-center md:gap-3 gap-7">
                                    <Image src={Briller}/>
                                    <p className="w-4/6 md:text-center">Ser hva andre er gode på</p>
                                </div>

                                <div className="flex flex-row md:flex-col items-center md:gap-3 gap-7">
                                    <Image src={Books}/>
                                    <p className="w-4/6 md:text-center">Liker å lære nye ting</p>
                                </div>

                                <div className="flex flex-row md:flex-coll items-center md:gap-3 gap-7">
                                    <Image src={Lys}/>
                                    <p className="w-4/6 md:text-center">Kreativ og løsningsorientert</p>
                                </div>

                                <div className="flex flex-row md:flex-col items-center md:gap-3 gap-7">
                                    <Image src={Target}/>
                                    <p className="w-4/6 md:text-center">Målrettet, liker å se resultater</p>
                                </div>
                           </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}