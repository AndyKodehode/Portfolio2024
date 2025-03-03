import Image from "next/image";
import { ProjectSectionOne, ProjectSectionTwo, ProjectSectionThree, ProjectSectionFour } from "../../components/home/projectsSection";
import { BidragsKort } from "../../components/home/bidragKort";
import chrome from "/public/chrome.svg"
import usersRound from "/public/usersRound.svg"
import UIikon from "/public/UIikon.svg"
import MegCrop5 from "/public/MegCrop5.jpg"
import MobileIcon from "/public/MobileIcon.svg"
import kodeIkon from "/public/kodeIkon.svg"
import Colloseum from "/public/Colloseum.jpg"
import MobilIkon2 from "/public/MobilIkon2.svg"
import { SeMerBtn } from "../../components/navigation/buttons";
import FigmaSirkel from "/public/FigmaSirkel.svg"
import JsSirkel from "/public/JsSirkel.svg"
import ReactSirkel from "/public/ReactSirkel.svg"
import AISirkel from "/public/AISirkel.svg"
import Vue2 from "/public/Vue2.svg"
import { OmMegBtn } from "../../components/navigation/buttons";
import { Programme } from "../../components/home/programmes";
import Link from "next/link";
import "./globals.css";



export default function Home() {
  return (
    <main className="flex flex-col gap-20 items-center min-h-screen p-0 w-screen pb-20" >
          
          
          
          <div className="flex flex-col items-center justify-center lg:w-10/12 w-screen sm:w-11/12 gap-40 lg:pt-20 md:pt-12 pt-7">

                <div className="flex flex-row w-full gap-10">
                      <div className="w-full items-center md:items-start lg:w-11/12  flex flex-col gap-5 lg:gap-16 lg:pt-12 md:pt-12 md:p-12 lg:p-0 ">
                            <div className="flex flex-col lg:gap-12 items-center lg:items-start md:items-start">
                              <h1 className="lg:text-[120px] text-[60px] ">Anders</h1>
                              <h1 className="lg:text-[120px] text-[60px] ">Hausvik</h1>
                            </div>

                            <div className="flex flex-col items-center md:items-start lg:gap-2">
                                <h2 className="font-light lg:text-[40px] text-[24px]">Web og mobildesign</h2>
                                <p className="lg:text-[30] lg:pb-12 md:pb-7 p-5 md:p-0 text-center md:text-left">
                                Junior UX designer med erfaring fra front-end og prosjektledelse 
                                </p>

                                

                                <Link
                                  href="/omMeg"
                                  aria-label="mer info om hvem jeg er"
                                  
                                  >
                                  <OmMegBtn/>
                               </Link>

                            </div>
                      </div>

                      <div className="hidden sm:flex flex-col w-full items-end pr-7 " >
                        <Image
                        alt="bilde av meg selv"
                        src={MegCrop5}
                        width={200}
                        height={200}
                        className="w-4/6 h-full object-cover"
                        
                        />
                      </div>

                </div>

            <div className="flex flex-col gap-10 w-full">

                  <div className=" flex flex-col justify-center items-center md:items-start md:justify-left gap-4 w-full md:w-3/6 md:pl-10 p-7 lg:p-0 lg:pb-12">
                        <div className="text-center md:text-left ">
                          <h1>Arbeid</h1>
                        </div>

                        <div className="text-center md:text-left">
                          <p>
                          En oversikt over mine prosjekter og arbeid fra praksisperiode i Kodeverket Bergen og fra andre prosjekter.
                          </p>
                        </div>
                  </div>

                  <div className="w-full flex flex-col items-center gap-20">

                    <ProjectSectionOne/>
                    <ProjectSectionFour/>
                    <ProjectSectionTwo/>
                    

                  </div>



            </div>


            <div className="flex flex-col justify-center gap-10">
                <div className="flex flex-col items-center w-full gap-2 p-4 md:p-0 text-center">
                  <h1>Hva kan jeg bidra med?</h1>
                  <p> 
                    I løpet av mine studier og prosjekter har jeg tilegnet meg ferdigheter og erfaring i et bredt spekter av fagområder
                  </p>
                </div>
                <div className="flex flex-wrap gap-20 justify-center">
                  <BidragsKort bilde={UIikon} tittel="Ui Design" tekst="Design for både websider og apper I Figma"/>
                  <BidragsKort bilde={usersRound} tittel="Prosjektledelse" tekst="Jeg kan holde den røde tråden, lage tidsrammer og sette opp workshops"/>
                  <BidragsKort bilde={MobilIkon2} tittel="Mobil utvikling" tekst="Tatt del i alle prosesser med mobilutvikling, både design og utvikling"/>
                  <BidragsKort bilde={kodeIkon} tittel="Junior utvikling"  tekst="Har mye erfaring med HTML, CSS, JS og React/Next"/>
                  <BidragsKort bilde={chrome} tittel="logo" tekst="Kan lage logoer og illustrasjoner i Illustrator "/>
                </div>
            </div>

            <div className="flex flex-col gap-16">
                <h1 className="text-center">Programmer jeg har erfaring med</h1>
                  <div className="w-full flex flex-wrap lg:flex-row justify-center gap-10">
                    <Programme image={FigmaSirkel} title='Figma' />
                    <Programme image={JsSirkel} title='Javascript'/>
                    <Programme image={ReactSirkel} title='React'/>
                    <Programme image={AISirkel} title='Illustrator'/>
                    <Programme image={Vue2} title='Vue'/>
                  
                  </div>
             </div>

            <div className="w-screen md:w-full flex flex-col gap-10">
               <h1 className="text-center">Min reise</h1>
                  <div className="sm:w-full w-screen flex flex-col items-center lg:flex-row gap-20">
                      <div className="flex justify-center items-center w-screen md:w-10/12 md:h-full lg:h-96 md:w-full lg:w-full bg-portfolio-primary-blue md:rounded-md md:p-7 p-12">

                                <div className="w-5/6 h-5/6 md:w-4/6 lg:w-5/6 md:shadow-xl">
                                      <Image 
                                        alt="bilde av valg for brukeren"
                                        src={Colloseum}
                                        width={400}
                                        height={300}
                                        className="w-full h-full  object-cover md:object-contain lg:object-cover shadow-2xl"
                                      ></Image>
                                </div>
                      </div>

                      <div className="flex flex-col w-full justify-center md:gap-10  gap-4 p-7 md:p-0 md:w-10/12">
                          <div>
                                <p className="w-11/12 md:w-full pb-2 ">
                                Jeg startet i 2019/20 med å lære med Indesign og Adobe XD.
                                Siden den gang har jeg jobbet meg gjennom både kodekurs, bøker og diverse kurs online, i tillegg til de praktiske prosjektene. 

                                </p>
                          </div>
                          <Link
                                  href="/minReise"
                                  aria-label="mer info om hvem jeg er"
                                  
                                  >
                          <SeMerBtn/>
                          </Link>
                      </div>


                  </div>

                 
            </div>

        

      </div>
    
    </main>
  );
}
