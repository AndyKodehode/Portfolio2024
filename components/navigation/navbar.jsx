
import Link from "next/link"



export function NavBar(){


    return(
        <div className="w-screen h-16  flex flex-row items-center justify-end md:pr-7 lg:pr-10 pr-4" >
          <div className="md:flex flex-row gap-4 hidden" >

             

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

          <div className="block md:hidden lg:hidden w-10 h-10 bg-slate-600">

          </div>
          
        </div>
    )
}