import { ProjectHeaderTwo } from "../../../components/project/projectHeader"
import KodehodeMain from "../../../public/KodehodeMain.png"
import KodehodeValg from "../../../public/KodehodeValg.png"
import { ProjectBlockOne, ProjectBlockTwo } from "../../../components/project/projectBlock"
import KodehodeBedrift from "../../../public/KodehodeBedrift.png"
import Jobloop2 from "../../../public/Jobloop2.png"
import Inspirasjon from "../../../public/Inspirasjon.png"

export default function Kodehode(){
    return(
        <div className="w-full flex flex-col items-center pb-20 gap-32 ">
            <div className="w-full lg:w-10/12 gap-10 pt-20 flex justify-center items-center">
                <ProjectHeaderTwo bilde={KodehodeValg} rolle="Design" dato="sep 23-aug 24" kunde="Jobloop"/>
                
            </div>

            <div className="lg:w-10/12 flex flex-col items-center">
                <ProjectBlockOne bilde={KodehodeBedrift} title="Målgrupper " text="Her kommer noe tekst som er relevant"/>
            </div>
            
            <div className="lg:w-10/12 flex flex-col items-center gap-10">
                 <div className="w-10/12 flex flex-col items-left">
                    <h2>Prosess</h2>
                    <p>her kommer noe tekst om prosessen</p>
                 </div>
                <ProjectBlockTwo bilde={Jobloop2} title="Jobloop og utgangspunkt" text="Her kommer noe tekst som er relevant"/>
                <ProjectBlockTwo bilde={Inspirasjon} title="Inspirasjon og ideer" text="Her kommer noe tekst som er relevant"/>
            </div>
        </div>
    )
}