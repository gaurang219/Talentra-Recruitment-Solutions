
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import NextTopLoader from 'nextjs-toploader';
import logo from "../public/images/relives.png"

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Talentra Recruitment Solutions",
  // description: "Grow your business with Relives, a design & development studio.",
  openGraph: {
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: 'Relives Logo',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;

}>) {
  return (
    <html lang="en">
      <body className={font.className}>

        <>
        <NextTopLoader
         color="#0B0479"
         height={4}
         easing="ease"
         speed={70}
         shadow="0 0 10px #2299DD,0 0 5px #2299DD"
         template='<div class="bar" role="bar"><div class="peg"></div></div> 
         <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
         zIndex={1600}
         showAtBottom={false}
        />
          {children}
          <Analytics />
        </>

      </body>
    </html>
  );
}
