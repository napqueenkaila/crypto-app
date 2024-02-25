"use client";
// import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { useState } from "react";
import Providers from "./styling/theme/Providers";

import Navbar from "./components/Navbar/navbar";
import MarketDataBar from "./components/Navbar/MarketDataBar";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Crypto App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [displayMode, setDisplayMode] = useState<string>("dark");

  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <Providers displayMode={displayMode}>
          <MarketDataBar />
          <Navbar setDisplayMode={setDisplayMode} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
