import type { Metadata } from "next";
import { MenuContent } from "./MenuContent";

export const metadata: Metadata = {
  title: "El menú | Lo de Jesús - Carnes y Vinos",
  description: "Menú farm to table con productos locales y de estación. Carnes a la parrilla y maridaje con los mejores vinos de Argentina. Asesorado por el chef Darío Gualtieri.",
};

export default function MenuPage() {
  return <MenuContent />;
}
