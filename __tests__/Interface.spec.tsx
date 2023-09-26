import { fireEvent, render } from "@testing-library/react";
import { Interface } from "../src/components/Interface";
import { useStoreApp } from "../src/store";
import { Menu } from "../src/components/Menu";

class IntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}

// @ts-ignore
global.IntersectionObserver = IntersectionObserver;

describe("Home elements should be rendered", () => {
  test("greetings should be in the screen", () => {
    const { getByText } = render(<Interface />);
    const greetings1 = getByText("👋 OLÁ, EU SOU");
    const greetings2 = getByText("RYAN HENRIQUE");
    expect(greetings1).toBeInTheDocument();
    expect(greetings2).toBeInTheDocument();
  });

  test("Title should be in the screen", () => {
    const { getByText } = render(<Interface />);
    const title1 = getByText("DESENVOLVEDOR");
    const title2 = getByText("WEB");
    const title3 = getByText("FRONT-END");
    expect(title1).toBeInTheDocument();
    expect(title2).toBeInTheDocument();
    expect(title3).toBeInTheDocument();
  });

  test("about should be in the screen", () => {
    const { getByTestId } = render(<Interface />);
    const about = getByTestId("about1");
    const about2 = getByTestId("about2");
    expect(about).toBeInTheDocument();
    expect(about2).toBeInTheDocument();
  });
});

describe("Testing interactions on Menu elements", () => {
  test("If the input color value is equal to color value in zustand when page is loaded", () => {
    const { getByTestId } = render(<Menu />);
    //@ts-ignore
    const color = useStoreApp.getState().color;
    const input = getByTestId("input-color");
    //@ts-ignore
    const corInput = input.value.toUpperCase();
    expect(corInput).toBe(color);
  });

  test("User handle change the color", () => {
    const { getByTestId } = render(<Menu />);
    const input = getByTestId("input-color");

    fireEvent.change(input, { target: { value: "#ffbe0b" } });

    //@ts-ignore
    const color = useStoreApp.getState().color;
    //@ts-ignore
    const corInput = input.value;
    expect(corInput).toBe(color);
  });
});

describe("Testing the animations", () => {
  test("testing the initial opacity of element", () => {
    const { getByTestId } = render(<Interface />);
    const div = getByTestId("div");

    const computedStyles = getComputedStyle(div);
    const opacity = computedStyles.getPropertyValue("opacity");

    expect(Number(opacity)).toBe(0);
  });
});

describe("Skill elements should be rendered", () => {
  test("HABILIDADES should be in the screen", () => {
    const { getByTestId, getByText } = render(<Interface />);
    const skillButton = getByText("HABILIDADES");
    fireEvent.click(skillButton);
    const skills = getByTestId("HABILIDADES");
    expect(skills).toBeInTheDocument();
  });
  test("LÍNGUAS should be in the screen", () => {
    const { getByText } = render(<Interface />);
    const lang = getByText("LÍNGUAS");
    expect(lang).toBeInTheDocument();
  });
});
