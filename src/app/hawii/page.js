import { ProjectHeaderTwo } from "../../../components/project/projectHeader"
import HawiiVT from "../../../public/HawiiVT.PNG"
import { ProjectBlockBottom, ProjectBlockOne, ProjectBlockTwo, ProjectBlockThree } from "../../../components/project/projectBlock"
import test from "../../../public/test.jpg"

export default function Hawii(){
    return(
        <div className="w-full flex flex-col items-center pb-20">
            <div className="w-full lg:w-10/12 gap-10 pt-20 flex justify-center">
                <ProjectHeaderTwo bilde={HawiiVT}/>
            </div>

            <div className="lg:w-screen flex flex-col items-center bg-[#CCE0FF] h-[60vh]">
                <div className="lg:w-10/12">
                <ProjectBlockOne bilde={test} title="Målgrupper " text="Her kommer noe tekst som er relevant"/>
                </div>
            </div>
            
            <div className="lg:w-11/12 flex flex-col items-center gap-24 p-12">
                <div className="w-full flex flex-col">
                    <div className="w-full flex flex-col items-left p-12 pl-14">
                        <h2 className="text-[46px]">Prosess</h2>
                        <p>her kommer noe tekst om prosessen</p>
                    </div>
                    <div className="lg:w-full flex flex-col items-center">
                        <ProjectBlockTwo bilde={test} title="Jobloop og utgangspunkt" text="Her kommer noe tekst som er relevant"/>
                        <ProjectBlockTwo bilde={test} title="Inspirasjon og ideer" text="Her kommer noe tekst som er relevant"/>
                    </div>
                </div>

                <div className="lg:w-screen flex flex-col items-center bg-[#CCE0FF]">
                   <div className="lg:w-10/12">
                    <ProjectBlockThree bilde={test} title="Jobloop og utgangspunkt" text="Her kommer noe tekst som er relevant" />
                    <ProjectBlockThree bilde={test} title="Prototyping" text="Her kommer noe tekst som er relevant" />
                    </div>
                </div>
            </div>

            <div className="w-10/12 flex flex-col p-12 gap-10">
                    <div className="w-full flex flex-col items-left ">
                        <h2 className="text-[46px]">Utfordringer og læring</h2>
                        <p>her kommer noe tekst om læring i prosjektet</p>
                    </div>
                    <ProjectBlockBottom bilde={test}/>
            </div>
        </div>
    )
}