import { motion } from "framer-motion";

const modalities = [
  { emoji: "🥋", name: "Karaté" },
  { emoji: "🤼", name: "Jiu-Jitsu" },
  { emoji: "🥊", name: "Muay Thai" },
  { emoji: "🦶", name: "Taekwondo" },
  { emoji: "🥷", name: "Kung Fu" },
  { emoji: "⚔️", name: "Kendo" },
  { emoji: "🤸", name: "Capoeira" },
];

const ModalityChips = () => {
  return (
    <section className="px-4 mt-5">
      <h2 className="font-display font-semibold text-base text-foreground mb-3">
        Modalidades
      </h2>
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
        {modalities.map((m, i) => (
          <motion.button
            key={m.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-surface-warm text-sm font-medium text-foreground whitespace-nowrap hover:bg-primary hover:text-primary-foreground transition-colors shrink-0"
          >
            <span>{m.emoji}</span>
            {m.name}
          </motion.button>
        ))}
      </div>
    </section>
  );
};

export default ModalityChips;
