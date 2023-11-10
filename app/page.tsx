import Footer from "@/components/footer";
import GridItem from "@/components/grid-item";
import Equipments from "@/components/grid-items/equipments";
import Experience from "@/components/grid-items/experience";
import Mentor from "@/components/grid-items/mentor";
import Project from "@/components/grid-items/project";
import Social from "@/components/grid-items/social";
import LeftPanel from "@/components/left-panel";
import RightPanel from "@/components/right-panel";
import { siteConfig } from "@/config/site-config";
import MidPanel from "@/components/mid-panel";
export default function Home() {
  return (
    <main className="relative flex flex-col items-center flex-1 w-full h-full">
      {/* Pattern */}
      <div className="absolute inset-0 z-0 bg-light-pattern dark:bg-dark-pattern bg-3" />
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white via-white/90 to-white dark:from-neutral-950 dark:via-neutral-950/90 dark:to-neutral-950" />
      <div className="container relative z-20 flex flex-col w-full h-full px-6 gap:6 xl:gap-10 xl:flex-row">
        {/* Left Panel */}
        <LeftPanel />
        {/* Right Panel */}
        <RightPanel />
        {/* Footer for Mobile */}
       
      </div>


      <div className="container relative z-20 flex pb-6 mb-6">
        <MidPanel />


      </div>


      


      <div className="container relative z-20 flex pb-6 ">


      
          <Footer />
        </div>

     

 
    </main>
  );
}