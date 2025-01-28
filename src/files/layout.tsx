import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Motion example: Parallax",
  description: "An example of creating a parallax effect using Motion for React's useScroll hook.",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <main id="sandbox">{children}</main>
      </body>
    </html>
  )
}

