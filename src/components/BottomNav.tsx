import { Home, Settings, Activity, User } from "lucide-react";
import { useState } from "react";

const tabs = [
  { icon: Home, label: "Início" },
  { icon: Settings, label: "Opções" },
  { icon: Activity, label: "Atividade" },
  { icon: User, label: "Conta" },
];

const BottomNav = () => {
  const [active, setActive] = useState(0);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border pb-safe">
      <div className="flex justify-around items-center h-16">
        {tabs.map((tab, i) => {
          const isActive = active === i;
          return (
            <button
              key={tab.label}
              onClick={() => setActive(i)}
              className="flex flex-col items-center gap-0.5 pt-1 min-w-[64px] transition-colors"
            >
              <tab.icon
                className={`w-5 h-5 transition-colors ${
                  isActive ? "text-primary" : "text-nav-inactive"
                }`}
              />
              <span
                className={`text-[11px] font-medium transition-colors ${
                  isActive ? "text-primary" : "text-nav-inactive"
                }`}
              >
                {tab.label}
              </span>
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-primary mt-0.5" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
