import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import ArteInfo from "../components/ArteInfo";

describe("info del Arte", () => {
  it("debe existir el componente ArteInfo", () => {
    expect(typeof ArteInfo).toBe("function");
    expect(React.isValidElement(<ArteInfo />)).toBe(true);
  });

  it("El título '¡Arte de la civilización azteca!' se muestra correctamente", async () => {
    const { getByText } = render(
      <MemoryRouter>
        <ArteInfo />
      </MemoryRouter>
    );
    await waitFor(() => {
      const title = getByText("¡Arte de la civilización azteca!");
      expect(title).toBeInTheDocument();
    });
  });

  it("La introducción se muestra correctamente ", () => {
    const { getByText } = render(
      <MemoryRouter>
        <ArteInfo />
      </MemoryRouter>
    );
    const findByText = (content, element) => {
      const elements = Array.from(element.childNodes);
      return elements.find((el) => el.textContent === content);
    };
    const element = findByText(
      "Los aztecas, una antigua civilización mesoamericana, dejaron un legado artístico que nostransporta a través del tiempo y nos revela su profundo entendimiento del mundo y sus creencias.En esta sección, exploraremos los diversos aspectos del arte azteca, desde su arquitecturaimponente hasta sus intrincadas esculturas, cerámicas, pinturas y textiles. Descubriremos cómocada forma de expresión artística jugó un papel crucial en la vida de los aztecas, ya sea en elámbito religioso, político o cotidiano.",
      screen.getByTestId("intro-element")
    );
  });
});
