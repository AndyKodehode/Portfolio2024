import Link from "next/link";


export function Footer(){
    return(
        <div className="w-screen bg-portfolio-secondary-darkBlue h-36 flex justify-center mt-24">
                <div className="flex flex-col justify-center items-center text-white gap-4 ">
                   <h3 >Kontakt</h3>
                   <div className="flex gap-12">
                   <Link target="_blank" href="https://www.linkedin.com/in/anders-hausvik-6b1b24203/">LinkedIn </Link>
                   <p> hausvikanders@gmail.com</p>
                   <Link target="_blank" href="https://github.com/AndyKodehode">gitHub </Link>

                   </div>
                   
                </div>

        </div>
    )
}