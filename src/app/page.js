import Image from "next/image";
import { NavBar } from "../../components/navigation/navbar";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen p-0" >
      <NavBar/>
    
    </main>
  );
}
