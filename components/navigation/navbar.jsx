
import Link from "next/link"
import HamburgerMenu from "./hamburger"



export function NavBar({hamfill}){


    return(
        <div className="w-screen h-16 flex flex-row items-center justify-end md:pr-5 lg:pr-10 pr-4 bg-portfolio-primary-blue md:bg-kv-white lg:bg-kv-white relative z-0" >
          <div className="md:flex flex-row lg:gap-4 md:gap-2 hidden" >

             

              <div className="w-20 h-5 text-center ">
                <Link
                  href="/"
                  aria-label="link til hjem"
                  
                >
                  Hjem
                </Link>
              </div>

         

              <div className="w-20 h-5 text-center">
                 <Link
                  href="/omMeg"
                  aria-label="link til siden om meg"
                  
                  >
                  Om meg
                </Link>
              </div>

              <div className="w-20 h-5 text-center ">
                 <Link
                  target="_blank" 
                  href="https://github.com/AndyKodehode"
                  aria-label="link til gitHub"
                  
                  >
                  GitHub
                </Link>
              </div>
          </div>

          <div className="block md:hidden lg:hidden w-10 h-10 ">
            <HamburgerMenu hamFill={hamfill}/>
          </div>
          
        </div>
    )
}

    /* <div className="w-20 h-5 ">
                <Link
                  href="/kontakt"
                  aria-label="link til kontaktsiden"
                  
                >
                  Kontakt
                </Link>
              </div> */