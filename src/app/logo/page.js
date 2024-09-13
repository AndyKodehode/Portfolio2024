import { ProjectHeaderLogo } from "../../../components/project/projectHeader"
import { ProjectBlockOne } from "../../../components/project/projectBlock"
import { ProjectBlockTwo } from "../../../components/project/projectBlock"
import Reise from "../../../public/AnnieSprattReise.jpg"
import { BlockLogoOne, BlockLogoTwo } from "../../../components/project/projectBlock"
import Kodehode from "../../../public/Kodehode.svg"
import Kodeloftet from "../../../public/Kodeloftet.svg"
import Kelly from "../../../public/kelly-sikkema.jpg"

export default function LogoPage(){
    return(
        <div className="flex flex-col items-center gap-28">
            <ProjectHeaderLogo bilde={Kelly}/>
            <div className=" pt-7 p-16 w-11/12 gap-12">
                    <BlockLogoTwo bilde={Kodehode} title="Kodehode"/>
                    <BlockLogoOne bilde={Kodeloftet} title="Kodeloftet"/>
                    
            </div>
        </div>

    )
}