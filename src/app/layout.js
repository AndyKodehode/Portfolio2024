import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        
      <div className="flex-1 overflow-x-hidden">{children}</div>
      
      </body>
    </html>
  );
}
