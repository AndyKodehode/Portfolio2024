import Image from "next/image"
import AnnieSprettReise from "../../../public/AnnieSprattReise.jpg"
import { YearCard } from "../../../components/minReiseComp/yearSection"


export default function MinReise(){
    return(

        <div className="p-12 flex flex-col gap-24 ">
                <div className="flex flex-row">
                    <div className=" w-3/6">
                        <Image className="w-5/6" src={AnnieSprettReise}/>
                    </div>
                    <div className=" w-3/6 flex flex-col gap-12">
                        <h1>Min reise</h1>
                        <p>
                            Fugiat veniam proident ad nisi fugiat in commodo minim cupidatat.
                            Fugiat veniam proident ad nisi fugiat in commodo minim cupidatat. 
                        </p>
                    </div>
                </div>

                <div className="flex flex-row w-full">
                    <div className="flex flex-col items-center gap-12">
                      <YearCard bilde={AnnieSprettReise}/>
                      <YearCard bilde={AnnieSprettReise}/>

                    </div >

                    <div className="flex flex-col pt-72 items-center gap-12">
                      <YearCard bilde={AnnieSprettReise}/>
                      <YearCard bilde={AnnieSprettReise}/>
                        
                    </div>

                </div>
        </div>
    )
}