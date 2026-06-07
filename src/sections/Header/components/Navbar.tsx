import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";
import { HeaderLogo } from "@/sections/Header/components/HeaderLogo";
import { HeaderActions } from "@/sections/Header/components/HeaderActions";

export const Navbar = () => {
  return (
    <div className="caret-transparent outline-[3px] no-underline">
      <div className="items-center box-border caret-transparent flex h-[43.9844px] outline-[3px] no-underline px-[9.375px] md:h-[48.9844px] md:px-8">
        <div className="items-center caret-transparent gap-x-2 grid grid-flow-col col-start-1 row-start-1 grid-cols-[1fr_auto_1fr] h-[43.9844px] min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 no-underline w-full md:h-[48.9844px]">
          <MobileMenuButton />
          <HeaderLogo />
          <HeaderActions />
        </div>
      </div>
    </div>
  );
};
