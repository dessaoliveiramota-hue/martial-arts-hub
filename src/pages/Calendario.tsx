import TopNav from "@/components/TopNav";
import BottomNav from "@/components/BottomNav";
import { Calendar as CalendarIcon, Clock, MapPin } from "lucide-react";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

const classSchedule = [
  { date: "2026-03-24", title: "Karaté - Iniciantes", academy: "Dojo Algarve", time: "18:00 - 19:30" },
  { date: "2026-03-24", title: "Jiu-Jitsu - Avançado", academy: "BJJ Portimão Academy", time: "19:00 - 20:30" },
  { date: "2026-03-25", title: "Muay Thai - Todos os níveis", academy: "Fight Club Lagos", time: "17:00 - 18:30" },
  { date: "2026-03-25", title: "Taekwondo - Juvenil", academy: "Taekwondo Olhão", time: "16:00 - 17:00" },
  { date: "2026-03-26", title: "Judo - Competição", academy: "Dojo Algarve", time: "18:30 - 20:00" },
  { date: "2026-03-26", title: "MMA - Open Mat", academy: "BJJ Portimão Academy", time: "20:00 - 22:00" },
  { date: "2026-03-27", title: "Boxe - Cardio", academy: "Fight Club Lagos", time: "17:30 - 18:30" },
  { date: "2026-03-28", title: "Kickboxing - Adultos", academy: "Taekwondo Olhão", time: "18:00 - 19:30" },
];

const Calendario = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const formatDate = (d: Date) =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

  const filtered = selectedDate
    ? classSchedule.filter((c) => c.date === formatDate(selectedDate))
    : classSchedule;

  const datesWithClasses = classSchedule.map((c) => new Date(c.date + "T00:00:00"));

  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <section className="px-4 py-5 pb-24">
        <div className="flex items-center gap-2 mb-5">
          <CalendarIcon className="w-5 h-5 text-primary" />
          <h1 className="font-display font-bold text-xl text-foreground">Calendário de Aulas</h1>
        </div>

        <div className="bg-card rounded-xl border border-border p-3 mb-5 flex justify-center">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            modifiers={{ hasClass: datesWithClasses }}
            modifiersClassNames={{ hasClass: "bg-primary/20 font-bold text-primary" }}
            className="pointer-events-auto"
          />
        </div>

        <h2 className="font-display font-semibold text-sm text-foreground mb-3">
          {selectedDate
            ? `Aulas a ${selectedDate.toLocaleDateString("pt-PT", { weekday: "long", day: "numeric", month: "long" })}`
            : "Todas as aulas"}
        </h2>

        {filtered.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-8">Sem aulas neste dia.</p>
        ) : (
          <div className="space-y-3">
            {filtered.map((c, i) => (
              <div key={i} className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                <p className="font-medium text-sm text-foreground">{c.title}</p>
                <div className="flex items-center gap-1 mt-1.5">
                  <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{c.academy}</span>
                </div>
                <div className="flex items-center gap-1 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{c.time}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      <BottomNav />
    </div>
  );
};

export default Calendario;
