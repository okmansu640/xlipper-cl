export const FloatingButtons = () => {
  return (
    <div className="caret-transparent flex flex-col outline-[3px] fixed no-underline z-[101] right-5 bottom-[50px]">
      <p className="caret-transparent gap-x-[5px] flex flex-col min-h-[auto] min-w-[auto] outline-[3px] gap-y-[5px] no-underline overflow-hidden rounded-[5px]">
        <a
          href="http://pf.kakao.com/_zbUxfn"
          className="items-center box-border caret-transparent text-zinc-800 flex text-xs font-bold h-[30px] justify-center min-h-[auto] min-w-[auto] outline-[3px] no-underline w-[30px]"
        >
          <img
            src="https://c.animaapp.com/mq3f9bhuPsGnIl/assets/95c6957a9fc5cdd2cb35b8fb5748a2f8.png"
            className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto] outline-[3px] no-underline align-top w-full"
          />
        </a>
      </p>
      <p className="bg-white/70 caret-transparent h-[30px] min-h-[auto] min-w-[auto] outline-[3px] no-underline w-[30px] border border-zinc-300 overflow-hidden mt-[5px] rounded-[5px] border-solid">
        <a
          href="#none"
          title="화면 최상단으로 이동하기"
          className="items-center box-border caret-transparent text-zinc-800 flex text-xs font-bold h-full justify-center outline-[3px] no-underline w-full"
        >
          ↑
        </a>
      </p>
      <p className="bg-white/70 caret-transparent h-[30px] min-h-[auto] min-w-[auto] outline-[3px] no-underline w-[30px] border border-zinc-300 overflow-hidden mt-[5px] rounded-[5px] border-solid">
        <a
          href="#none"
          title="화면 최하단으로 이동하기"
          className="items-center box-border caret-transparent text-zinc-800 flex text-xs font-bold h-full justify-center outline-[3px] no-underline w-full"
        >
          ↓
        </a>
      </p>
    </div>
  );
};
