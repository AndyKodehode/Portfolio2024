import Image from "next/image";
import { NavBar } from "../../components/navigation/navbar";
import { ProjectSectionOne, ProjectSectionTwo, ProjectSectionThree } from "../../components/home/projectsSection";
import { BidragsKort } from "../../components/home/bidragKort";
import chrome from "../../public/chrome.svg"
import usersRound from "../../public/usersRound.svg"
import UIikon from "../../public/UIikon.svg"
import MegCrop5 from "../../public/MegCrop5.jpg"
import MobileIcon from "../../public/MobileIcon.svg"
import kodeIkon from "../../public/kodeIkon.svg"
import Colloseum from "../../public/Colloseum.jpg"
import { SeMerBtn } from "../../components/navigation/buttons";
import FigmaSirkel from "../../public/FigmaSirkel.svg"
import JsSirkel from "../../public/JsSirkel.svg"
import ReactSirkel from "../../public/ReactSirkel.svg"
import AISirkel from "../../public/AISirkel.svg"
import { OmMegBtn } from "../../components/navigation/buttons";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 items-center min-h-screen p-0 w-screen pb-20" >
          <NavBar/>
          
          
          <div className="flex flex-col items-center justify-center lg:w-10/12 w-screen sm:w-11/12 gap-40 lg:pt-20">

                <div className="flex flex-row w-full gap-10">
                      <div className="w-full items-center md:items-start lg:w-10/12  flex flex-col lg:gap-16 lg:pt-12 ">
                            <div className="flex flex-col lg:gap-12 items-center lg:items-start">
                              <h1 className="lg:text-[120px] text-[60px]">Anders</h1>
                              <h1 className="lg:text-[120px] text-[60px]">Hausvik</h1>
                            </div>

                            <div className="flex flex-col items-center md:items-start gap-2">
                                <h2 className="font-light lg:text-[40px] text-[24px]">Web og mobildesign</h2>
                                <p className="lg:text-[30] lg:pb-12 p-5 md:p-0 text-center md:text-left">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Eaque dolorem blanditiis qui illo animi eveniet saepe quidem debitis, rerum delectus repellendus. 
                                </p>

                                <OmMegBtn/>

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

                  <div className=" flex flex-col justify-left gap-4 w-5/6 md:w-3/6 md:pl-10 pl-6 lg:p-0 lg:pb-12">
                        <div >
                          <h1>Prosjekter</h1>
                        </div>

                        <div>
                          <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                          Eaque dolorem blanditiis qui illo animi eveniet saepe quidem debitis, rerum delectus repellendus. 
                          Maiores itaque cupiditate similique officiis sequi alias. Assumenda, cumque. 
                          </p>
                        </div>
                  </div>

                  <div className="w-full flex flex-col items-center gap-20">

                    <ProjectSectionOne/>
                    <ProjectSectionTwo/>
                    <ProjectSectionThree/>

                  </div>



            </div>


            <div className="flex flex-col justify-center gap-10">
                <div className="flex flex-col items-center w-full gap-2 p-4 md:p-0 text-center">
                  <h1>Hva kan jeg bidra med?</h1>
                  <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <div className="flex flex-wrap gap-20 justify-center">
                  <BidragsKort bilde={UIikon} tittel="Ui Design"/>
                  <BidragsKort bilde={usersRound} tittel="Prosjektledelse"/>
                  <BidragsKort bilde={MobileIcon} tittel="Mobil utvikling"/>
                  <BidragsKort bilde={kodeIkon} tittel="Junior utvikling"/>
                  <BidragsKort bilde={chrome} tittel="logo og illustrasjoner"/>
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
                                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                  Eaque dolorem blanditiis qui illo animi eveniet saepe quidem debitis, rerum delectus repellendus. 
                                  Maiores itaque cupiditate similique officiis sequi alias. Assumenda, cumque. 
                                </p>
                          </div>
                          <SeMerBtn/>
                      </div>


                  </div>

                 
            </div>

            <div className="flex flex-col gap-16">
                <h1 className="text-center">Programmer jeg kan</h1>
                  <div className="w-full flex flex-wrap lg:flex-row justify-center gap-10">
                      <div className="w-40 flex flex-col gap-4 items-center">
                          <div>
                                    <Image 
                                        alt="bilde av valg for brukeren"
                                        src={FigmaSirkel}
                                        width={100}
                                        height={100}
                                      ></Image>
                                
                         </div>
                          <div>
                             <h4>Figma</h4>
                          </div>
                      </div>

                      <div className=" w-40 flex flex-col gap-4 items-center ">
                        <div>
                                      <Image 
                                          alt="bilde av valg for brukeren"
                                          src={JsSirkel}
                                          width={100}
                                          height={100}
                                        ></Image>
                                  
                          </div>
                        <div>
                          <h4>Javascript</h4>
                        </div>
                      </div>

                      <div className="w-40 flex flex-col gap-4 items-center">
                          <div>
                                    <Image 
                                            alt="bilde av valg for brukeren"
                                            src={ReactSirkel}
                                            width={100}
                                            height={100}
                                    ></Image>
                                    
                            </div>
                        <div>
                          <h4>React</h4>
                        </div>
                      </div>

                      <div className="w-40 flex flex-col gap-4 items-center">
                           <div>
                                    <Image 
                                        alt="bilde av valg for brukeren"
                                        src={AISirkel}
                                        width={100}
                                        height={100}
                                      ></Image>
                                
                           </div>
                        <div>
                           <h4>Illustrator</h4>
                        </div>
                      </div>
                  </div>
             </div>

      </div>
    
    </main>
  );
}
