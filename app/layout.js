import { Alata, Inter, Jost, Lexend_Deca, Readex_Pro } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const readex = Readex_Pro({ subsets: ["latin"], display: 'swap', weight: ['300', '400', '500', '700'], });
const jost = Jost({ subsets: ["latin"], display: 'swap', weight: ['300', '400', '500', '700', '900'], });
const lexend = Lexend_Deca({ subsets: ["latin"], display: 'swap', weight: ['300', '400', '500', '700', '900'], });

export const metadata = {
  title: "Carta Digital | Orione",
  description: "Carta digital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>{children}</body>
    </html>
  );
}
