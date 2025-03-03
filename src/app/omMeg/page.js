import Image from "next/image"
import MegSelv from "/public/MegSelv.jpg"
import Lys from "/public/Lys.svg"
import Target from "/public/Target.svg"
import Briller from "/public/Briller.svg"
import Books from "/public/Books.svg"
import { AboutIcon } from "../../../components/omComp/iconSection"
import AnnieSprattReise from "../../../public/AnnieSprattReise.jpg"



export default function OmMeg(){
    return(
        
        <div className="w-full flex flex-col  md:flex-row gap-20 md:items-start lg:items-end justify-end pt-10  lg:h-full  ">
            
          <div className="lg:h-full h-3/6 flex justify-center w-full md:w-4/6 sm:z-20">
            <Image className=" lg:w-2/6 w-5/6 lg:p-0 p-4  lg:absolute lg:top-[-24px] lg:left-0  lg:h-[900px] object-cover" src={MegSelv}/>
          </div>
            
            <div className="md:w-full w-4/6 w-full flex flex-col md:p-0 px-12  ">
                    <div className="w-full flex flex-col lg: pl-12 pr-12 gap-7 ">
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

                        <div className="w-full flex flex-col items-center  pr-12  gap-12">
                            <h3>Mine styrker</h3>
                           <div className="w-full flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-evenly items-center gap-12 lg:gap-7">

                                 <AboutIcon image={Briller} text="ser hva andre er god på"/>
                                 <AboutIcon image={Books} text="Liker å lære nye ting"/>
                                 <AboutIcon image={Lys} text="Kreativ og løsningsorientert"/>
                                 <AboutIcon image={Target} text="Målrettet, liker å se resultater"/>
                                 
                           </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}