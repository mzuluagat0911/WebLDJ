import type { Metadata } from "next";
import { EventosContent } from "./EventosContent";

export const metadata: Metadata = {
  title: "Eventos | Lo de Jesús - Carnes y Vinos",
  description: "Jornadas de trabajo, degustación de vinos, almuerzos, cenas y cocktails. Nuestros salones para tu evento.",
};

export default function EventosPage() {
  return <EventosContent />;
}
