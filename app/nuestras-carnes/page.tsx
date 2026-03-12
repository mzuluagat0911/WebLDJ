import type { Metadata } from "next";
import { NuestrasCarnesContent } from "./NuestrasCarnesContent";

export const metadata: Metadata = {
  title: "Nuestras carnes | Lo de Jesús - Carnes y Vinos",
  description: "Selección rigurosa, trazabilidad y maduración. Nuestros cortes Hereford y Aberdeen Angus a las brasas.",
};

export default function NuestrasCarnesPage() {
  return <NuestrasCarnesContent />;
}
