import { ProjectHeaderTwo } from "../../../components/project/projectHeader"
import HawiiVT from "../../../public/HawiiVT.PNG"

export default function Hawii(){
    return(
        <div className="w-full flex flex-col items-center pb-20">
            <div className="w-full lg:w-10/12 gap-10 pt-20 flex justify-center">
                <ProjectHeaderTwo bilde={HawiiVT}/>
            </div>
        </div>
    )
}