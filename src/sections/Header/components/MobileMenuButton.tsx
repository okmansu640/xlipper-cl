import { useMenu } from "@/context/MenuContext";

interface MobileMenuButtonProps {
  scrolled?: boolean;
}

export const MobileMenuButton = ({
  scrolled = false,
}: MobileMenuButtonProps) => {
  const { open } = useMenu();
  return (
    <div className="caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline">
      <div className="items-center caret-transparent flex outline-[3px] no-underline md:[align-items:normal] md:block">
        <button
          aria-label="Main Menu"
          onClick={open}
          className="bg-transparent caret-transparent flex text-[13.3333px] min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline p-0 md:min-h-0 md:min-w-0"
        >
          <img
            src="https://c.animaapp.com/mq3f9bhuPsGnIl/assets/icon-2.svg"
            alt="Icon"
            className={`box-border caret-transparent h-[25px] outline-[3px] no-underline align-baseline w-[25px] transition-[filter] duration-300 ${
              scrolled ? "" : "brightness-0 invert"
            }`}
          />
        </button>
      </div>
    </div>
  );
};
