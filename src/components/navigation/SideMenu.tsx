import { useMenu } from "@/context/MenuContext";
import { SideMenuHeader } from "@/components/navigation/SideMenuHeader";
import { SideMenuNavigation } from "@/components/navigation/SideMenuNavigation";
import { SideMenuAccount } from "@/components/navigation/SideMenuAccount";
import { SideMenuSubPanels } from "@/components/navigation/SideMenuSubPanels";

export const SideMenu = () => {
  const { isOpen, close } = useMenu();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[197]"
          onClick={close}
          aria-hidden="true"
        />
      )}
      <aside
        className={`bg-white border-t-zinc-200 box-border caret-transparent h-full list-disc max-w-full outline-[3px] fixed no-underline w-full z-[198] border-r-black border-r-0 border-t top-[83.9844px] transition-transform duration-300 md:border-r-zinc-200 md:max-w-[500px] md:w-[480px] md:z-[200] md:border-r md:top-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="caret-transparent h-full outline-[3px] no-underline w-full">
          <div className="caret-transparent h-full outline-[3px] no-underline w-full">
            <div className="box-border caret-transparent h-full max-h-[calc(100%_-_50px)] outline-[3px] overflow-x-hidden overflow-y-auto relative no-underline pt-3 pb-6 px-[9.375px] md:px-8">
              {/* Mobile close button */}
              <div className="flex justify-end mb-2 md:hidden">
                <button
                  onClick={close}
                  aria-label="Close menu"
                  className="p-2 text-zinc-700 hover:text-zinc-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <SideMenuHeader />
              <SideMenuNavigation />
              <SideMenuAccount />
              <SideMenuSubPanels
                rootClassName="caret-transparent outline-[3px] no-underline"
                contentClassName="box-border caret-transparent outline-[3px] no-underline pt-0 px-[9.375px] md:pt-[50px] md:px-8"
                items={[
                  {
                    href: "/product/list.html?cate_no=24",
                    label: "엑슬리퍼 (Xlipper)",
                    liClassName:
                      "caret-transparent hidden list-none outline-[3px] no-underline",
                    linkClassName:
                      "caret-transparent hidden outline-[3px] no-underline",
                  },
                ]}
              />
              <SideMenuSubPanels
                rootClassName="bg-white caret-transparent h-full outline-[3px] absolute no-underline w-full z-[999] left-full top-0"
                contentClassName="box-border caret-transparent outline-[3px] no-underline pt-[50px] px-[9.375px] md:px-8"
                items={[
                  {
                    href: "/product/list.html?cate_no=24",
                    label: "엑슬리퍼 (Xlipper)",
                    liClassName:
                      "caret-transparent list-none outline-[3px] no-underline",
                    linkClassName:
                      "caret-transparent hidden outline-[3px] no-underline",
                  },
                ]}
              />
              <SideMenuSubPanels
                rootClassName="bg-white caret-transparent h-full outline-[3px] absolute no-underline w-full z-[999] left-full top-0"
                contentClassName="box-border caret-transparent outline-[3px] no-underline pt-[50px] px-[9.375px] md:px-8"
                items={[
                  {
                    href: "/product/list.html?cate_no=24",
                    label: "엑슬리퍼 (Xlipper)",
                    liClassName:
                      "caret-transparent list-none outline-[3px] no-underline",
                    linkClassName:
                      "caret-transparent hidden outline-[3px] no-underline",
                  },
                ]}
              />
              <SideMenuSubPanels
                rootClassName="bg-white caret-transparent h-full outline-[3px] absolute no-underline w-full z-[999] left-full top-0"
                contentClassName="box-border caret-transparent outline-[3px] no-underline pt-0 px-[9.375px] md:pt-[50px] md:px-8"
                heading="COMMUNITY"
                items={[
                  {
                    href: "/board/gallery/list.html?board_no=12",
                    label: "Xlipper crew",
                    liClassName:
                      "caret-transparent list-none outline-[3px] relative no-underline",
                    linkClassName:
                      "caret-transparent text-zinc-900 inline-block text-sm leading-[19.6px] outline-[3px] no-underline py-2",
                  },
                  {
                    href: "/board/free/list.html?board_no=1",
                    label: "공지사항",
                    liClassName:
                      "caret-transparent list-none outline-[3px] relative no-underline",
                    linkClassName:
                      "caret-transparent text-zinc-900 inline-block text-sm leading-[19.6px] outline-[3px] no-underline py-2",
                  },
                  {
                    href: "/board/review/list.html?board_no=4",
                    label: "사용후기",
                    liClassName:
                      "caret-transparent list-none outline-[3px] relative no-underline",
                    linkClassName:
                      "caret-transparent text-zinc-900 inline-block text-sm leading-[19.6px] outline-[3px] no-underline py-2",
                  },
                  {
                    href: "/board/product/list.html?board_no=6",
                    label: "문의하기",
                    liClassName:
                      "caret-transparent list-none outline-[3px] relative no-underline",
                    linkClassName:
                      "caret-transparent text-zinc-900 inline-block text-sm leading-[19.6px] outline-[3px] no-underline py-2",
                  },
                  {
                    href: "/board/gallery/list.html?board_no=8",
                    label: "사이즈 가이드",
                    liClassName:
                      "caret-transparent list-none outline-[3px] relative no-underline",
                    linkClassName:
                      "caret-transparent text-zinc-900 inline-block text-sm leading-[19.6px] outline-[3px] no-underline py-2",
                  },
                  {
                    href: "/board/free/list.html?board_no=2",
                    label: "이벤트",
                    liClassName:
                      "caret-transparent list-none outline-[3px] relative no-underline",
                    linkClassName:
                      "caret-transparent text-zinc-900 inline-block text-sm leading-[19.6px] outline-[3px] no-underline py-2",
                  },
                  {
                    href: "/board/faq/list.html?board_no=3",
                    label: "FAQ",
                    liClassName:
                      "caret-transparent list-none outline-[3px] relative no-underline",
                    linkClassName:
                      "caret-transparent text-zinc-900 inline-block text-sm leading-[19.6px] outline-[3px] no-underline py-2",
                  },
                ]}
              />
              <SideMenuSubPanels
                rootClassName="bg-white caret-transparent h-full outline-[3px] absolute no-underline w-full z-[999] left-full top-0"
                contentClassName="box-border caret-transparent outline-[3px] no-underline pt-0 px-[9.375px] md:pt-[50px] md:px-8"
                heading="BRAND"
                items={[
                  {
                    href: "/brand",
                    label: "ABOUT",
                    liClassName:
                      "caret-transparent list-none outline-[3px] relative no-underline",
                    linkClassName:
                      "caret-transparent text-zinc-900 inline-block text-sm leading-[19.6px] outline-[3px] no-underline py-2",
                  },
                  {
                    href: "/map",
                    label: "STOCKIST",
                    liClassName:
                      "caret-transparent list-none outline-[3px] relative no-underline",
                    linkClassName:
                      "caret-transparent text-zinc-900 inline-block text-sm leading-[19.6px] outline-[3px] no-underline py-2",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
