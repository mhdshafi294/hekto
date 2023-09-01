import "./globals.css";
import { Inter, Roboto_Mono, Josefin_Sans, Lato } from "next/font/google";

import Navbar from "@/components/navbar/Navbar";
import { LanguageProvider } from "@/context/LanguageContext";
import Footer from "@/components/footer/Footer";
import { ShopContextProvider } from "@/context/ShopContext";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// export const roboto_mono = Roboto_Mono({
//   subsets: ["latin"],
//   display: "swap",
// });

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const lato = Lato({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Hekto",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={josefin.className}>
        <LanguageProvider>
          <ShopContextProvider>
            <Navbar />
            <div className="min-h-[calc(100vh-(637px))]">{children}</div>
            <Footer />
          </ShopContextProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
