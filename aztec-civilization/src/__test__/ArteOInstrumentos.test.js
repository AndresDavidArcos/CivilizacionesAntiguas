import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ArteOInstrumentos from "../components/ArteOInstrumentos";

describe("ArteOInstrumentos", () => {
  it("debe existir el componente ArteOInstrumentos", () => {
    expect(typeof ArteOInstrumentos).toBe("function");
    expect(React.isValidElement(<ArteOInstrumentos />)).toBe(true);
  });

  it("El texto se muestra correctamente ", () => {
    const { getByText } = render(
      <MemoryRouter>
        <ArteOInstrumentos />
      </MemoryRouter>
    );
    const findByText = (content, element) => {
      const elements = Array.from(element.childNodes);
      return elements.find((el) => el.textContent === content);
    };
    const element = findByText(
      "Haz click para ir a Instrumentos",
      screen.getByTestId("choose-element")
    );
  });
});
