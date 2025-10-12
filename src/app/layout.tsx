import "./globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "Tobakkhuset - Eksklusiv tobakk",
  description: "Din destinasjon for førsteklasses tobakksprodukter og tilbehør"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb">
      <body>
        <Navbar />
        <main className="container">
          {children}
        </main>
        <footer className="footer">
          <div className="container footer-inner">
            © 2025 Tobakkhuset. Alle rettigheter reservert.
          </div>
        </footer>
      </body>
    </html>
  );
}
