import { ProjectHeaderOne } from "../../../components/project/projectHeader"
import AppMockUp from "../../../public/AppMockUp.png"
import test from "../../../public/test.jpg"
import AppPresentasjon from "../../../public/AppPresentasjon.jpg"
import IgangIgjen from "../../../public/IgangIgjen.jpg"
import { ProjectBlockBottom, ProjectBlockOne, ProjectBlockTwo, ProjectBlockThree } from "../../../components/project/projectBlock"
import AppFigma from "../../../public/AppFigma.png"
import AppW from "../../../public/AppW.jpg"
import AppNav3 from "../../../public/AppNav3.png"
import målgruppe from "../../../public/målgruppe2.jpg"


export default function Fontenehus(){
    return(
        <div className="w-full flex flex-col items-center pb-20 bg-kv-white">
            <div className="w-full lg:w-11/12 gap-10 md:pt-20 lg:pt-20 pt-0 flex justify-center ">
                <ProjectHeaderOne bilde={AppMockUp} introTekst="Arbeided med appen startet i 2021, som et praksisprosjekt i Kodehode utviklerkurset som jeg tok. Så ble det lagt på hyllen før vi tok det opp igjen i 2023 som et samarbeid med Kodeverket og Fontenehuset sitt eget kodekurs, Kodeloftet."/>
            </div>

            <div className="w-screen flex flex-col items-center md:bg-[#CCE0FF] lg:h-[90vh] md:h-[40vh] mt-32">
                <div className="lg:w-10/12 flex justify-center">
                  <ProjectBlockOne bilde={målgruppe} title="Målgruppe" 
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
                        <ProjectBlockTwo bilde={test} title="Tester" text="Her også ønsket jeg at vi skulle involvere medlemmene. Vi satte opp workshops hvor kombinere læring av brukertesting som metode med testing av selve appen. Denne prosessen gjorde vi 2 ganger, med endringer i design mellom hver gang. I tillegg kjørte vi enkelte tester av designet og brukervennligheten etter dette. "/>
                    </div>
                </div>

                <div className="w-screen flex flex-col items-center md:bg-[#CCE0FF]">
                   <div className="lg:w-10/12">
                    <ProjectBlockThree bilde={AppFigma} title="Design" text="Meg og et medlem på huset Grete ble de som jobbet med designet. 
                    Gjennom utallige utprøving og endringer pluss litt hjelp fra Link utvikling så kom vi frem til et design som vi tror er lett å navigere seg gjennom. 
                    Vi ønsket at det skulle være enkelt for brukerne å finne forskjellig informasjon og at det skulle være oversiktlig og enkelt" />
                    <ProjectBlockThree bilde={AppW} title="Workshops" text="Vi fant ut at den beste måten å få med medlemmer fra kodekurset var å holde workshops. 
                    Når vi startet med utviklingen begynte vi derfor med workshops rund hver del av prosessen, alt fra GitHub, React Native og til Sanity CMS.
                     Jeg tror deltagerne ville kjenne på en trygghet i at vi holdt i prosjektet og at det ikke falt for mye ansvar på de.
                     I tillegg tror jeg de ønsket å lære ting underveis og at de slapp å lære det på egenhånd" />
                    </div>
                </div>
            </div>

            <div className=" w-full lg:w-10/12 md:w-full flex flex-col p-12 gap-10">
                    <div className="w-full flex flex-col items-left ">
                        <h2 className="text-[42px] text-center md:text-start">Utfordringer og læring</h2>
                        <p className="text-center md:text-left">Underveis har vi møtte på en del utfordringer som jeg håper og tror jeg har lært mye av. </p>
                    </div>
                    <ProjectBlockBottom 
                    bilde={AppNav3}
                    headerOne="Navigasjon, plassering og valg"
                    textOne="Vi jobbet med mange måter å navigere seg gjennom appen på.
                    Vi fant til slutt ut at vi ikke burde ligge det bak for mange klikk og at det ble forvirrende for folk å vite hvor de skulle finne ting.
                    I tillegg hadde vi for mye på appen og måtte luke ut ting som kanskje var mindre viktig" 
                    headerTwo="Deltagelse og involvering" 
                    textTwo="I begynnelsen tenkte vi å lage en kjernegruppe som kunne drive prosjektet og utviklingen litt på egenhånd på huset, og kanskje få flere til å bli med. Det viste seg at vi måtte styre det mer og at workshops var en bedre metode."
                    headerThree="Iterasjon og endringer"  
                    textThree="Vi brukte lang tid på å finne et design som vi likte. Noe av grunnen var nok at vi burde spisse det enda mer mot målgruppen som er de som kjenner huset og ikke så mye mot info til utenforstående. "/>
            </div>

            
        </div>
    )
}