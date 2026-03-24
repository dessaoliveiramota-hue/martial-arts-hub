import { Building2, Calendar, MapPin, Filter } from "lucide-react";

const filters = [
  { icon: Building2, label: "Academias" },
  { icon: Calendar, label: "Calendário" },
  { icon: MapPin, label: "Perto de mim" },
  { icon: Filter, label: "Filtros" },
];

const FilterBar = () => {
  return (
    <div className="flex gap-2 px-4 py-3 overflow-x-auto no-scrollbar">
      {filters.map((f) => (
        <button
          key={f.label}
          className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-foreground whitespace-nowrap hover:border-primary hover:text-primary transition-colors shrink-0"
        >
          <f.icon className="w-4 h-4" />
          {f.label}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
