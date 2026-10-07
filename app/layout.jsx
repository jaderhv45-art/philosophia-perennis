import "./globals.css";
import { Cormorant_Garamond, Lora, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"], style: ["normal", "italic"], variable: "--font-display" });
const body = Lora({ subsets: ["latin"], variable: "--font-body" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: { default: "Philosophia Perennis", template: "%s · Philosophia Perennis" },
  description: "Ensaios sobre a sabedoria que atravessa os séculos.",
};

// Dark por padrão; respeita a escolha salva. Evita "flash" de tema.
const themeScript = `try{var t=localStorage.getItem('pp-theme')||'dark';document.documentElement.classList.toggle('dark',t==='dark')}catch(e){document.documentElement.classList.add('dark')}`;

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable} ${sans.variable} dark`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
