import Image from "next/image"


export function ProjectBlockOne({bilde, title, text}){
    return(
        <div className="lg:w-full md:w-full w-full h-full flex md:flex-row flex-col lg:items-start items-center lg:p-12 p-12  md:gap-16 gap-12">
            <div className="md:w-3/6 w-full flex flex-col">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div className="md:w-4/6 w-full h-full ">
               <Image
               src={bilde}
               width={400}
               height={400}
               className="rounded-md w-full h-full md:shadow-lg object-cover"
               /> 
            </div>

        </div>
    )
}

export function ProjectBlockTwo({bilde, title, text}){
    return(
        <div className="lg:w-full flex md:flex-row-reverse flex-col gap-12 md:gap-24 p-12">
            <div className="md:w-3/6 flex flex-col  w-full">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div className="md:w-4/6 w-full">
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
        <div className="lg:w-full flex md:flex-row flex-col gap-12 p-12">
            <div className="md:w-3/6 w-full h-full">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div className="md:w-4/6 w-full">
               <Image
               src={bilde}
               width={400}
               height={400}
               className="rounded-md w-full md:shadow-lg"
               /> 
            </div>

        </div>
    )
}

export function ProjectBlockBottom({bilde, title, text}){
    return(

                 <div className="lg:w-full flex lg:flex-row flex-col md:items-start items-center gap-12">
                        <div className="md:w-full w-screen">
                        <Image
                            src={bilde}
                            width={400}
                            height={400}
                            className="md:rounded-md lg:w-5/6 w-full smd:shadow-lg h-full object-contain"
                            /> 
                        </div>
                        <div className="flex flex-row md:w-5/6 w-full gap-7">
                                <div className="flex flex-col md:gap-20 gap-36 ">
                                    <h2>1</h2>
                                    <h2>2</h2>
                                    <h2>3</h2>
                                </div>

                                <div className="flex flex-col md:gap-10 gap-8 ">
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


export function ProjectBlockHawii({bilde, title, text}){
    return(
        <div className="lg:w-full h-full flex flex-row p-12">
            <div className="w-3/6 flex flex-col">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div className="w-3/6 h-full overflow-hidden">
               <Image
               src={bilde}
               width={400}
               height={400}
               className="rounded-md w-full h-3/6 shadow-lg object-cover"
               /> 
            </div>

        </div>
    )
}