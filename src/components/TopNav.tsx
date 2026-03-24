import logo from "@/assets/logo.jpeg";
import { Search, Bell } from "lucide-react";

const TopNav = () => {
  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src={logo} alt="DojoFinder" className="h-9 w-9 rounded-lg object-cover" />
        <span className="font-display font-bold text-lg text-foreground">
          Dojo<span className="text-primary">Finder</span>
        </span>
      </div>
      <div className="flex items-center gap-3">
        <button className="p-2 rounded-full hover:bg-muted transition-colors" aria-label="Pesquisar">
          <Search className="w-5 h-5 text-muted-foreground" />
        </button>
        <button className="p-2 rounded-full hover:bg-muted transition-colors relative" aria-label="Notificações">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
        </button>
      </div>
    </header>
  );
};

export default TopNav;
