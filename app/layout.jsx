import '@styles/globals.css';
import { Barlow, Fraunces } from "next/font/google";



export const metadata = {
  title: "Sunny Side",
  description: "A website for your summer wears",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='font-barlow'>
        <main className="relative w-full overflow-hidden ">
               
         {children}               
        </main>
        
      </body>
    </html>
  );
}
