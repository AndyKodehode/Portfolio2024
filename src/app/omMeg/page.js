import Image from "next/image"
import MegSelv from "../../../public/MegSelv.jpg"
import Lys from "../../../public/Lys.svg"
import Target from "../../../public/Target.svg"
import Briller from "../../../public/Briller.svg"
import Books from "../../../public/Books.svg"
import AnnieSprattReise from "../../../public/AnnieSprattReise.jpg"


export default function OmMeg(){
    return(
        
        <div className="w-full flex flex-col  md:flex-row gap-20 md:items-start lg:items-end justify-end pt-10 relative ">
            
          <div className="lg:h-screen h-3/6 flex justify-center w-full md:w-4/6">
            <Image className=" lg:w-2/6 w-4/6  lg:absolute lg:top-[-70px] lg:left-0 z-20 lg:h-auto object-cover" src={MegSelv}/>
          </div>
            
            <div className="lg:w-4/6 md:w-full w-4/6 w-full flex flex-col md:p-0 p-12 lg:pl-32 ">
                    <div className="w-full flex flex-col lg:p-12 gap-7 ">
                        <div className="flex flex-col gap-3 pb-12 md:pb-0 ">
                            <h1>Hvem er jeg?</h1>
                            <p className="lg:text-[20px] text-[18px] lg:pb-12 md:pb-7  md:p-0 text-left">En rolig mann fra Bergen som brenner for design, kreativitet og utvikling</p>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4 w-full">
                            <div className="flex flex-col w-full ">
                                <h3>Hvem er jeg i teamet</h3>
                                <p className="w-5/6">Jeg er en som setter igang ting, lager planer og liker å se resultater. 
                                    Jeg liker å tenke på den røde tråden i prosjektene og se fremgang. Jeg liker å finne løsninger på utfordringer istedenfor å se problemer. 
                                    Selv om jeg er selvstendig setter jeg veldig pris på hjelp, veiledning og tilbakemeldinger fra kollegaer.</p>
                            </div>
                            <div className="flex flex-col w-full">
                                <h3>Hvem er jeg i relasjon til andre</h3>
                                <p className="w-5/6">Jeg liker å bruke litt tid på å bli kjent med folk og ta inn mine omgivelser. 
                                    Jeg er en som kan få folk til å le når de blir kjent med meg og som jeg tror folk syns det er behagelig å være rundt.</p>
                            </div>
                        </div>

                        <div className="w-full flex flex-col items-center pt-16  pr-12 gap-12">
                            <h3>Mine styrker</h3>
                           <div className="w-full flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-evenly items-center gap-12 lg:gap-7">

                                <div className="flex flex-row md:flex-col items-center md:gap-3 gap-7 justify-center w-2/6">
                                    <Image src={Briller}/>
                                    <p className="w-full md:text-center">Ser hva andre er gode på</p>
                                </div>

                                <div className="flex flex-row md:flex-col items-center justify-center md:gap-3 gap-7 w-2/6">
                                    <Image src={Books}/>
                                    <p className="w-4/6 md:text-center">Liker å lære nye ting</p>
                                </div>

                                <div className="flex flex-row md:flex-col items-center justify-center md:gap-3 gap-7 w-2/6">
                                    <Image src={Lys}/>
                                    <p className="w-4/6 md:text-center">Kreativ og løsningsorientert</p>
                                </div>

                                <div className="flex flex-row md:flex-col items-center justify-center md:gap-3 gap-7 w-2/6">
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