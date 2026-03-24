import TopNav from "@/components/TopNav";
import BottomNav from "@/components/BottomNav";
import { Settings, Moon, Globe, Bell, Shield, HelpCircle, LogOut } from "lucide-react";

const options = [
  { icon: Moon, label: "Modo Escuro", description: "Alterar aparência da aplicação" },
  { icon: Globe, label: "Idioma", description: "Português (Portugal)" },
  { icon: Bell, label: "Notificações", description: "Gerir alertas e avisos" },
  { icon: Shield, label: "Privacidade", description: "Controlar dados pessoais" },
  { icon: HelpCircle, label: "Ajuda & Suporte", description: "FAQ e contacto" },
];

const Opcoes = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <section className="px-4 py-5 pb-24">
        <div className="flex items-center gap-2 mb-5">
          <Settings className="w-5 h-5 text-primary" />
          <h1 className="font-display font-bold text-xl text-foreground">Opções</h1>
        </div>
        <div className="space-y-2">
          {options.map((opt) => (
            <button
              key={opt.label}
              className="w-full flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors text-left"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <opt.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-sm text-foreground">{opt.label}</p>
                <p className="text-xs text-muted-foreground">{opt.description}</p>
              </div>
            </button>
          ))}
          <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-card border border-destructive/20 hover:border-destructive/50 transition-colors text-left mt-4">
            <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
              <LogOut className="w-5 h-5 text-destructive" />
            </div>
            <div>
              <p className="font-medium text-sm text-destructive">Terminar Sessão</p>
              <p className="text-xs text-muted-foreground">Sair da sua conta</p>
            </div>
          </button>
        </div>
      </section>
      <BottomNav />
    </div>
  );
};

export default Opcoes;
