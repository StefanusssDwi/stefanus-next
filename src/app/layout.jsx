// src/app/layout.jsx
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SplashWrapper from "../components/SplashWraper";
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata = {
  title: "Stefanus Dwi Christianto | Fullstack Developer",
  description: "Portofolio profesional Stefanus, seorang Fresh Graduate Fullstack Developer. Logic to Pixels.",
  
  keywords: ["Stefanus", "Frontend Developer", "Fullstack Developer", "Portofolio IT", "ReactJS", "NextJS", "Fresh Graduate"],
  
  authors: [{ name: "Stefanus Dwi Christianto" }],

  openGraph: {
    title: "STEFANUS | Fullstack Developer",
    description: "Merakit aplikasi web modern dari hulu ke hilir.",
    url: "",
    siteName: "Portofolio Stefanus",
    images: [
      {
        url: "https://stefanusdwichristianto.my.id/og-image.png",
        width: 1200,
        height: 630,
        alt: "Preview Portofolio Stefanus",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Stefanus Dwi Christianto | Fullstack Developer",
    description: "Merakit aplikasi web modern dari hulu ke hilir.",
    images: ["https://stefanusdwichristianto.my.id/og-image.png"],
  },

  verification: {
    google: "8LPCjF31Pb1Tbscpsd0vJAR-MfX-2AfDnaI50W2Wgi4",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <SplashWrapper>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </SplashWrapper>
        <GoogleAnalytics gaID="G-6C90B573VQ" />
      </body>
    </html>
  );
}