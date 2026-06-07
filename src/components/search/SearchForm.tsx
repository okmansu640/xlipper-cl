export const SearchForm = () => {
  return (
    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full mx-auto px-[9.375px] md:px-8">
      <form name="" className="caret-transparent outline-[3px] no-underline">
        <input
          name="banner_action"
          value=""
          type="hidden"
          className="appearance-none bg-transparent box-border caret-transparent hidden outline-[3px] no-underline align-middle p-0"
        />
        <div className="caret-transparent outline-[3px] no-underline">
          <fieldset className="items-center border-b-zinc-200 caret-transparent flex outline-[3px] no-underline align-top p-0 border-t-black border-t-0 border-x-black border-x-0 border-b">
            <div
              title="검색어 입력"
              className="caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full"
            >
              <input
                name="keyword"
                placeholder="검색어를 입력해주세요!"
                value=""
                type="text"
                className="appearance-none bg-transparent box-border caret-transparent text-zinc-900 text-sm h-8 leading-[19.6px] outline-1 no-underline align-middle w-full p-0 md:text-base md:leading-[22.4px]"
              />
            </div>
            <button className="bg-transparent caret-transparent block text-[13.3333px] min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline p-0">
              <img
                src="https://c.animaapp.com/mq3f9bhuPsGnIl/assets/icon-7.svg"
                alt="Icon"
                className="box-border caret-transparent text-zinc-900 h-6 outline-[3px] no-underline align-baseline w-6"
              />
            </button>
          </fieldset>
        </div>
      </form>
    </div>
  );
};
