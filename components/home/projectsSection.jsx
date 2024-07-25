import Image from "next/image"
import AppMockUp from "../../public/AppMockUp.png"
import KodehodeMain from "../../public/KodehodeMain.png"
import KodehodeValg from "../../public/KodehodeValg.png"
import Hawii2 from "../../public/Hawii2.png"
import HawiiAvlang from "../../public/HawiiAvlang.png"
import { SeMerBtn } from "../navigation/buttons"
import Link from "next/link"


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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                  Eaque dolorem blanditiis qui illo animi eveniet saepe quidem debitis, rerum delectus repellendus. 
                  Maiores itaque cupiditate similique officiis sequi alias. Assumenda, cumque. 
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
      <div className="flex items-center w-screen lg:w-full md:w-11/12 sm:w-full flex flex-col lg:flex-row lg:gap-20 gap-5">
         <div className="flex justify-center h-80 items-center w-screen md:w-11/12 lg:h-80 md:w-full lg:w-3/6 bg-portfolio-primary-yellow md:rounded-md md:p-7">

             <div className="flex justify-center  lg:w-5/6 lg:h-5/6 w-5/6 h-5/6 md:w-4/6 md:h-5/6 md:shadow-xl lg:shadow-xl ">
              <Image 
               alt="bilde av valg landinghero"
               src={KodehodeMain}
               width={400}
               height={100}
               className="w-full h-full md:object-cover object-contain "
              ></Image>
             </div>
         </div>

         <div className="flex flex-col w-full lg:w-2/6 md:gap-2  gap-4 p-7 md:p-0">
            <h2>Kodehode</h2>
              <p className="w-11/12 md:w-full lg:pb-7">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Eaque dolorem blanditiis qui illo animi eveniet saepe quidem debitis, rerum delectus repellendus. 
                Maiores itaque cupiditate similique officiis sequi alias. Assumenda, cumque. 
              </p>
              <Link
                  href="/kodehode"
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Eaque dolorem blanditiis qui illo animi eveniet saepe quidem debitis, rerum delectus repellendus. 
                Maiores itaque cupiditate similique officiis sequi alias. Assumenda, cumque. 
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