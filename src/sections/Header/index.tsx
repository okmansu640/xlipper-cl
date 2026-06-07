import { AnnouncementBar } from "@/sections/Header/components/AnnouncementBar";
import { Navbar } from "@/sections/Header/components/Navbar";

export const Header = () => {
  return (
    <header className="caret-transparent list-disc outline-[3px] fixed no-underline w-full z-[100] left-0 top-0">
      <div className="caret-transparent outline-[3px] no-underline">
        <AnnouncementBar />
        <Navbar />
      </div>
    </header>
  );
};
