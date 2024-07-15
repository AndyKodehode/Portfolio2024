import { ProjectHeaderTwo } from "../../../components/project/projectHeader"
import HawiiVT from "../../../public/HawiiVT.PNG"
import { ProjectBlockBottom, ProjectBlockOne, ProjectBlockTwo, ProjectBlockThree, ProjectBlockHawii } from "../../../components/project/projectBlock"
import test from "../../../public/test.jpg"
import HawiiMaal from "../../../public/HawiiMaal.jpg"
import HawiiFirstDesign from "../../../public/HawiiFirstDesign.png"
import HawiiFigma from "../../../public/HawiiFigma.png"
import kunde from "../../../public/kunde.jpg"
import samarbeid from "../../../public/samarbeid.jpg"
import HawiiDesign from "../../../public/HawiiDesign.png"

export default function Hawii(){
    return(
        <div className="w-full flex flex-col items-center pb-20">
            <div className="w-full lg:w-10/12 gap-10 pt-20 flex justify-center">
                <ProjectHeaderTwo bilde={HawiiVT}/>
            </div>

            <div className="lg:w-screen flex flex-col items-center bg-[#CCE0FF] h-[80vh] mt-32">
                <div className="lg:w-10/12">
                  <ProjectBlockHawii bilde={HawiiMaal} title="Målgruppe " text="Her kommer noe tekst som er relevant"/>
                </div>
            </div>
            
            <div className="lg:w-11/12 flex flex-col items-center gap-24 p-12">
                <div className="w-full flex flex-col">
                    <div className="w-full flex flex-col items-left p-12 pl-14">
                        <h2 className="text-[46px]">Prosess</h2>
                        <p>her kommer noe tekst om prosessen</p>
                    </div>
                    <div className="lg:w-full flex flex-col items-center">
                        <ProjectBlockTwo bilde={HawiiFirstDesign} title="Påbegynt design" text="Her kommer noe tekst som er relevant"/>
                        <ProjectBlockTwo bilde={HawiiFigma} title="Design og utprøving" text="Her kommer noe tekst som er relevant"/>
                    </div>
                </div>

                <div className="lg:w-screen flex flex-col items-center bg-[#CCE0FF]">
                   <div className="lg:w-10/12">
                   <ProjectBlockThree bilde={kunde} title="Tilbakemeldinger fra kunden" text="Her kommer noe tekst som er relevant" />
                    <ProjectBlockThree bilde={samarbeid} title="Samarbeid med utviklere" text="Her kommer noe tekst som er relevant" />
                    </div>
                </div>
            </div>

            <div className="w-10/12 flex flex-col p-12 gap-10">
                    <div className="w-full flex flex-col items-left ">
                        <h2 className="text-[46px]">Utfordringer og læring</h2>
                        <p>her kommer noe tekst om læring i prosjektet</p>
                    </div>
                    <ProjectBlockBottom bilde={HawiiDesign}/>
            </div>
        </div>
    )
}