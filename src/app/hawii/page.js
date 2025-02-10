import { ProjectHeaderTwo } from "../../../components/project/projectHeader"
import HawiiVT from "/public/HawiiVT.png"
import { ProjectBlockBottom, ProjectBlockOne, ProjectBlockTwo, ProjectBlockThree, ProjectBlockHawii } from "../../../components/project/projectBlock"
import test from "../../../public/test.jpg"
import HawiiMaal from "/public/HawiiMaal.jpg"
import HawiiFirstDesign from "/public/HawiiFirstDesign.png"
import HawiiFigma from "/public/HawiiFigma.png"
import kunde from "/public/kunde.jpg"
import samarbeid from "/public/samarbeid.jpg"
import HawiiDesign from "/public/HawiiDesign.png"


export default function Hawii(){
    return(
        <div className="w-full flex flex-col items-center pb-20">
            <div className="w-full lg:w-10/12 gap-10 md:pt-20 flex justify-center">
                <ProjectHeaderTwo dato='02.2023- 06.2023' kunde='Hawii' rolle='design' bilde={HawiiVT} introTekst= "Dette var et prosjekt for et firma som heter Hawii. De lager analyse og statistikk for utbyggere slik at de kan gjøre vurderinger av hvilke områder de skal kjøpe opp" />
            </div>

            <div className="lg:w-screen flex flex-col items-center md:bg-[#CCE0FF] lg:h-[80vh] mt-32">
                <div className="lg:w-10/12">
                  <ProjectBlockHawii bilde={HawiiMaal} title="Målgruppe " text="Målgruppen er utbyggere og hensikten med siden er at Hawii får utbyggere til å ta kontakt for å bestille analyseverktøy eller bare melde seg opp til nyhetsbrev"/>
                </div>
            </div>
            
            <div className="lg:w-11/12 w-full flex flex-col items-center gap-24 p-2 pt-12 md:p-12">
                <div className="w-full flex flex-col">
                    <div className="w-full flex flex-col items-left p-12 pl-14">
                        <h2 className="text-[46px]  text-center md:text-left">Prosess</h2>
                        <p className="text-center md:text-left">Her er en oversikt over prosessen</p>
                    </div>
                    <div className="w-full flex flex-col items-center">
                        <ProjectBlockTwo bilde={HawiiFirstDesign} title="Påbegynt design" text="Før jeg kom inn i prosjektet så hadde de begynt på en designfil med noe oppsett så jeg måtte prøve å sette meg inn i hva de hadde tenkt"/>
                        <ProjectBlockTwo bilde={HawiiFigma} title="Design og utprøving" text="Jeg lagde forskjellige utkast i FIgma til de ulike delene av designet som ble delt med resten av teamet og som vi viste for kunden når vi var enige. 
                        Det var et prosjekt med veldig mye utprøving med layout, bilder og farger. I ettertid kan det hende at prosjektet skulle hatt mer struktur i designprosessen, med wireframe og design-system.  "/>
                    </div>
                </div>

                <div className="lg:w-screen flex flex-col items-center md:bg-[#CCE0FF]">
                   <div className="lg:w-10/12">
                   <ProjectBlockThree bilde={kunde} title="Tilbakemeldinger fra kunden" text="Her kommer noe tekst som er relevant" />
                    <ProjectBlockThree bilde={samarbeid} title="Samarbeid med utviklere" text="Her kommer noe tekst som er relevant" />
                    </div>
                </div>
            </div>

            <div className="w-10/12 flex flex-col p-12 gap-10">
                    <div className="w-full flex flex-col items-left ">
                        <h2 className="text-[46px] text-center md:text-left">Utfordringer og læring</h2>
                        <p className="text-center md:text-left">her kommer noe tekst om læring i prosjektet</p>
                    </div>
                    <ProjectBlockBottom bilde={HawiiDesign}/>
            </div>

           
        </div>
    )
}