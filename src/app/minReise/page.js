import Image from "next/image"
import AnnieSprettReise from "../../../public/AnnieSprattReise.jpg"
import { YearCard } from "../../../components/minReiseComp/yearSection"
import Colloseum from "/public/Colloseum.jpg"
import TipCalculator from "/public/TipCalculator.jpg"
import InnsiktLav from "/public/InnsiktLav.png"
import Hawii2 from "/public/Hawii2.png"
import { Carousel } from "../../../components/minReiseComp/carousel"



export default function MinReise(){
    return(

        <div className="p-12 flex flex-col gap-24 items-center">
                <div className="flex lg:flex-row flex-col lg:w-5/6 w-full justify-center items-center  pb-24 gap-12">
                    <div className=" w-full">
                        <Image className="lg:w-5/6" src={AnnieSprettReise}/>
                    </div>
                    <div className=" w-3/6 flex flex-col lg:items-start items-center gap-12">
                        <h1>Min reise</h1>
                        <p className="text-center lg:text-start">
                            Gjennom 4 år har jeg jobbet for å utvikle meg både som designer og utvikler.
                            Jeg har prøvd å lære meg ting både på egenhånd og gjennom kurs.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col w-5/6 lg:gap-40 gap-12 p-4 ">
                    <div className="flex lg:flex-row lg:items-stretch flex-col lg:justify-center lg:items-start items-center lg:gap-24 gap-12 w-full">
                      <YearCard bilde={Colloseum} tittel="2020" undertittel="XD, Adobe og steaming-prosjekt" tekst="Jeg startet å teste ut webdesign og UX i 2020 ved å lære meg XD, blant annet laget jeg layout for en streaming-service som et eget prosjekt "/>
                      <YearCard bilde={TipCalculator} tittel="2021" undertittel="Kodehode, Front-end og Figma" tekst="Jeg flyttet tilbake til Bergen og tok etterhvert front-end kurs kalt Kodehode hvor jeg lærte front-end og Figma, før dette hadde jeg også tatt kurs gjennom Interaction Design Foundation"/>
                     
                    </div >

                    <div className="flex lg:flex-row lg:items-stretch flex-col lg:justify-center lg:items-start items-center lg:gap-24 gap-12 w-full">
                      <YearCard bilde={InnsiktLav} tittel="2022" undertittel="Fontenehuset, app og brukerundersøkelser" tekst="Som et praksisprosjekt i Kodehode begynte jeg på første utgaven for Fontenehus-appen, jeg fikk erfaring med React Native, brukertesting og innsiktsarbeid"/>
                      <YearCard bilde={Hawii2} tittel="2023" undertittel="Kodeverket, teamarbeid og reelle prosjekt" tekst="Her fikk jeg erfaring med å jobbe tett sammen med andre, diskutere design, kode og jobbe ut mot reelle kunder"/>    
                    </div>

                </div>

                {/* <Carousel bilde={Hawii2}/> */}
        </div>
    )
}