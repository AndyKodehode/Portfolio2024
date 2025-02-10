import Image from "next/image";

export function Programme({image, title}){

    return(

        <div className="w-40 flex flex-col gap-4 items-center">
            <div>
                    <Image 
                    alt="bilde av valg for brukeren"
                    src={image}
                    width={100}
                    height={100}
                ></Image>
                                        
            </div>
            <div>
                <h4>{title}</h4>
            </div>
        </div>

    )
}