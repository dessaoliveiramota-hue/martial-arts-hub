import { Building2, Calendar, MapPin, Filter } from "lucide-react";
import { useState } from "react";

const filters = [
  { icon: Building2, label: "Academias" },
  { icon: Calendar, label: "Calendário" },
  { icon: MapPin, label: "Perto de mim" },
  { icon: Filter, label: "Filtros" },
];

const FilterBar = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="flex gap-2 px-4 py-3 overflow-x-auto no-scrollbar">
      {filters.map((f) => {
        const isActive = active === f.label;
        return (
          <button
            key={f.label}
            onClick={() => setActive(isActive ? null : f.label)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full border text-sm font-medium whitespace-nowrap transition-colors shrink-0 ${
              isActive
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-foreground hover:border-primary hover:text-primary"
            }`}
          >
            <f.icon className="w-4 h-4" />
            {f.label}
          </button>
        );
      })}
    </div>
  );
};

export default FilterBar;
