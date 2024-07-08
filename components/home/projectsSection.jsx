import Image from "next/image"
import AppMockUp from "../../public/AppMockUp.png"
import KodehodeMain from "../../public/KodehodeMain.png"
import KodehodeValg from "../../public/KodehodeValg.png"
import Hawii2 from "../../public/Hawii2.png"
import { SeMerBtn } from "../navigation/buttons"


export function ProjectSectionOne(){
    return(
        <div className="w-11/12 sm:w-full flex flex-col lg:flex-row lg:gap-20 gap-5">
           <div className="flex justify-center w-11/12 md:w-full lg:w-3/6 bg-portfolio-primary-blue p-4 rounded-md">
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

           <div className="flex flex-col w-full lg:w-2/6 gap-2">
              <h2>Fontenehus App</h2>
                <p className="w-11/12 md:w-full pb-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                  Eaque dolorem blanditiis qui illo animi eveniet saepe quidem debitis, rerum delectus repellendus. 
                  Maiores itaque cupiditate similique officiis sequi alias. Assumenda, cumque. 
                </p>
                <SeMerBtn/>
                
           </div>

        </div>

    )
}


export function ProjectSectionTwo(){
  return(
      <div className="w-11/12 sm:w-full flex flex-col lg:flex-row lg:gap-20 gap-5">
         <div className="flex justify-center items-center w-11/12 lg:h-80 md:w-full lg:w-3/6 bg-portfolio-primary-yellow rounded-md md:p-7">

             <div className="w-5/6 h-5/6 shadow-xl">
              <Image 
               alt="bilde av valg for brukeren"
               src={KodehodeValg}
               width={400}
               height={100}
               className="w-full h-full object-cover "
              ></Image>
             </div>
         </div>

         <div className="flex flex-col w-full lg:w-2/6 gap-2">
            <h2>Kodehode</h2>
              <p className="w-11/12 md:w-full pb-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Eaque dolorem blanditiis qui illo animi eveniet saepe quidem debitis, rerum delectus repellendus. 
                Maiores itaque cupiditate similique officiis sequi alias. Assumenda, cumque. 
              </p>
              <SeMerBtn/>
              
         </div>

      </div>

  )
}

export function ProjectSectionThree(){
  return(
      <div className="w-11/12 sm:w-full flex flex-col lg:flex-row lg:gap-20 gap-5">
         <div className="flex justify-center items-center w-11/12 lg:h-80 md:w-full lg:w-3/6 bg-portfolio-primary-green rounded-md md:p-7">

                <div className="w-5/6 h-5/6 shadow-xl">
                <Image 
                  alt="bilde av valg for brukeren"
                  src={Hawii2}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover shadow-2xl"
                ></Image>
                </div>
          </div>

         <div className="flex flex-col w-full lg:w-2/6 gap-2">
            <h2>Hawii Analyse</h2>
              <p className="w-11/12 md:w-full pb-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Eaque dolorem blanditiis qui illo animi eveniet saepe quidem debitis, rerum delectus repellendus. 
                Maiores itaque cupiditate similique officiis sequi alias. Assumenda, cumque. 
              </p>
              <SeMerBtn/>
         </div>

      </div>

  )
}