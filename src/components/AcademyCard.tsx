import { MapPin, Star, Clock } from "lucide-react";
import { motion } from "framer-motion";

interface AcademyCardProps {
  name: string;
  location: string;
  modalities: string[];
  rating: number;
  schedule: string;
  image: string;
  index: number;
}

const AcademyCard = ({ name, location, modalities, rating, schedule, image, index }: AcademyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover"
        loading="lazy"
        width={640}
        height={640}
      />
      <div className="p-3.5">
        <div className="flex items-start justify-between">
          <h3 className="font-display font-semibold text-base text-foreground leading-tight">
            {name}
          </h3>
          <div className="flex items-center gap-0.5 shrink-0">
            <Star className="w-3.5 h-3.5 text-primary fill-primary" />
            <span className="text-xs font-semibold text-foreground">{rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-1 mt-1.5">
          <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">{location}</span>
        </div>

        <div className="flex items-center gap-1 mt-1">
          <Clock className="w-3.5 h-3.5 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">{schedule}</span>
        </div>

        <div className="flex gap-1.5 mt-2.5 flex-wrap">
          {modalities.map((m) => (
            <span
              key={m}
              className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[11px] font-medium"
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AcademyCard;
