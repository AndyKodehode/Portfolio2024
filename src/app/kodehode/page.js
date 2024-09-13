import { ProjectHeaderTwo } from "../../../components/project/projectHeader"
import KodehodeMain from "../../../public/KodehodeMain.png"
import KodehodeValg from "../../../public/KodehodeValg.png"
import { ProjectBlockOne, ProjectBlockTwo } from "../../../components/project/projectBlock"
import KodehodeBedrift from "../../../public/KodehodeBedrift.png"
import Jobloop2 from "../../../public/Jobloop2.png"
import Inspirasjon from "../../../public/Inspirasjon.png"
import { ProjectBlockThree } from "../../../components/project/projectBlock"
import KodehodePT from "../../../public/KodehodePT.png"
import KodehodeFigma from "../../../public/KodehodeFigma.png"
import { ProjectBlockBottom } from "../../../components/project/projectBlock"
import deltager from "../../../public/KodehodeDeltager.png"



export default function Kodehode(){
    return(
        <div className="w-full flex flex-col items-center pb-20 gap-32 ">
            <div className="w-full lg:w-10/12 gap-10 md:pt-20 flex justify-center items-center ">
                <ProjectHeaderTwo bilde={deltager} rolle="Design" dato="sep 23-aug 24" kunde="Jobloop"/>
                
            </div>

            <div className="w-full flex flex-col items-center md:bg-[#CCE0FF] lg:h-[70vh] md:h-[40vh] ">
                <div className="lg:w-10/12 flex justify-center">
                <ProjectBlockOne bilde={KodehodeBedrift} title="Målgrupper " text="Her kommer noe tekst som er relevant"/>
                </div>
            </div>
            
            <div className="lg:w-11/12 w-full flex flex-col items-center gap-24 md:p-12">
                <div className="w-full flex flex-col">
                    <div className="w-full flex flex-col items-left p-12 pl-14">
                        <h2 className="text-[46px] text-center md:text-left">Prosess</h2>
                        <p className="text-center md:text-left">her kommer noe tekst om prosessen</p>
                    </div>
                    <div className="lg:w-full w-full flex flex-col items-center">
                        <ProjectBlockTwo bilde={Jobloop2} title="Jobloop og utgangspunkt" text="Her kommer noe tekst som er relevant"/>
                        <ProjectBlockTwo bilde={Inspirasjon} title="Inspirasjon og ideer" text="Her kommer noe tekst som er relevant"/>
                    </div>
                </div>

                <div className="lg:w-screen w-full flex flex-col items-center md:bg-[#CCE0FF]">
                   <div className="lg:w-10/12 w-full">
                    <ProjectBlockThree bilde={KodehodeFigma} title="Jobloop og utgangspunkt" text="Her kommer noe tekst som er relevant" />
                    <ProjectBlockThree bilde={KodehodePT} title="Prototyping" text="Her kommer noe tekst som er relevant" />
                    </div>
                </div>
            </div>

            <div className="w-full md:w-10/12 flex flex-col p-12 gap-10">
                    <div className="w-full flex flex-col items-left ">
                        <h2 className="text-[46px] text-center md:text-left">Utfordringer og læring</h2>
                        <p className="text-center md:text-left">her kommer noe tekst om læring i prosjektet</p>
                    </div>
                    <ProjectBlockBottom bilde={KodehodePT}/>
            </div>
        </div>
    )
}