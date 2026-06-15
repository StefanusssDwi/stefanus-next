// src/app/layout.jsx
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SplashWrapper from "../components/SplashWraper";

export const metadata = {
  title: "STEFANUS | Fullstack Developer",
  description: "Stefanus' professional portfolio, a full-stack developer. Combines solid IT competency with precision front-end design to build impactful modern web applications.",
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