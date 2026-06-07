export type SearchKeywordSectionsProps = {
  title: string;
  containerClassName: string;
  listClassName: string;
  itemClassName?: string;
  itemHref?: string;
  itemText?: string;
  showLinkItem?: boolean;
  showTextItem?: boolean;
};

export const SearchKeywordSections = (props: SearchKeywordSectionsProps) => {
  return (
    <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full mx-auto px-[9.375px] md:px-8">
      <div className="caret-transparent outline-[3px] no-underline mb-6">
        <h2 className="caret-transparent text-zinc-900 text-lg font-semibold leading-[25.2px] outline-[3px] no-underline">
          {props.title}
        </h2>
      </div>
      <div className={props.containerClassName}>
        <ul className={props.listClassName}>
          {props.showLinkItem ? (
            <li className={props.itemClassName}>
              <a
                href={props.itemHref}
                className="caret-transparent text-zinc-900 block text-sm leading-[19.6px] min-h-[auto] min-w-[auto] outline-[3px] no-underline"
              >
                <span className="caret-transparent outline-[3px] no-underline"></span>
              </a>
            </li>
          ) : null}
          {props.showTextItem ? (
            <li className={props.itemClassName}>{props.itemText}</li>
          ) : null}
        </ul>
      </div>
    </div>
  );
};
