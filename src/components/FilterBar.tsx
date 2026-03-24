import { Building2, Calendar, MapPin, Filter } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const filterOptions = {
  modalidades: ["Karaté", "Jiu-Jitsu", "Muay Thai", "Taekwondo", "Judo", "Boxe", "MMA", "Kickboxing"],
  horarios: ["Manhã (06:00-12:00)", "Tarde (12:00-17:00)", "Noite (17:00-22:00)"],
  distancia: ["Até 5 km", "Até 10 km", "Até 25 km", "Qualquer distância"],
};

interface FilterBarProps {
  onClearModality?: () => void;
}

const FilterBar = ({ onClearModality }: FilterBarProps) => {
  const navigate = useNavigate();
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({
    modalidades: [],
    horarios: [],
    distancia: [],
  });

  const toggleFilter = (category: string, value: string) => {
    setSelectedFilters((prev) => {
      const current = prev[category] || [];
      return {
        ...prev,
        [category]: current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value],
      };
    });
  };

  const totalFilters = Object.values(selectedFilters).flat().length;

  return (
    <div className="flex gap-2 px-4 py-3 overflow-x-auto no-scrollbar">
      <button
        onClick={() => {
          onClearModality?.();
          setTimeout(() => document.querySelector("#academy-list")?.scrollIntoView({ behavior: "smooth" }), 50);
        }}
        className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-foreground whitespace-nowrap hover:border-primary hover:text-primary transition-colors shrink-0"
      >
        <Building2 className="w-4 h-4" />
        Academias
      </button>

      <button
        onClick={() => navigate("/calendario")}
        className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-foreground whitespace-nowrap hover:border-primary hover:text-primary transition-colors shrink-0"
      >
        <Calendar className="w-4 h-4" />
        Calendário
      </button>

      <button
        onClick={() => {
          toast.info("A localizar...", { description: "A procurar academias perto de si." });
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              () => {
                toast.success("Localização encontrada!", { description: "A mostrar academias mais próximas." });
                document.querySelector("#academy-list")?.scrollIntoView({ behavior: "smooth" });
              },
              () => {
                toast.error("Sem permissão", { description: "Ative a localização nas definições do browser." });
              }
            );
          } else {
            toast.error("Geolocalização não suportada neste browser.");
          }
        }}
        className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-foreground whitespace-nowrap hover:border-primary hover:text-primary transition-colors shrink-0"
      >
        <MapPin className="w-4 h-4" />
        Perto de mim
      </button>

      <Sheet>
        <SheetTrigger asChild>
          <button className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-foreground whitespace-nowrap hover:border-primary hover:text-primary transition-colors shrink-0 relative">
            <Filter className="w-4 h-4" />
            Filtros
            {totalFilters > 0 && (
              <span className="ml-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">
                {totalFilters}
              </span>
            )}
          </button>
        </SheetTrigger>
        <SheetContent side="bottom" className="rounded-t-2xl max-h-[80vh] overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="font-display">Filtros</SheetTitle>
          </SheetHeader>
          <div className="py-4 space-y-5">
            <div>
              <h3 className="font-display font-semibold text-sm text-foreground mb-2">Modalidades</h3>
              <div className="flex flex-wrap gap-2">
                {filterOptions.modalidades.map((m) => (
                  <button
                    key={m}
                    onClick={() => toggleFilter("modalidades", m)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      selectedFilters.modalidades.includes(m)
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground hover:bg-primary/10"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display font-semibold text-sm text-foreground mb-2">Horário</h3>
              <div className="flex flex-wrap gap-2">
                {filterOptions.horarios.map((h) => (
                  <button
                    key={h}
                    onClick={() => toggleFilter("horarios", h)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      selectedFilters.horarios.includes(h)
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground hover:bg-primary/10"
                    }`}
                  >
                    {h}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display font-semibold text-sm text-foreground mb-2">Distância</h3>
              <div className="flex flex-wrap gap-2">
                {filterOptions.distancia.map((d) => (
                  <button
                    key={d}
                    onClick={() => toggleFilter("distancia", d)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      selectedFilters.distancia.includes(d)
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground hover:bg-primary/10"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex gap-2 pt-2">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setSelectedFilters({ modalidades: [], horarios: [], distancia: [] })}
              >
                Limpar
              </Button>
              <Button className="flex-1">
                Aplicar filtros
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default FilterBar;
