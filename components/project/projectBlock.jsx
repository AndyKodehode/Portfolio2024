import Image from "next/image"


export function ProjectBlockOne({bilde, title, text}){
    return(
        <div className="lg:w-full flex flex-row p-12">
            <div className="w-3/6 flex flex-col">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div className="w-4/6">
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
        <div className="lg:w-full flex flex-row-reverse gap-24 p-12">
            <div className="w-3/6 flex flex-col">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div className="w-4/6">
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

export function ProjectBlockThree({bilde, title, text}){
    return(
        <div className="lg:w-full flex flex-row p-12">
            <div className="w-3/6 flex flex-col">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div className="w-4/6">
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

export function ProjectBlockBottom({bilde, title, text}){
    return(

                 <div className="lg:w-full flex flex-row items-center gap-12">
                        <div className="w-3/6">
                        <Image
                            src={bilde}
                            width={400}
                            height={400}
                            className="rounded-md w-full shadow-lg"
                            /> 
                        </div>
                        <div className="flex flex-row w-3/6 gap-5">
                                <div className="flex flex-col gap-20">
                                <h2>1</h2>
                                <h2>2</h2>
                                <h2>3</h2>
                                </div>

                                <div className="flex flex-col gap-10">
                                    <div className="flex flex-col">
                                        <h3></h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit similique error est quasi aut expedita laboriosam. Eveniet alias blanditiis, nulla quos dolores sequi dicta aspernatur, cupiditate sint aliquid nostrum. Deserunt!</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <h3></h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit similique error est quasi aut expedita laboriosam. Eveniet alias blanditiis, nulla quos dolores sequi dicta aspernatur, cupiditate sint aliquid nostrum. Deserunt!</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <h3></h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit similique error est quasi aut expedita laboriosam. Eveniet alias blanditiis, nulla quos dolores sequi dicta aspernatur, cupiditate sint aliquid nostrum. Deserunt!</p>
                                    </div>
                                </div>
                            

                        </div>
                    </div>)
}