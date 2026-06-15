// src/app/layout.jsx
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SplashWrapper from "../components/SplashWraper";

export const metadata = {
  title: "STEFANUS | Fullstack Developer",
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
    title: "STEFANUS | Fullstack Developer",
    description: "Merakit aplikasi web modern dari hulu ke hilir.",
    images: ["https://stefanusdwichristianto.my.id/og-image.png"],
  },
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
      </body>
    </html>
  );
}