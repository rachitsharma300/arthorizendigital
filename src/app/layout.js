import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${cormorant.variable} ${jost.variable} bg-brand-white text-brand-black dark:bg-brand-black dark:text-brand-white antialiased selection:bg-brand-gold selection:text-brand-black font-body overflow-x-hidden transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}