import { useMenu } from "@/context/MenuContext";

export const SideMenuHeader = () => {
  const { close } = useMenu();
  return (
    <div className="items-center caret-transparent hidden justify-between outline-[3px] no-underline py-[25px] md:flex">
      <div className="caret-transparent min-h-0 min-w-0 outline-[3px] no-underline md:min-h-[auto] md:min-w-[auto]">
        <div className="caret-transparent outline-[3px] no-underline">
          <a href="/" className="caret-transparent outline-[3px] no-underline">
            <div className="caret-transparent hidden max-h-[25px] outline-[3px] no-underline md:block">
              <img
                src="https://c.animaapp.com/mq3f9bhuPsGnIl/assets/ff93b6f3f9115c1112a69a8e55b2c360.png"
                className="box-border caret-transparent inline max-h-[25px] max-w-full outline-[3px] no-underline align-top"
              />
            </div>
            <div className="caret-transparent block max-h-5 outline-[3px] no-underline md:hidden">
              <img
                src="https://c.animaapp.com/mq3f9bhuPsGnIl/assets/8516b61c8b2d4d36210dd15fab57002e.png"
                className="box-border caret-transparent inline max-h-5 max-w-full outline-[3px] no-underline align-top"
              />
            </div>
          </a>
        </div>
        <div className="caret-transparent hidden outline-[3px] no-underline">
          <a href="/" className="caret-transparent outline-[3px] no-underline">
            <div className="caret-transparent hidden max-h-[25px] outline-[3px] no-underline md:block">
              <img
                src="https://c.animaapp.com/mq3f9bhuPsGnIl/assets/15410d0f1180d3225a616f86ab446c57.png"
                className="box-border caret-transparent inline max-h-[25px] max-w-full outline-[3px] no-underline align-top"
              />
            </div>
            <div className="caret-transparent block max-h-5 outline-[3px] no-underline md:hidden">
              <img
                src="https://c.animaapp.com/mq3f9bhuPsGnIl/assets/eb227cb7460872885110e51fb5c68c28.png"
                className="box-border caret-transparent inline max-h-5 max-w-full outline-[3px] no-underline align-top"
              />
            </div>
          </a>
        </div>
      </div>
      <button
        onClick={close}
        aria-label="Close menu"
        className="caret-transparent text-zinc-900 h-[35px] min-h-0 min-w-0 outline-[3px] no-underline w-[35px] md:min-h-[auto] md:min-w-[auto] bg-transparent p-0 flex items-center justify-center"
      >
        <img
          src="https://c.animaapp.com/mq3f9bhuPsGnIl/assets/icon-8.svg"
          alt="Close"
          className="box-border caret-transparent inline h-[35px] outline-[3px] no-underline align-baseline w-[35px]"
        />
      </button>
    </div>
  );
};
