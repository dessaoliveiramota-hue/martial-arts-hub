import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, MapPin, Clock, Phone, Globe, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import BottomNav from "@/components/BottomNav";
import academy1 from "@/assets/academy-1.jpg";
import academy2 from "@/assets/academy-2.jpg";
import academy3 from "@/assets/academy-3.jpg";
import academy4 from "@/assets/academy-4.jpg";

const academiesData: Record<string, {
  name: string; location: string; modalities: string[]; rating: number;
  schedule: string; image: string; phone: string; website: string; description: string;
}> = {
  "dojo-algarve": {
    name: "Dojo Algarve", location: "Faro, Algarve", modalities: ["Karaté", "Judo"],
    rating: 4.8, schedule: "Seg-Sex 18:00 - 21:00", image: academy1,
    phone: "+351 289 123 456", website: "www.dojoalgarve.pt",
    description: "O Dojo Algarve é uma academia de referência em Faro, dedicada ao ensino de Karaté e Judo há mais de 15 anos. Contamos com instrutores certificados e instalações modernas."
  },
  "bjj-portimao-academy": {
    name: "BJJ Portimão Academy", location: "Portimão, Algarve", modalities: ["Jiu-Jitsu", "MMA"],
    rating: 4.9, schedule: "Seg-Sáb 09:00 - 22:00", image: academy2,
    phone: "+351 282 456 789", website: "www.bjjportimao.pt",
    description: "A BJJ Portimão Academy é o maior centro de Jiu-Jitsu e MMA do Algarve, com mais de 200 alunos ativos e professores de renome internacional."
  },
  "fight-club-lagos": {
    name: "Fight Club Lagos", location: "Lagos, Algarve", modalities: ["Muay Thai", "Boxe"],
    rating: 4.6, schedule: "Seg-Sex 17:00 - 21:30", image: academy3,
    phone: "+351 282 789 012", website: "www.fightclublagos.pt",
    description: "O Fight Club Lagos é especializado em desportos de combate, oferecendo aulas de Muay Thai e Boxe para todos os níveis."
  },
  "taekwondo-olhao": {
    name: "Taekwondo Olhão", location: "Olhão, Algarve", modalities: ["Taekwondo", "Kickboxing"],
    rating: 4.7, schedule: "Ter-Sáb 16:00 - 20:00", image: academy4,
    phone: "+351 289 345 678", website: "www.tkdolhao.pt",
    description: "O Taekwondo Olhão promove as artes marciais coreanas há mais de uma década, com foco na formação de jovens atletas e competição."
  },
};

const AcademyDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const academy = slug ? academiesData[slug] : null;

  if (!academy) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Academia não encontrada.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="relative">
        <img src={academy.image} alt={academy.name} className="w-full h-56 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 w-9 h-9 rounded-full bg-card/80 backdrop-blur flex items-center justify-center"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-card/80 backdrop-blur flex items-center justify-center"
        >
          <Heart className={`w-5 h-5 ${liked ? "fill-primary text-primary" : "text-foreground"}`} />
        </button>
      </div>

      <div className="px-4 -mt-6 relative z-10">
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex items-start justify-between">
            <h1 className="font-display font-bold text-lg text-foreground">{academy.name}</h1>
            <div className="flex items-center gap-0.5">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-semibold text-foreground">{academy.rating}</span>
            </div>
          </div>

          <div className="flex items-center gap-1 mt-2">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{academy.location}</span>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{academy.schedule}</span>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <Phone className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{academy.phone}</span>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <Globe className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{academy.website}</span>
          </div>

          <div className="flex gap-1.5 mt-3 flex-wrap">
            {academy.modalities.map((m) => (
              <span key={m} className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                {m}
              </span>
            ))}
          </div>

          <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{academy.description}</p>

          <div className="flex gap-2 mt-5">
            <Button className="flex-1">Inscrever-me</Button>
            <Button variant="outline" className="flex-1">Contactar</Button>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default AcademyDetail;
