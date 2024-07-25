
import Link from "next/link"
import HamburgerMenu from "./hamburger"



export function NavBar(){


    return(
        <div className="w-screen h-16  flex flex-row items-center justify-end md:pr-5 lg:pr-10 pr-4 bg-portfolio-primary-blue md:bg-white lg:bg-white" >
          <div className="md:flex flex-row lg:gap-4 md:gap-2 hidden" >

             

              <div className="w-20 h-5 ">
                <Link
                  href="/"
                  aria-label="gå til denne undersiden for å lese om vår visjon"
                  
                >
                  Hjem
                </Link>
              </div>

              <div className="w-20 h-5 ">
                <Link
                  href="/kontakt"
                  aria-label="gå til denne undersiden for å lese om vår visjon"
                  
                >
                  Kontakt
                </Link>
              </div>

              <div className="w-20 h-5 ">
                 <Link
                  href="/omMeg"
                  aria-label="gå til denne undersiden for å lese om vår visjon"
                  
                  >
                  Om meg
                </Link>
              </div>
          </div>

          <div className="block md:hidden lg:hidden w-10 h-10 ">
            <HamburgerMenu/>
          </div>
          
        </div>
    )
}