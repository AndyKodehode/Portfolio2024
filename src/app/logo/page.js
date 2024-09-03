import { ProjectHeaderLogo } from "../../../components/project/projectHeader"
import { ProjectBlockOne } from "../../../components/project/projectBlock"
import { ProjectBlockTwo } from "../../../components/project/projectBlock"
import Reise from "../../../public/AnnieSprattReise.jpg"

export default function LogoPage(){
    return(
        <div>
            <ProjectHeaderLogo bilde={Reise}/>
            <ProjectBlockOne bilde={Reise} title="Kodehode" text/>
            <ProjectBlockTwo bilde={Reise} title="Kodeloftet" text/>
        </div>

    )
}