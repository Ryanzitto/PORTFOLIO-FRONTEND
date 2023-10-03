import { useEffect, useRef, useState } from "react";
import { useStoreApp } from "../store";

const CURSOR_SPEED = 0.08;

let mouseX = 0;
let mouseY = 0;
let outlineX = 0;
let outlineY = 0;

export const Cursor = () => {
  const { color } = useStoreApp();
  const cursorOutline = useRef<HTMLDivElement | null>(null);
  const [hoverButton, setHoverButton] = useState(false);

  const animate = () => {
    if (cursorOutline.current) {
      let distX = mouseX - outlineX;
      let distY = mouseY - outlineY;

      outlineX = outlineX + distX * CURSOR_SPEED;
      outlineY = outlineY + distY * CURSOR_SPEED;

      cursorOutline.current.style.left = `${outlineX}px`;

      cursorOutline.current.style.top = `${outlineY}px`;
      requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    const mouseEventsListener = document.addEventListener(
      "mousemove",
      function (event) {
        mouseX = event.pageX;
        mouseY = event.pageY;
      }
    );
    const animateEvent = requestAnimationFrame(animate);
    return () => {
      //@ts-ignore
      document.removeEventListener("mousemove", mouseEventsListener);
      cancelAnimationFrame(animateEvent);
    };
  }, []);

  useEffect(() => {
    const mouseEventListener = document.addEventListener(
      "mouseover",
      function (e) {
        if (
          //@ts-ignore
          e.target.tagName.toLowerCase() === "button" ||
          //@ts-ignore
          e.target.parentElement.tagName.toLowerCase() === "button" ||
          //@ts-ignore
          e.target.tagName.toLowerCase() === "input" ||
          //@ts-ignore
          e.target.tagName.toLowerCase() === "textarea"
        ) {
          setHoverButton(true);
        } else {
          setHoverButton(false);
        }
      }
    );
    return () => {
      //@ts-ignore
      document.removeEventListener("mouseover", mouseEventListener);
    };
  }, []);

  useEffect(() => {
    if (cursorOutline.current) {
      cursorOutline.current.style.backgroundColor = color;
    }
  }, [color]);
  return (
    <>
      <div
        className={`z-50 fixed -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-transform
        ${
          hoverButton
            ? "bg-transparent border-2 border-indigo-900 w-5 h-5"
            : "bg-indigo-500 w-3 h-3"
        }`}
        ref={cursorOutline}
      ></div>
    </>
  );
};
