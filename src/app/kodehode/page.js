import { ProjectHeaderTwo } from "../../../components/project/projectHeader"
import KodehodeMain from "../../../public/KodehodeMain.png"
import KodehodeValg from "../../../public/KodehodeValg.png"

export default function Kodehode(){
    return(
        <div className="w-full flex flex-col items-center pb-20 ">
            <div className="w-full lg:w-10/12 gap-10 pt-20 flex justify-center items-center">
                <ProjectHeaderTwo bilde={KodehodeValg} rolle="Design" dato="sep 23-aug 24" kunde="Jobloop"/>
            </div>
        </div>
    )
}