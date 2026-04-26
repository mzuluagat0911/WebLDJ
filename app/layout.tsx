import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Providers } from "./components/Providers";
import { FloatingReservaButton } from "./components/FloatingReservaButton";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
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
      <body className={`${poppins.variable} antialiased`}>
        <Providers>
          {children}
          <FloatingReservaButton />
        </Providers>
      </body>
    </html>
  );
}
