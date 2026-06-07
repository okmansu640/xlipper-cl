export type SideMenuSubPanelsProps = {
  rootClassName: string;
  contentClassName: string;
  heading?: string;
  items: {
    href: string;
    label: string;
    liClassName: string;
    linkClassName: string;
  }[];
};

export const SideMenuSubPanels = (props: SideMenuSubPanelsProps) => {
  return (
    <div className={props.rootClassName}>
      <div className="caret-transparent h-full outline-[3px] no-underline w-full">
        <div className="caret-transparent outline-[3px] no-underline">
          <div className={props.contentClassName}>
            <div className="items-center caret-transparent text-zinc-900 flex text-base justify-center leading-4 outline-[3px] relative text-center no-underline w-full py-4 after:accent-auto after:caret-transparent after:text-zinc-900 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-2 after:tracking-[normal] after:leading-4 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:absolute after:text-center after:no-underline after:indent-[0px] after:normal-case after:translate-y-[-4.5px] after:rotate-[135deg] after:visible after:w-2 after:border-zinc-900 after:mr-1 after:border-b after:border-separate after:border-r after:left-0 after:top-2/4 after:font-pretendard">
              {props.heading ? (
                <span className="caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] no-underline">
                  {props.heading}
                </span>
              ) : null}
            </div>
            <div className="caret-transparent outline-[3px] no-underline">
              <div className="caret-transparent outline-[3px] no-underline">
                <ul className="caret-transparent outline-[3px] no-underline pl-0">
                  {props.items.map((item) => (
                    <li
                      key={`${item.href}-${item.label}`}
                      className={item.liClassName}
                    >
                      <a
                        href={
                          item.href.startsWith("http") ? item.href : item.href
                        }
                        className={item.linkClassName}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
