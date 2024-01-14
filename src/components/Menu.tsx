import { motion, AnimatePresence } from "framer-motion";

interface MenuProps {
  onSectionChange: (value: number) => void;
  menuOpened: boolean;
  setMenuOpened: (value: boolean) => void;
}

export const Menu = (props: MenuProps) => {
  const { onSectionChange, menuOpened, setMenuOpened } = props;

  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="bg-none z-20 fixed top-12 right-6 lg:right-16 w-8 h-10 rounded-md"
      >
        <div
          className={`bg-zinc-800 h-0.5 rounded-md w-2/3 md:w-full transition-all ${
            menuOpened ? "rotate-45  translate-y-0.5" : ""
          }`}
        />
        <div
          className={`bg-zinc-800 h-0.5 rounded-md w-2/3 md:w-full my-2 ${
            menuOpened ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-zinc-800 h-0.5 rounded-md w-2/3 md:w-full transition-all ${
            menuOpened ? "-rotate-45" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {menuOpened ? (
          <motion.div
            initial={{
              y: -200,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -200,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              delay: 0.2,
              type: "spring",
              damping: 10,
              stiffness: 100,
            }}
            className={`w-full z-10 fixed top-0 right-0 bottom-0 bg-white overflow-hidden flex flex-col
      `}
          >
            <div className="flex w-full h-full items-center justify-center flex-col gap-6 p-8">
              <span className="tracking-[3px] text-zinc-400 font-light">
                MENU
              </span>
              <MenuButton label="HOME" onClick={() => onSectionChange(0)} />
              <MenuButton label="SKILLS" onClick={() => onSectionChange(1)} />
              <MenuButton label="PROJECTS" onClick={() => onSectionChange(2)} />
              <MenuButton label="CONTACT" onClick={() => onSectionChange(3)} />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

const MenuButton = (props: { label: string; onClick: () => void }) => {
  const { label, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="text-2xl font-bold text-zinc-800 cursor-pointer duration-[1500ms] hover:opacity-50 transition-all"
    >
      {label}
    </button>
  );
};
