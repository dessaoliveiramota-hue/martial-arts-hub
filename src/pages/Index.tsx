import TopNav from "@/components/TopNav";
import FilterBar from "@/components/FilterBar";
import HeroBanner from "@/components/HeroBanner";
import ModalityChips from "@/components/ModalityChips";
import AcademyList from "@/components/AcademyList";
import BottomNav from "@/components/BottomNav";
import { useState } from "react";

const Index = () => {
  const [selectedModality, setSelectedModality] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <FilterBar onClearModality={() => setSelectedModality(null)} />
      <HeroBanner />
      <ModalityChips selected={selectedModality} onSelect={setSelectedModality} />
      <div id="academy-list">
        <AcademyList selectedModality={selectedModality} />
      </div>
      <BottomNav />
    </div>
  );
};

export default Index;
