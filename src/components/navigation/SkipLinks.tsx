export const SkipLinks = () => {
  return (
    <div className="bg-white caret-transparent h-1.5 list-none min-h-[auto] min-w-[auto] opacity-80 outline-[3px] static text-center no-underline w-1.5 z-auto border border-zinc-900 rounded-[40px] border-solid left-auto top-auto md:bg-transparent md:h-0 md:list-disc md:min-h-0 md:min-w-0 md:opacity-100 md:absolute md:text-start md:w-full md:z-[100] md:rounded-none md:border-0 md:border-none md:border-black md:left-0 md:top-0">
      <p className="bg-zinc-900 caret-transparent h-1.5 list-none min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline w-[25px] border border-zinc-900 rounded-[40px] border-solid md:bg-transparent md:h-0 md:list-disc md:min-h-0 md:min-w-0 md:text-start md:w-auto md:rounded-none md:border-0 md:border-none md:border-black">
        <a
          href="#category"
          className="bg-white caret-transparent block h-1.5 list-none min-h-[auto] min-w-[auto] opacity-80 outline-[3px] static text-center no-underline text-wrap w-1.5 border border-zinc-900 overflow-visible ml-0 mb-0 rounded-[40px] border-solid left-auto top-auto md:bg-transparent md:h-px md:list-disc md:min-h-0 md:min-w-0 md:opacity-100 md:absolute md:text-nowrap md:w-px md:overflow-hidden md:-ml-px md:-mb-px md:rounded-none md:border-0 md:border-none md:border-black md:left-0 md:top-0"
        >
          전체상품목록 바로가기
        </a>
      </p>
      <p className="bg-white caret-transparent h-1.5 list-none min-h-[auto] min-w-[auto] opacity-80 outline-[3px] text-center no-underline w-1.5 border border-zinc-900 rounded-[40px] border-solid md:bg-transparent md:h-0 md:list-disc md:min-h-0 md:min-w-0 md:opacity-100 md:text-start md:w-auto md:rounded-none md:border-0 md:border-none md:border-black">
        <a
          href="#contents"
          className="bg-white caret-transparent block h-1.5 list-none min-h-[auto] min-w-[auto] opacity-80 outline-[3px] static text-center no-underline text-wrap w-1.5 border border-zinc-900 overflow-visible ml-0 mb-0 rounded-[40px] border-solid left-auto top-auto md:bg-transparent md:h-px md:list-disc md:min-h-0 md:min-w-0 md:opacity-100 md:absolute md:text-nowrap md:w-px md:overflow-hidden md:-ml-px md:-mb-px md:rounded-none md:border-0 md:border-none md:border-black md:left-0 md:top-0"
        >
          본문 바로가기
        </a>
      </p>
    </div>
  );
};
