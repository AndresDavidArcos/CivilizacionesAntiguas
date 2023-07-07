import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import AgriculturaInfo from "../components/AgriculturaInfo";

describe("info de la Agricultura", () => {
  it("debe existir el componente AgriculturaInfo", () => {
    expect(typeof AgriculturaInfo).toBe("function");
    expect(React.isValidElement(<AgriculturaInfo />)).toBe(true);
  });

  it("El título '¡Agricultura de la civilización azteca!' se muestra correctamente", async () => {
    const { getByText } = render(
      <MemoryRouter>
        <AgriculturaInfo />
      </MemoryRouter>
    );
    await waitFor(() => {
      const title = getByText("¡Agricultura de la civilización azteca!");
      expect(title).toBeInTheDocument();
    });
  });

  it("La introducción se muestra correctamente ", () => {
    const { getByText } = render(
      <MemoryRouter>
        <AgriculturaInfo />
      </MemoryRouter>
    );
    const findByText = (content, element) => {
      const elements = Array.from(element.childNodes);
      return elements.find((el) => el.textContent === content);
    };
    const element = findByText(
      "La agricultura fue una actividad fundamental para la civilización azteca. Su sociedad dependía en gran medida de los productos agrícolas para su subsistencia, economía y desarrollo. Los aztecas reconocían la importancia de la tierra y la naturaleza, considerándolas sagradas y estableciendo una estrecha relación entre la agricultura y su cosmovisión.",
      screen.getByTestId("intro-element")
    );
  });
});
