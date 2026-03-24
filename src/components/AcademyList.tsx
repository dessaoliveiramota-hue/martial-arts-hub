import AcademyCard from "./AcademyCard";
import academy1 from "@/assets/academy-1.jpg";
import academy2 from "@/assets/academy-2.jpg";
import academy3 from "@/assets/academy-3.jpg";
import academy4 from "@/assets/academy-4.jpg";

const academies = [
  {
    name: "Dojo Algarve",
    location: "Faro, Algarve",
    modalities: ["Karaté", "Judo"],
    rating: 4.8,
    schedule: "Seg-Sex 18:00 - 21:00",
    image: academy1,
  },
  {
    name: "BJJ Portimão Academy",
    location: "Portimão, Algarve",
    modalities: ["Jiu-Jitsu", "MMA"],
    rating: 4.9,
    schedule: "Seg-Sáb 09:00 - 22:00",
    image: academy2,
  },
  {
    name: "Fight Club Lagos",
    location: "Lagos, Algarve",
    modalities: ["Muay Thai", "Boxe"],
    rating: 4.6,
    schedule: "Seg-Sex 17:00 - 21:30",
    image: academy3,
  },
  {
    name: "Taekwondo Olhão",
    location: "Olhão, Algarve",
    modalities: ["Taekwondo", "Kickboxing"],
    rating: 4.7,
    schedule: "Ter-Sáb 16:00 - 20:00",
    image: academy4,
  },
];

const AcademyList = () => {
  return (
    <section className="px-4 mt-5 pb-24">
      <h2 className="font-display font-semibold text-base text-foreground mb-3">
        Academias perto de si
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {academies.map((academy, i) => (
          <AcademyCard key={academy.name} {...academy} index={i} />
        ))}
      </div>
    </section>
  );
};

export default AcademyList;
