import { SearchForm } from "@/components/search/SearchForm";
import { SearchKeywordSections } from "@/components/search/SearchKeywordSections";
import { useSearch } from "@/context/SearchContext";

export const SearchDrawer = () => {
  const { isSearchOpen, closeSearch } = useSearch();

  return (
    <>
      {/* 백드롭 */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[1001]"
          onClick={closeSearch}
        />
      )}
      <div
        className={`bg-white border-r-zinc-200 border-t-zinc-200 caret-transparent h-full list-disc max-w-full outline-[3px] fixed no-underline w-full z-[1002] border-r border-t top-auto transition-[right] duration-300 ease-in-out md:w-[480px] md:border-t-black md:border-t-0 md:top-0 ${
          isSearchOpen ? "right-0" : "-right-full md:right-[-480px]"
        }`}
      >
        <div className="box-border caret-transparent h-full outline-[3px] no-underline py-5 md:py-10">
          <div className="caret-transparent h-full outline-[3px] no-underline">
            <div className="caret-transparent gap-x-8 grid grid-cols-[1fr] max-h-[calc(100%_-_120px)] outline-[3px] gap-y-8 no-underline overflow-auto md:max-h-full">
              <div className="items-center box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] outline-[3px] no-underline px-[9.375px] md:px-8">
                <h2 className="caret-transparent text-zinc-900 text-lg font-semibold leading-[25.2px] min-h-[auto] min-w-[auto] outline-[3px] no-underline md:text-2xl md:leading-[33.6px]">
                  검색
                </h2>
                <button
                  onClick={closeSearch}
                  className="caret-transparent min-h-[auto] min-w-[auto] outline-none cursor-pointer"
                  aria-label="검색 닫기"
                >
                  <img
                    src="https://c.animaapp.com/mq3f9bhuPsGnIl/assets/icon-6.svg"
                    alt="닫기"
                    className="box-border caret-transparent text-zinc-900 inline h-[30px] outline-[3px] no-underline align-baseline w-[30px]"
                  />
                </button>
              </div>
              <SearchForm />
              <SearchKeywordSections
                title="인기 검색어"
                containerClassName="caret-transparent outline-[3px] no-underline"
                listClassName="border-b-zinc-200 caret-transparent gap-x-3 grid grid-cols-[repeat(2,1fr)] outline-[3px] gap-y-[18px] no-underline pl-0 pb-10 border-b"
                itemClassName="items-center caret-transparent gap-x-2 flex list-none min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 no-underline before:accent-auto before:items-center before:caret-transparent before:text-red-700 before:flex before:text-sm before:not-italic before:normal-nums before:font-normal before:h-4 before:justify-center before:tracking-[normal] before:leading-[14px] before:list-outside before:list-none before:min-h-[auto] before:min-w-[auto] before:outline-[3px] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-4 before:border-separate before:font-pretendard"
                itemHref="/product/search.html?keyword="
                showLinkItem={true}
                showTextItem={false}
              />
              <SearchKeywordSections
                title="최근 검색어"
                containerClassName="caret-transparent outline-[3px] no-underline"
                listClassName="border-b-gray-200 caret-transparent gap-x-3 grid grid-cols-[repeat(3,auto)] outline-[3px] gap-y-[18px] no-underline pl-0 pb-10 border-b"
                itemClassName="items-center caret-transparent grid grid-cols-[1fr_14px] list-none min-h-[auto] min-w-[auto] outline-[3px] no-underline rounded-[15px]"
                itemText="최근 검색어가 없습니다."
                showLinkItem={false}
                showTextItem={true}
              />
              <SearchKeywordSections
                title="최근 본 상품"
                containerClassName="caret-transparent hidden outline-[3px] no-underline"
                listClassName="border-b-zinc-200 caret-transparent gap-x-3 grid grid-cols-[repeat(1,1fr)] outline-[3px] gap-y-3 no-underline pl-0 pb-10 border-b"
                showLinkItem={false}
                showTextItem={false}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
