import TopNav from "@/components/TopNav";
import BottomNav from "@/components/BottomNav";
import { User, Mail, Phone, MapPin, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";

const Conta = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <section className="px-4 py-5 pb-24">
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-3">
            <User className="w-10 h-10 text-primary" />
          </div>
          <h1 className="font-display font-bold text-xl text-foreground">A Minha Conta</h1>
          <p className="text-sm text-muted-foreground">Gerir perfil e preferências</p>
        </div>

        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-card border border-border">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-display font-semibold text-sm text-foreground">Dados Pessoais</h2>
              <Button variant="ghost" size="sm" className="text-primary">
                <Edit className="w-4 h-4 mr-1" /> Editar
              </Button>
            </div>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-foreground">Utilizador DojoFinder</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-foreground">utilizador@email.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-foreground">+351 912 345 678</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-foreground">Faro, Algarve</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-card border border-border">
            <h2 className="font-display font-semibold text-sm text-foreground mb-3">Estatísticas</h2>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div>
                <p className="font-bold text-lg text-primary">12</p>
                <p className="text-xs text-muted-foreground">Aulas</p>
              </div>
              <div>
                <p className="font-bold text-lg text-primary">3</p>
                <p className="text-xs text-muted-foreground">Academias</p>
              </div>
              <div>
                <p className="font-bold text-lg text-primary">2</p>
                <p className="text-xs text-muted-foreground">Modalidades</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BottomNav />
    </div>
  );
};

export default Conta;
