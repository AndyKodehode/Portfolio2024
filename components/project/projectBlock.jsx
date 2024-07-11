import Image from "next/image"


export function ProjectBlockOne({bilde, title, text}){
    return(
        <div className="lg:w-10/12 flex flex-row">
            <div className="w-3/6 flex flex-col">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div className="w-3/6">
               <Image
               src={bilde}
               width={400}
               height={400}
               className="rounded-md w-full shadow-lg"
               /> 
            </div>

        </div>
    )
}

export function ProjectBlockTwo({bilde, title, text}){
    return(
        <div className="lg:w-10/12 flex flex-row-reverse gap-10">
            <div className="w-3/6 flex flex-col">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div className="w-3/6">
               <Image
               src={bilde}
               width={400}
               height={400}
               className="rounded-md w-full h-full"
               /> 
            </div>

        </div>
    )
}