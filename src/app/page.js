import Image from "next/image";
import { NavBar } from "../../components/navigation/navbar";
import { ProjectSection } from "../../components/home/projectsSection";
import { BidragsKort } from "../../components/home/bidragKort";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 items-center min-h-screen p-0 w-screen pb-20" >
          <NavBar/>
          
          
          <div className="flex flex-col w-screen sm:w-11/12 gap-40">

            <div className="flex flex-row w-full h-40 gap-10">
              <div className="w-full bg-slate-600">
              <h1>Dette er header</h1>
              </div>

              <div className="hidden sm:flex flex-col w-full bg-slate-600">
                <h1>bilderamme</h1>
              </div>

            </div>

            <div className="flex flex-col gap-10">

                  <div className="flex-col justify-left gap-5 w-3/6 pl-6 sm:pl-0">
                        <div >
                          <h1>Prosjekt Seksjon</h1>
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

                    <ProjectSection/>
                    <ProjectSection/>
                    <ProjectSection/>

                  </div>



            </div>


            <div className="flex flex-col justify-center gap-10">
                <div className="flex flex-col items-center w-full">
                  <h1>Hva kan jeg bidra med?</h1>
                  <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <div className="flex flex-wrap gap-20 justify-center">
                  <BidragsKort/>
                  <BidragsKort/>
                  <BidragsKort/>
                  <BidragsKort/>
                  <BidragsKort/>
                </div>
            </div>

            <div className="w-screen md:w-full flex flex-col gap-10">
               <h1 className="text-center">Min reise</h1>
                  <div className="sm:w-full w-screen flex flex-col lg:flex-row gap-10">
                      <div className="w-screen sm:w-full lg:w-4/6 bg-slate-600">
                        <h1>Bilde</h1>
                      </div>
                      <div>
                          <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                      </div>
                  </div>
            </div>

            <div className="flex flex-col gap-10">
                <h1 className="text-center">Programmer jeg kan</h1>
                  <div className="w-full flex flex-wrap lg:flex-row justify-center gap-10">
                      <div className="w-40 flex flex-col gap-4 bg-slate-600">
                        <div>
                          <p>Ikon</p>
                        </div>
                        <div>
                          <p>Tittel</p>
                        </div>
                      </div>

                      <div className=" w-40 flex flex-col gap-4 bg-slate-600">
                        <div>
                          <p>Ikon</p>
                        </div>
                        <div>
                          <p>Tittel</p>
                        </div>
                      </div>

                      <div className="w-40 flex flex-col gap-4 bg-slate-600">
                        <div>
                          <p>Ikon</p>
                        </div>
                        <div>
                          <p>Tittel</p>
                        </div>
                      </div>

                      <div className="w-40 flex flex-col gap-4 bg-slate-600">
                        <div>
                          <p>Ikon</p>
                        </div>
                        <div>
                          <p>Tittel</p>
                        </div>
                      </div>
                  </div>
             </div>

      </div>
    
    </main>
  );
}
