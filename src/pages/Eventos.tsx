import TopNav from "@/components/TopNav";
import BottomNav from "@/components/BottomNav";
import { CalendarDays, MapPin, Clock, Users, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import academy1 from "@/assets/academy-1.jpg";
import academy2 from "@/assets/academy-2.jpg";
import academy3 from "@/assets/academy-3.jpg";
import academy4 from "@/assets/academy-4.jpg";

const eventos = [
  {
    title: "Campeonato Regional de Karaté",
    description: "Competição aberta a todas as faixas. Venha representar a sua academia no maior evento de Karaté do Algarve.",
    date: "5 Abril 2026",
    time: "09:00 - 18:00",
    location: "Pavilhão Municipal de Faro",
    academy: "Dojo Algarve",
    image: academy1,
    spots: 120,
    spotsLeft: 34,
    type: "Competição",
  },
  {
    title: "Seminário de Jiu-Jitsu com Mestre Ricardo",
    description: "Workshop intensivo de 3 horas com o Mestre Ricardo Almeida, faixa preta 4º grau, direto do Brasil.",
    date: "12 Abril 2026",
    time: "14:00 - 17:00",
    location: "BJJ Portimão Academy",
    academy: "BJJ Portimão Academy",
    image: academy2,
    spots: 40,
    spotsLeft: 8,
    type: "Seminário",
  },
  {
    title: "Noite de Lutas - Muay Thai & Boxe",
    description: "Evento de lutas amadoras com combates de Muay Thai e Boxe. Entrada livre para espectadores.",
    date: "19 Abril 2026",
    time: "20:00 - 23:00",
    location: "Fight Club Lagos",
    academy: "Fight Club Lagos",
    image: academy3,
    spots: 200,
    spotsLeft: 87,
    type: "Evento",
  },
  {
    title: "Workshop de Defesa Pessoal",
    description: "Aprenda técnicas básicas de defesa pessoal para o dia a dia. Aberto a todos, sem experiência necessária.",
    date: "26 Abril 2026",
    time: "10:00 - 12:00",
    location: "Taekwondo Olhão",
    academy: "Taekwondo Olhão",
    image: academy4,
    spots: 30,
    spotsLeft: 15,
    type: "Workshop",
  },
];

const typeColors: Record<string, string> = {
  Competição: "bg-primary/10 text-primary",
  Seminário: "bg-amber-500/10 text-amber-600",
  Evento: "bg-green-500/10 text-green-600",
  Workshop: "bg-blue-500/10 text-blue-600",
};

const Eventos = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <section className="px-4 py-5 pb-24">
        <div className="flex items-center gap-2 mb-5">
          <CalendarDays className="w-5 h-5 text-primary" />
          <h1 className="font-display font-bold text-xl text-foreground">Eventos</h1>
        </div>

        <div className="space-y-4">
          {eventos.map((evento, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="bg-card rounded-xl overflow-hidden border border-border shadow-sm"
            >
              <div className="relative">
                <img src={evento.image} alt={evento.title} className="w-full h-40 object-cover" loading="lazy" />
                <div className="absolute top-3 left-3">
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${typeColors[evento.type]}`}>
                    {evento.type}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-display font-semibold text-base text-foreground leading-tight">
                  {evento.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2">{evento.description}</p>

                <div className="mt-3 space-y-1.5">
                  <div className="flex items-center gap-1.5">
                    <CalendarDays className="w-3.5 h-3.5 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{evento.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{evento.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{evento.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      {evento.spotsLeft} vagas restantes de {evento.spots}
                    </span>
                  </div>
                </div>

                <div className="w-full bg-muted rounded-full h-1.5 mt-3">
                  <div
                    className="bg-primary h-1.5 rounded-full transition-all"
                    style={{ width: `${((evento.spots - evento.spotsLeft) / evento.spots) * 100}%` }}
                  />
                </div>

                <div className="flex gap-2 mt-4">
                  <Button size="sm" className="flex-1">
                    <Ticket className="w-4 h-4 mr-1" />
                    Inscrever-me
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    Saber mais
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <BottomNav />
    </div>
  );
};

export default Eventos;
