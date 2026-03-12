import type { Metadata } from "next";
import { NuestraHistoriaContent } from "./NuestraHistoriaContent";

export const metadata: Metadata = {
  title: "Nuestra historia | Lo de Jesús - Carnes y Vinos",
  description: "Más de 70 años de pasión culinaria. La historia de Lo de Jesús desde 1953 hasta hoy.",
};

export default function NuestraHistoriaPage() {
  return <NuestraHistoriaContent />;
}
