import { useRef, useEffect } from "react";

import { useStoreApp } from "../store";

export const Menu = (props: any) => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const { color, setColor } = useStoreApp();
  const { onSectionChange, menuOpened, setMenuOpened } = props;

  useEffect(() => {
    if (ref.current) {
      ref.current.style.backgroundColor = color;
    }
  }, [color]);

  return (
    <>
      <button
        ref={ref}
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-20 fixed top-12 right-6 lg:right-12 p-3 w-11 h-11 rounded-md"
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "rotate-45  translate-y-0.5" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 ${
            menuOpened ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "-rotate-45" : ""
          }`}
        />
      </button>
      <div
        className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col
      ${menuOpened ? "w-80" : "w-0"}`}
      >
        <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
          <MenuButton label="HOME" onClick={() => onSectionChange(0)} />
          <MenuButton label="HABILIDADES" onClick={() => onSectionChange(1)} />
          <MenuButton label="PROJETOS" onClick={() => onSectionChange(2)} />
          <MenuButton label="CONTATO" onClick={() => onSectionChange(3)} />
          <div className="flex flex-col w-full justify-start items-center">
            <span className="text-sm font-bold text-zinc-800/80 hover:opacity-60">
              SELECIONE UMA COR PRIMÁRIA:
            </span>
            <input
              data-testid={"input-color"}
              className="w-6 h-6 border-0 bg-transparent cursor-pointer w-full"
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const MenuButton = (props: any) => {
  const { label, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="text-2xl font-bold text-zinc-800 cursor-pointer hover:opacity-80 transition-colors"
    >
      {label}
    </button>
  );
};
