import { ProjectHeaderOne } from "../../../components/project/projectHeader"
import AppMockUp from "../../../public/AppMockUp.png"
import test from "../../../public/test.jpg"
import AppPresentasjon from "../../../public/AppPresentasjon.jpg"
import IgangIgjen from "../../../public/IgangIgjen.jpg"
import { ProjectBlockBottom, ProjectBlockOne, ProjectBlockTwo, ProjectBlockThree } from "../../../components/project/projectBlock"


export default function Fontenehus(){
    return(
        <div className="w-full flex flex-col items-center pb-20 bg-kv-white">
            <div className="w-full lg:w-11/12 gap-10 md:pt-20 lg:pt-20 pt-0 flex justify-center ">
                <ProjectHeaderOne bilde={AppMockUp} introTekst="Arbeided med appen startet i 2021, som et praksisprosjekt i Kodehode utviklerkurset som jeg tok. Så ble det lagt på hyllen før vi tok det opp igjen i 2023 som et samarbeid med Kodeverket og Fontenehuset sitt eget kodekurs, Kodeloftet."/>
            </div>

            <div className="w-screen flex flex-col items-center md:bg-[#CCE0FF] lg:h-[80vh] md:h-[40vh] mt-32">
                <div className="lg:w-10/12 flex justify-center">
                  <ProjectBlockOne bilde={test} title="Målgruppe" 
                  textPartOne="Appen er laget for de som allerede er medlem av huset og som derfor har kjennskap til hvordan huset fungerer. 
                  Dette valget innebærer at vi valgte bort å legge mye informasjon om huset i appen. og heller gi detaljert info om hva som skjer og til hvilken tid. 
                  Etterhvert håper vi at den skal kunne bli mer interaktiv i den forstand at brukerne skal kunne bestille lunsj, kaffe og legge inn forslag." 
                  
                  textPartTwo="Tanken bak appen er å nå medlemmer som ikke klarer å komme seg på huset.
                  Medlemstall har økt, men det betyr utfordringer i å nå alle medlemmene."
                  
                  textPartThree="Vi ønsker at informasjon skal komme ut til alle medlemmer på huset og en app vil kunne gi rask og riktig informasjon, som forhåpentligvis kan motivere og inspirere medlemmene til å bruke huset mer.
                  I tillegg til dette ønsket vi å gi deltagere som har fullført Kodeloftet kurset en arena og et prosjekt hvor de kan jobbe videre med den kunnskapen de har og lære seg nye ting
                  Målet har også vært å inkludere huset så mye som mulig i prosessen slik at de får eierskap til appen og det føles som et produkt laget av huset."/>
                </div>
            </div>
            
            <div className="lg:w-11/12 flex flex-col items-center gap-24 p-12 mt-12">
                <div className="w-full flex flex-col">
                    <div className="w-full flex flex-col items-left p-12 md:pl-14 ">
                        <h2 className="text-[46px] text-center md:text-left">Prosess</h2>
                        <p className="text-center md:text-left">En liten oversikt over prosessen i prosjektet. Det har vært et prosjekt som har innebært flere faser og måter å involvere medlemmene på, i tillegg til å sørge for at det blir nok fremgang.</p>
                    </div>
                    <div className="lg:w-full flex flex-col items-center">
                        <ProjectBlockTwo bilde={IgangIgjen} title="Informasjon" text="I første omgang måtte vi gi informasjon til kodekurset sine medlemmer, for å se om vi kunne fange interessen. Målet var som sagt at vi klarer å involvere alle på huset, det måtte derfor igjennom flere informasjonsrunder for å være sikker på at alle skjønner hva det går ut på. Appen skal også oppdateres med innhold så det er viktig at folk forstår hva det betyr."/>
                        <ProjectBlockTwo bilde={test} title="Tester" text="Ogaå her ønsket jeg at vi skulle involvere medlemmene. Vi satta opp workshop hvor kombinere læring av brukertesting som metode med testing av selve appen. Denne prosessen gjorde vi 2 ganger, med endringer i design mellom hver gang. I tillegg kjørte vi enkelte tester av designet og brukervennligheten etter dette. "/>
                    </div>
                </div>

                <div className="w-screen flex flex-col items-center md:bg-[#CCE0FF]">
                   <div className="lg:w-10/12">
                    <ProjectBlockThree bilde={test} title="Jobloop og utgangspunkt" text="Her kommer noe tekst som er relevant" />
                    <ProjectBlockThree bilde={test} title="Prototyping" text="Her kommer noe tekst som er relevant" />
                    </div>
                </div>
            </div>

            <div className=" w-full lg:w-10/12 md:w-full flex flex-col p-12 gap-10">
                    <div className="w-full flex flex-col items-left ">
                        <h2 className="text-[42px] text-center md:text-start">Utfordringer og læring</h2>
                        <p className="text-center md:text-left">her kommer noe tekst om læring i prosjektet</p>
                    </div>
                    <ProjectBlockBottom bilde={test}/>
            </div>

            
        </div>
    )
}