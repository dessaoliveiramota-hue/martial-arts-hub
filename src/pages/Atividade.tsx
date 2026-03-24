import TopNav from "@/components/TopNav";
import BottomNav from "@/components/BottomNav";
import { Activity, Calendar, MapPin } from "lucide-react";

const activities = [
  { title: "Aula de Karaté", academy: "Dojo Algarve", date: "Hoje, 18:00", type: "aula" },
  { title: "Treino Livre de Jiu-Jitsu", academy: "BJJ Portimão Academy", date: "Amanhã, 10:00", type: "treino" },
  { title: "Seminário de Muay Thai", academy: "Fight Club Lagos", date: "Sáb, 15:00", type: "evento" },
  { title: "Aula de Taekwondo", academy: "Taekwondo Olhão", date: "Seg, 16:30", type: "aula" },
];

const typeColors: Record<string, string> = {
  aula: "bg-primary/10 text-primary",
  treino: "bg-green-500/10 text-green-600",
  evento: "bg-amber-500/10 text-amber-600",
};

const Atividade = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <section className="px-4 py-5 pb-24">
        <div className="flex items-center gap-2 mb-5">
          <Activity className="w-5 h-5 text-primary" />
          <h1 className="font-display font-bold text-xl text-foreground">Atividade</h1>
        </div>
        <div className="space-y-3">
          {activities.map((act, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
            >
              <div className={`px-2 py-1 rounded-full text-[11px] font-semibold shrink-0 ${typeColors[act.type]}`}>
                {act.type === "aula" ? "Aula" : act.type === "treino" ? "Treino" : "Evento"}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm text-foreground">{act.title}</p>
                <div className="flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{act.academy}</span>
                </div>
                <div className="flex items-center gap-1 mt-0.5">
                  <Calendar className="w-3 h-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{act.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <BottomNav />
    </div>
  );
};

export default Atividade;
