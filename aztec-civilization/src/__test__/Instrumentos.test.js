import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import Instrumentos from "../components/InstrumentosC.js";

describe("Instrumentos", () => {
  it("debe existir el componente Instrumentos", () => {
    expect(typeof Instrumentos).toBe("function");
    expect(React.isValidElement(<Instrumentos />)).toBe(true);
  });

  it("El título 'Instrumentos del Imperio Azteca' se muestra correctamente", async () => {
    const { getByText } = render(
      <MemoryRouter>
        <Instrumentos />
      </MemoryRouter>
    );
    await waitFor(() => {
      const title = getByText("Instrumentos del Imperio Azteca");
      expect(title).toBeInTheDocument();
    });
  });

  it("La introducción se muestra correctamente ", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Instrumentos />
      </MemoryRouter>
    );
    const findByText = (content, element) => {
      const elements = Array.from(element.childNodes);
      return elements.find((el) => el.textContent === content);
    };
    const element = findByText(
      "Sus composiciones eran interpretadas en una cámara llamada Mixcoacalli; en ella intervenía un grupo de ejecutantes y cantantes llamado Cuya-Picque. Los principales instrumentos utilizados eran:",
      screen.getByTestId("intro-element")
    );
  });
});
