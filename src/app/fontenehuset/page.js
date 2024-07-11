import { ProjectHeaderOne } from "../../../components/project/projectHeader"
import AppMockUp from "../../../public/AppMockUp.png"


export default function Fontenehus(){
    return(
        <div className="w-full flex flex-col items-center pb-20">
            <div className="w-full lg:w-10/12 gap-10 pt-20 flex justify-center">
                <ProjectHeaderOne bilde={AppMockUp}/>
            </div>
        </div>
    )
}