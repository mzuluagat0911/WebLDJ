import type { Metadata } from "next";
import { Libre_Caslon_Text, Nunito_Sans } from "next/font/google";
import { Providers } from "./components/Providers";
import { FloatingReservaButton } from "./components/FloatingReservaButton";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito-sans",
});

const libreCaslonText = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-caslon",
});

export const metadata: Metadata = {
  title: "Lo de Jesús - Carnes y Vinos",
  description: "El templo de la carne y el vino. La mítica esquina porteña de la gastronomía argentina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${nunitoSans.variable} ${libreCaslonText.variable} antialiased`}>
        <Providers>
          {children}
          <FloatingReservaButton />
        </Providers>
      </body>
    </html>
  );
}
