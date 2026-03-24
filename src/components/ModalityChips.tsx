import { motion } from "framer-motion";
import { useState } from "react";

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
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="px-4 mt-5">
      <h2 className="font-display font-semibold text-base text-foreground mb-3">
        Modalidades
      </h2>
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
        {modalities.map((m, i) => {
          const isSelected = selected === m.name;
          return (
            <motion.button
              key={m.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setSelected(isSelected ? null : m.name)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors shrink-0 ${
                isSelected
                  ? "bg-primary text-primary-foreground"
                  : "bg-surface-warm text-foreground hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              <span>{m.emoji}</span>
              {m.name}
            </motion.button>
          );
        })}
      </div>
    </section>
  );
};

export default ModalityChips;
