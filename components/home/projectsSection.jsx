import Image from "next/image"
import AppMockUp from "../../public/AppMockUp.png"
import KodehodeMain from "../../public/KodehodeMain.png"
import KodehodeValg from "../../public/KodehodeValg.png"
import Hawii2 from "../../public/Hawii2.png"
import HawiiAvlang from "../../public/HawiiAvlang.png"
import { SeMerBtn } from "../navigation/buttons"
import Link from "next/link"
import Kelly from "../../public/kelly-sikkema.jpg"
import Kodehode from "../../public/Kodehode.svg"
import Kodeloftet from "../../public/Kodeloftet.svg"
import LogoIbruk2 from "../../public/LogoIbruk2.png"


export function ProjectSectionOne(){
    return(
        <div className="flex items-center w-screen lg:w-full md:w-11/12 sm:w-full flex flex-col lg:flex-row lg:gap-20 gap-5">
           <div className="flex justify-center w-screen md:w-11/12 md:w-full lg:w-3/6 bg-portfolio-primary-blue p-4 md:rounded-md">
             <div>
              <Image 
               alt="bilde av meg selv"
               src={AppMockUp}
               width={200}
               height={200}
               className="w-5/6 h-full object-cover pl-12"
              ></Image>
             </div>
           
           </div>

           <div className="flex flex-col w-full lg:w-2/6 md:gap-2  gap-4 p-7 md:p-0">
              <h2>Fontenehus App</h2>
                <p className="w-11/12 md:w-full lg:pb-7">
                App for Fontenehuset Bergen, hvor brukere skal kunne finne dagens plan, dagens lunsj og oversikt over turer.
                </p>
                <Link
                  href="/fontenehuset"
                  aria-label="mer info om hvem jeg er"
                                >
                  <SeMerBtn/>
                 </Link>
                
           </div>

        </div>

    )
}


export function ProjectSectionTwo(){
  return(
      <div className="flex items-center w-screen lg:w-full md:w-11/12 sm:w-full flex flex-col lg:flex-row lg:gap-20 gap-5 ">
         <div className="flex justify-center h-80 items-center w-screen md:w-11/12 lg:h-80 md:w-full lg:w-3/6 bg-white md:rounded-md md:p-7 shadow-md">

             <div className="flex justify-center  lg:w-full lg:h-5/6 w-5/6 h-5/6 md:w-4/6 md:h-5/6  ">
              <Image 
               alt="bilde av valg landinghero"
               src={LogoIbruk2}
               width={400}
               height={100}
               className="w-full object-cover  "
              ></Image>
             </div>
         </div>

         <div className="flex flex-col w-full lg:w-2/6 md:gap-2  gap-4 p-7 md:p-0">
            <h2>Logo</h2>
              <p className="w-11/12 md:w-full lg:pb-7">
               Jeg har laget noen logoer for prosjekter jeg har deltatt i, her er noen av dem
              </p>
              <Link
                  href="/logo"
                  aria-label="mer info om hvem jeg er"
                                >
                  <SeMerBtn/>
              </Link>
              
         </div>

      </div>

  )
}



export function ProjectSectionThree(){
  return(
      <div className="flex items-center w-screen lg:w-full sm:w-full flex flex-col lg:flex-row lg:gap-20 gap-5">
         <div className="flex justify-center md:h-96 h-80 items-center w-screen p-0 md:w-11/12 lg:h-80 md:w-11/12 lg:w-3/6 bg-portfolio-primary-green md:rounded-md md:p-7 lg:pt-12">

                <div className=" w-5/6 lg:w-5/6 lg:h-full md:h-5/12 md:w-4/6  ">
                  <Image 
                    alt="bilde av valg for brukeren"
                    src={Hawii2}
                    layout="responsive"
                    width={400}
                    height={300}
                    className="w-full h-full lg:w-5/6 object-contain md:object-cover "
                  ></Image>
                </div>
          </div>

         <div className="flex flex-col md:w-11/12 w-full lg:w-2/6 md:gap-2  gap-4 p-7 md:p-0">
            <h2>Hawii Analyse</h2>
              <p className="w-11/12 md:w-full lg:pb-7">
              Landingsside for Hawii analyse, et analysefirma for boligutbyggere, som viser verktøy og verdi av tjenestene for Hawii sine kunder.
 
              </p>
              <Link
                  href="/hawii"
                  aria-label="mer info om hvem jeg er"
                                >
                  <SeMerBtn/>
              </Link>
         </div>

      </div>

  )
}