import { ProjectHeaderTwo } from "../../../components/project/projectHeader"
import { ProjectBlockHawii, ProjectBlockOne, ProjectBlockTwo } from "../../../components/project/projectBlock"
import KodehodeBedrift from "/public/KodehodeBedrift.png"
import Jobloop2 from "/public/Jobloop2.png"
import Inspirasjon from "/public/Inspirasjon.png"
import { ProjectBlockThree } from "/components/project/projectBlock"
import KodehodePT from "/public/KodehodePT.png"
import KodehodeFigma from "/public/KodehodeFigma.png"
import { ProjectBlockBottom } from "../../../components/project/projectBlock"
import deltager from "/public/KodehodeDeltager.png"
import fargebakgrunn from "/public/fargebakgrunn.png"


export default function Kodehode(){
    return(
        <div className="w-full flex flex-col items-center pb-20 gap-32 ">
            <div className="w-full lg:w-10/12 gap-10 md:pt-20 flex justify-center items-center ">
                <ProjectHeaderTwo bilde={deltager} rolle="Design" dato="sep 23-aug 24" kunde="Jobloop"/>
                
            </div>

            <div className="w-full flex flex-col items-center md:bg-[#CCE0FF] lg:h-[70vh] md:h-[40vh] ">
                <div className="lg:w-10/12 flex justify-center">
                <ProjectBlockTwo bilde={KodehodeBedrift} title="Målgrupper " text="Kodhode er spesielt i den forstand at de har 3 målgrupper som har like mye verdi for Jobloop. Derfor lagde vi en løsning hvor hver målgruppe har en underside med tilpasset innhold."/>
                </div>
            </div>
            
            <div className="lg:w-11/12 w-full flex flex-col items-center gap-24 md:p-12">
                <div className="w-full flex flex-col">
                    <div className="w-full flex flex-col items-left p-12 pl-14">
                        <h2 className="text-[46px] text-center md:text-left">Prosess</h2>
                        <p className="text-center md:text-left">En liten oversikt over prosessen i prosjektet. </p>
                    </div>
                    <div className="lg:w-full w-full flex flex-col items-center">
                        <ProjectBlockTwo bilde={Jobloop2} title="Jobloop og utgangspunkt" text="Utgangspunktet for prosjektet er Jobloop sin egen nettside som pr. nå har en egen underside for Kodehode. Det var et ønske fra Jobloop at Kodehode kunne ha sin egen nettside siden informsjonen om Kodehode blir litt gjemt på Jobloop siden."/>
                        <ProjectBlockTwo bilde={Inspirasjon} title="Inspirasjon og ideer" text="Det første jeg ofte gjør for å komme igang er å lage en samling av ideer og inspirasjon. Hvordan har andre gjort det? hvordan kan jeg utrykke det som jeg ønsker her? hvilken layout liker jeg og hvordan kan jeg bruke det i mitt eget design."/>
                    </div>
                </div>

                <div className="lg:w-screen w-full flex flex-col items-center md:bg-[#CCE0FF]">
                   <div className="lg:w-10/12 w-full">
                    <ProjectBlockThree bilde={KodehodeFigma} title="Jobloop og utgangspunkt" text="Jeg ønsket å bruke fargene til Jobloop på siden. Samtidig ville jeg lage det cleant og oversiktlig så jeg tenkte å legge hver infodel i en seksjon og bruke ikoner for å illustrere og gjøre det lett for brukeren å ta inn." />
                    <ProjectBlockThree bilde={KodehodePT} title="Prototyping" text="For å kunne vise meg selv, kunden og programmere jeg jobbet med hvordan brukerreisen blir så satte jeg det sammen med prototype i Figma." />
                    </div>
                </div>
            </div>

            <div className="w-full md:w-10/12 flex flex-col p-12 gap-10">
                    <div className="w-full flex flex-col items-left ">
                        <h2 className="text-[46px] text-center md:text-left">Utfordringer og læring</h2>
                        <p className="text-center md:text-left">Underveis har vi møtte på en del utfordringer som jeg håper og tror jeg har lært mye av. </p>
                    </div>
                    <ProjectBlockBottom 
                    bilde={fargebakgrunn} 
                    headerOne="Universell utforming, tekst og farger" 
                    textOne="Underveis i prosjektet oppdaget vi at den hvite teksten på fargen ikke hadde god nok kontrast til å være innenfor universell utforming. I tillegg var det en del midtstilt tekst som også kan være utfordrende å lese" 
                    headerTwo="Lage filter med variables" 
                    textTwo="Kontaktsiden har filtrering på arbeidsplass og roller. For å illustrere dette i Figma brukte jeg variables, det er første gang jeg har brukt det i FIgma" 
                    headerThree="Samarbeid og tilbakemeldinger" 
                    textThree="Som designer og som en del av et team så må man tåle tilbakemeldinger og dette var et prosjekt hvor vi fikk jobbet med vår kommunikasjonsferdigheter og hvordan jeg takler tilbakemeldinger"/>
            </div>
        </div>
    )
}