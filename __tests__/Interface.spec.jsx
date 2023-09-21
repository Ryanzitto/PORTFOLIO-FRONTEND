import { fireEvent, render } from "@testing-library/react";
import { Interface } from "../src/components/UI/Interface";
import { useStoreApp } from "../src/store";

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

  test("input color should be in the screen", () => {
    const { getByTestId } = render(<Interface />);
    const inputColor = getByTestId("input-color");
    expect(inputColor).toBeInTheDocument();
  });

  test("about should be in the screen", () => {
    const { getByTestId } = render(<Interface />);
    const about = getByTestId("about1");
    const about2 = getByTestId("about2");
    expect(about).toBeInTheDocument();
    expect(about2).toBeInTheDocument();
  });

  test("buttons should be in the screen", () => {
    const { getByText } = render(<Interface />);
    const buttonGithub = getByText("VER MEU GITHUB");
    const buttonLinkedin = getByText("VER MEU LINKEDIN");
    expect(buttonGithub).toBeInTheDocument();
    expect(buttonLinkedin).toBeInTheDocument();
  });
  test("like button should be in the screen", () => {
    const { getByText } = render(<Interface />);
    const likeButton = getByText("432 LIKES");
    expect(likeButton).toBeInTheDocument();
  });
});

describe("Testing interactions on Home elements", () => {
  test("If the input color value is equal to color value in zustand when page is loaded", () => {
    const { getByTestId } = render(<Interface />);
    //@ts-ignore
    const color = useStoreApp.getState().color;
    const input = getByTestId("input-color");
    //@ts-ignore
    const corInput = input.value.toUpperCase();
    expect(corInput).toBe(color);
  });

  test("User handle change the color", () => {
    const { getByTestId } = render(<Interface />);
    const input = getByTestId("input-color");

    fireEvent.change(input, { target: { value: "#d317b3" } });

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

describe("Projects elements should be rendered", () => {
  test("the projects are displayed", () => {
    const { getByTestId, getByText } = render(<Interface />);
    const projectsButton = getByText("PROJETOS");
    fireEvent.click(projectsButton);
    const projeto1 = getByTestId("IDK GAME");
    const projeto2 = getByTestId("R-AND-M");
    expect(projeto1).toBeInTheDocument();
    expect(projeto2).toBeInTheDocument();
  });
});

describe("Testing interactions on projects elements", () => {
  test('O link tem o atributo target="_blank" e redireciona para a URL correta', () => {
    const { getByTestId, getByText } = render(<Interface />);
    const projectsButton = getByText("PROJETOS");
    fireEvent.click(projectsButton);
    const linkCorreto = "https://github.com/Ryanzitto/THREE-IDK";
    const link = getByTestId(linkCorreto);

    // Verifica se o atributo target é "_blank"
    expect(link).toHaveAttribute("target", "_blank");

    // Verifica se a URL é a esperada
    expect(link).toHaveAttribute("href", linkCorreto);
  });
  test('O link tem o atributo target="_blank" e redireciona para a URL correta', () => {
    const { getByTestId, getByText } = render(<Interface />);
    const projectsButton = getByText("PROJETOS");
    fireEvent.click(projectsButton);
    const linkCorreto = "https://ryanzitto.github.io/THREE-IDK/";
    const link = getByTestId(linkCorreto);

    // Verifica se o atributo target é "_blank"
    expect(link).toHaveAttribute("target", "_blank");

    // Verifica se a URL é a esperada
    expect(link).toHaveAttribute("href", linkCorreto);
  });
  test('O link tem o atributo target="_blank" e redireciona para a URL correta', () => {
    const { getByTestId, getByText } = render(<Interface />);
    const projectsButton = getByText("PROJETOS");
    fireEvent.click(projectsButton);
    const linkCorreto = "https://ryanzitto.github.io/THREE-IDK/";
    const link = getByTestId(linkCorreto);

    // Verifica se o atributo target é "_blank"
    expect(link).toHaveAttribute("target", "_blank");

    // Verifica se a URL é a esperada
    expect(link).toHaveAttribute("href", linkCorreto);
  });
  test('O link tem o atributo target="_blank" e redireciona para a URL correta', () => {
    const { getByTestId, getByText } = render(<Interface />);
    const projectsButton = getByText("PROJETOS");
    fireEvent.click(projectsButton);
    const linkCorreto = "https://rickandmorty-7gm6b9xrx-ryanzitto.vercel.app/";
    const link = getByTestId(linkCorreto);

    // Verifica se o atributo target é "_blank"
    expect(link).toHaveAttribute("target", "_blank");

    // Verifica se a URL é a esperada
    expect(link).toHaveAttribute("href", linkCorreto);
  });
});
