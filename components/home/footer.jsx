import Link from "next/link";


export function Footer(){
    return(
        <div className="md:w-screen w-full bg-portfolio-secondary-darkBlue h-36 flex justify-center z-12 mt-24 relative">
                <div className="flex flex-col justify-center items-center text-white gap-4 ">
                   <h3 >Kontakt</h3>
                   <div className="flex md:gap-12 xs:gap-7 2xs:gap-4">
                   <Link target="_blank" href="https://www.linkedin.com/in/anders-hausvik-6b1b24203/">LinkedIn </Link>
                   <p> hausvikanders@gmail.com</p>
                   <Link target="_blank" href="https://github.com/AndyKodehode">gitHub </Link>

                   </div>
                   
                </div>

        </div>
    )
}