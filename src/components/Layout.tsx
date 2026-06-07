import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "@/sections/Header";
import { SearchDrawer } from "@/components/search/SearchDrawer";
import { SideMenu } from "@/components/navigation/SideMenu";
import { MainContent } from "@/sections/MainContent";
import { Footer } from "@/sections/Footer";
import { MenuProvider } from "@/context/MenuContext";
import { SearchProvider } from "@/context/SearchContext";

type Props = { children?: ReactNode };

export const Layout = ({ children }: Props) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <MenuProvider>
      <SearchProvider>
        <div className="relative w-full min-h-screen bg-white">
          <Header />
          <SearchDrawer />
          <SideMenu />
          {isHome ? (
            <MainContent />
          ) : (
            <main className="pt-[89px] pb-12 min-h-screen">{children}</main>
          )}
          <Footer />
        </div>
      </SearchProvider>
    </MenuProvider>
  );
};
