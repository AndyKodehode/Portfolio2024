import Image from "next/image"


export function ProjectBlockOne({bilde, title, textPartOne, textPartTwo, textPartThree}){
    return(
        <div className="lg:w-full md:w-full w-full h-full flex md:flex-row flex-col lg:items-start items-center lg:p-12 p-12  md:gap-32 gap-12">
            <div className="md:w-full w-full flex flex-col gap-4">
                <h2>{title}</h2>
                <p>{textPartOne}</p>
                <br/>
                <p>{textPartTwo}</p>
                <br/>
                <p>{textPartThree}</p>
                <br/>
            </div>
            <div className="md:w-5/6 w-full h-full ">
               <Image
               src={bilde}
               width={400}
               height={400}
               className="rounded-md w-5/6 md:shadow-lg object-cover"
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
            <div className="md:w-3/6 w-full">
               <Image
               src={bilde}
               width={400}
               height={400}
               className="rounded-md w-full h-5/6 object-contain"
               /> 
            </div>

        </div>
    )
}

export function ProjectBlockBottom({bilde, title, textOne, textTwo, textThree, headerOne, headerTwo, headerThree}){
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
                                <div className="flex flex-col md:gap-34 gap-36 pb-7 ">
                                    <h2>1</h2>
                                    <h2>2</h2>
                                    <h2>3</h2>
                                </div>

                                <div className="flex flex-col md:gap-10 gap-8 ">
                                    <div className="flex flex-col">
                                        <h3>{headerOne}</h3>
                                        <p>{textOne}</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <h3>{headerTwo}</h3>
                                        <p>{textTwo}</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <h3>{headerThree}</h3>
                                        <p>{textThree}</p>
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


export function BlockLogoOne({bilde, title, text}){

    return(
        <div className="lg:w-full md:w-full w-full h-full flex md:flex-row flex-col lg:items-start items-center lg:p-12 p-12  md:gap-28 gap-12">
            <div className="md:w-full w-full flex flex-col">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div className="flex flex-col items-center  w-5/6 h-full md:shadow-lg p-20">
               <Image
               src={bilde}
               width={400}
               height={400}
               className="rounded-md w-4/6 h-3/6 "
               /> 
            </div>

        </div>
    )


}

export function BlockLogoTwo({bilde, title, text}){

    return(
        <div className="lg:w-full md:w-full w-full h-full flex md:flex-row flex-col lg:items-start items-center lg:p-12 p-12 md:gap-28  gap-12">
            
            <div className="flex flex-col items-center  w-5/6 h-full md:shadow-lg p-20 ">
               <Image
               src={bilde}
               width={400}
               height={400}
               className="rounded-md w-full h-full "
               /> 
            </div>
            <div className="md:w-full w-full flex flex-col">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>

        </div>
    )


}