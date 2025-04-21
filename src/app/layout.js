import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--outfit",
  display: "swap",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--ovo",
  display: "swap",
});

export const metadata = {
  title: "Julnar Nabeel - Portfolio",
  description: "Portfolio of Julnar Nabeel - Front-End Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${ovo.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
