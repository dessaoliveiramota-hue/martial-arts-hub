import AcademyCard from "./AcademyCard";
import academy1 from "@/assets/academy-1.jpg";
import academy2 from "@/assets/academy-2.jpg";
import academy3 from "@/assets/academy-3.jpg";
import academy4 from "@/assets/academy-4.jpg";

const academies = [
  {
    name: "Dojo Algarve",
    slug: "dojo-algarve",
    location: "Faro, Algarve",
    modalities: ["Karaté", "Judo"],
    rating: 4.8,
    schedule: "Seg-Sex 18:00 - 21:00",
    image: academy1,
  },
  {
    name: "BJJ Portimão Academy",
    slug: "bjj-portimao-academy",
    location: "Portimão, Algarve",
    modalities: ["Jiu-Jitsu", "MMA"],
    rating: 4.9,
    schedule: "Seg-Sáb 09:00 - 22:00",
    image: academy2,
  },
  {
    name: "Fight Club Lagos",
    slug: "fight-club-lagos",
    location: "Lagos, Algarve",
    modalities: ["Muay Thai", "Boxe"],
    rating: 4.6,
    schedule: "Seg-Sex 17:00 - 21:30",
    image: academy3,
  },
  {
    name: "Taekwondo Olhão",
    slug: "taekwondo-olhao",
    location: "Olhão, Algarve",
    modalities: ["Taekwondo", "Kickboxing"],
    rating: 4.7,
    schedule: "Ter-Sáb 16:00 - 20:00",
    image: academy4,
  },
];

interface AcademyListProps {
  selectedModality: string | null;
}

const AcademyList = ({ selectedModality }: AcademyListProps) => {
  const filtered = selectedModality
    ? academies.filter((a) => a.modalities.includes(selectedModality))
    : academies;

  return (
    <section className="px-4 mt-5 pb-24">
      <h2 className="font-display font-semibold text-base text-foreground mb-3">
        {selectedModality
          ? `Academias de ${selectedModality}`
          : "Academias perto de si"}
      </h2>
      {filtered.length === 0 ? (
        <p className="text-sm text-muted-foreground text-center py-8">
          Nenhuma academia encontrada para esta modalidade.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filtered.map((academy, i) => (
            <AcademyCard key={academy.name} {...academy} index={i} />
          ))}
        </div>
      )}
    </section>
  );
};

export default AcademyList;
