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
                    <BlockLogoTwo bilde={Kodehode} title="Kodehode" text="Jeg ønsket å lage en logo som er gjenkjennelig, som er relevant for kurset men som er forenklet nok til at det ikke blir et ikon eller illustrasjon"/>
                    <BlockLogoOne bilde={Kodeloftet} title="Kodeloftet" text="Dette var et samarbeid mellom meg, et medlem og medarbeider på Fontenehuset som vi laget før vi lanserte første kurset "/>
                    
            </div>
        </div>

    )
}