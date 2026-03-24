import TopNav from "@/components/TopNav";
import FilterBar from "@/components/FilterBar";
import HeroBanner from "@/components/HeroBanner";
import ModalityChips from "@/components/ModalityChips";
import AcademyList from "@/components/AcademyList";
import BottomNav from "@/components/BottomNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <FilterBar />
      <HeroBanner />
      <ModalityChips />
      <div id="academy-list">
        <AcademyList />
      </div>
      <BottomNav />
    </div>
  );
};

export default Index;
