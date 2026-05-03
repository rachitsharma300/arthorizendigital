import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata = {
  title: "Arthorizen Digital | Interior Design",
  description:
    "Transform your space with Arthorizen Digital — premium interior design solutions for modern living and workspaces.",
  keywords: "interior design, home decor, workspace design, luxury interiors",
  openGraph: {
    title: "Arthorizen Digital | Interior Design",
    description: "Premium interior design solutions for modern living.",
    url: "https://arthorizendigital.com",
    siteName: "Arthorizen Digital",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${jost.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}