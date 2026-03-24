import logo from "@/assets/logo.jpeg";
import { Search, Bell, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TopNav = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();

  const notifications = [
    { title: "Nova aula disponível", desc: "Karaté no Dojo Algarve - Hoje às 18:00", time: "Há 5 min" },
    { title: "Inscrição confirmada", desc: "BJJ Portimão Academy - Jiu-Jitsu", time: "Há 1 hora" },
    { title: "Promoção especial", desc: "Fight Club Lagos - 1ª aula grátis", time: "Há 3 horas" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-card border-b border-border px-4 py-3 flex items-center justify-between">
        {showSearch ? (
          <div className="flex items-center gap-2 flex-1">
            <Search className="w-5 h-5 text-muted-foreground shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Pesquisar academias, modalidades..."
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
              autoFocus
            />
            <button onClick={() => { setShowSearch(false); setSearchQuery(""); }} className="p-1">
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
              <img src={logo} alt="DojoFinder" className="h-9 w-9 rounded-lg object-cover" />
              <span className="font-display font-bold text-lg text-foreground">
                Dojo<span className="text-primary">Finder</span>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => setShowSearch(true)} className="p-2 rounded-full hover:bg-muted transition-colors" aria-label="Pesquisar">
                <Search className="w-5 h-5 text-muted-foreground" />
              </button>
              <button onClick={() => setShowNotifications(!showNotifications)} className="p-2 rounded-full hover:bg-muted transition-colors relative" aria-label="Notificações">
                <Bell className="w-5 h-5 text-muted-foreground" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
              </button>
            </div>
          </>
        )}
      </header>

      {showNotifications && (
        <div className="fixed inset-0 z-[60]" onClick={() => setShowNotifications(false)}>
          <div className="absolute top-14 right-2 left-2 sm:left-auto sm:w-80 bg-card border border-border rounded-xl shadow-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-3 border-b border-border">
              <h3 className="font-display font-semibold text-sm text-foreground">Notificações</h3>
              <button onClick={() => setShowNotifications(false)}>
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
            <div className="max-h-72 overflow-y-auto">
              {notifications.map((n, i) => (
                <div key={i} className="p-3 border-b border-border last:border-b-0 hover:bg-muted/50 transition-colors cursor-pointer">
                  <p className="text-sm font-medium text-foreground">{n.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{n.desc}</p>
                  <p className="text-[11px] text-muted-foreground mt-1">{n.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TopNav;
