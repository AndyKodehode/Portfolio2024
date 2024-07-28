import Image from "next/image"

export function ProjectHeaderOne({bilde, dato, rolle, kunde}){
    return(
        <div className="w-full flex flex-col gap-20 items-center">
            <div className="w-full lg:w-11/12 lg:h-[80vh] flex items-center justify-center bg-portfolio-primary-blue p-24 ">
                <div className="flex items-center justify-center md:w-4/6 lg:w-3/6 w-3/6 ml-7">
                        <Image
                        src={bilde}
                        width={500}
                        height={500}
                        className="w-full lg:w-5/6 md:w-3/6 h-5/6 object-cover "
                        />
                </div>
            </div>

            <div className="flex flex row w-10/12">
                        <div className="flex flex-col w-full gap-7">
                            <h2>Prosjekt detaljer</h2>

                            <div className="flex flex-row gap-4">
                                <div className="flex flex-col gap-7">
                                    <h4 className="text-[20px] fonte-semibold ">Dato:</h4>
                                    <h4 className="text-[20px] fonte-semibold">Kunde:</h4>
                                    <h4 className="text-[20px] fonte-semibold">Rolle:</h4>
                                </div>
                                <div className="flex flex-col gap-7">
                                    <h4 className="text-[20px] font-normal ">{dato}</h4>
                                    <h4 className="text-[20px] font-normal">{kunde}</h4>
                                    <h4 className="text-[20px] font-normal">{rolle}</h4>
                                </div>
                            </div>
                           
                        </div>

                        <div className="flex flex-col w-full gap-7">
                           <h2>Om prosjektet</h2>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ullam itaque debitis amet, nisi sit dolore enim libero nihil vel iusto fugiat minus sunt reiciendis, voluptates, cupiditate qui optio non?</p>
                        </div>
                </div>
        </div>
    )
}


export function ProjectHeaderTwo({bilde, dato, kunde, rolle}){
    return(
        <div className="w-full flex flex-col gap-20 items-center">
                <div className="w-full lg:w-full lg:h-[80vh] h-[40vh] flex items-center justify-center bg-portfolio-primary-blue  lg:p-24">
                    
                            <Image
                            src={bilde}
                            width={500}
                            height={500}
                            className="w-4/6 lg:w-5/6 lg:h-full h-5/6 lg:object-cover  object-contain lg:shadow-2xl ml-4"
                            />
                </div>

                <div className="flex flex row w-full p-12">
                        <div className="flex flex-col w-full gap-7">
                            <h2 >Prosjekt detaljer</h2>

                            <div className="flex flex-row gap-4">
                                <div className="flex flex-col gap-7">
                                    <h4 className="text-[20px] fonte-semibold ">Dato:</h4>
                                    <h4 className="text-[20px] fonte-semibold">Kunde:</h4>
                                    <h4 className="text-[20px] fonte-semibold">Rolle:</h4>
                                </div>
                                <div className="flex flex-col gap-7">
                                    <h4 className="text-[20px] font-normal ">{dato}</h4>
                                    <h4 className="text-[20px] font-normal">{kunde}</h4>
                                    <h4 className="text-[20px] font-normal">{rolle}</h4>
                                </div>
                            </div>
                           
                        </div>

                        <div className="flex flex-col w-full gap-7">
                           <h2>Om prosjektet</h2>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ullam itaque debitis amet, nisi sit dolore enim libero nihil vel iusto fugiat minus sunt reiciendis, voluptates, cupiditate qui optio non?</p>
                        </div>
                </div>
        </div>
    )
}