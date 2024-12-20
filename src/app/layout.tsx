import { Footer1 } from "@/components/footer";
import { Header1 } from "@/components/navbar";
import "@/styles/globals.css";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton, SignIn } from '@clerk/nextjs'

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body>
          <header className="flex justify-between">
            <UserButton/>
          </header>
          <Header1/>
          <div className="mb-5"></div>
          <main className="flex justify-center items-center">
            {children}
          </main>
          <Footer1 />
        </body>
      </html>
    </ClerkProvider>
  )
}