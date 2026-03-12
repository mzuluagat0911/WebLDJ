import type { Metadata } from "next";
import { PrensaContent } from "./PrensaContent";

export const metadata: Metadata = {
  title: "Prensa y comensales | Lo de Jesús - Carnes y Vinos",
  description: "Lo que la prensa y nuestros comensales dicen de Lo de Jesús. Reservá tu mesa.",
};

export default function PrensaPage() {
  return <PrensaContent />;
}
