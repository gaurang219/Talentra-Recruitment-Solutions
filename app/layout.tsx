import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Relives | Design & Development Studio",
  description: "Grow your business with Relives, a design & development studio.",
  openGraph: {
    images: [
      {
        url: "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frelives.676f82cc.png&w=1080&q=75",
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

        {children}
        <Analytics />

      </body>
    </html>
  );
}
