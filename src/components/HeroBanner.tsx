import heroImg from "@/assets/dojo-hero.jpg";
import { motion } from "framer-motion";

const HeroBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative mx-4 mt-2 rounded-xl overflow-hidden"
    >
      <img
        src={heroImg}
        alt="Encontre o seu dojo"
        className="w-full h-44 object-cover"
        width={1280}
        height={720}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-secondary/20 flex flex-col justify-end p-4">
        <h1 className="font-display font-bold text-xl text-primary-foreground leading-tight">
          Encontre o dojo <br />
          <span className="text-primary">perfeito para si</span>
        </h1>
        <p className="text-primary-foreground/70 text-sm mt-1">
          Academias, horários e modalidades no Algarve
        </p>
      </div>
    </motion.div>
  );
};

export default HeroBanner;
