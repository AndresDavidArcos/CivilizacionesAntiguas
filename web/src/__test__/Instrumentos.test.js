import React from "react";
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import Instrumentos from "../components/Instrumentos.js";

describe("Instrumentos", () => {
  it("debe existir el componente Instrumentos", () => {
    expect(typeof Instrumentos).toBe("function");
    expect(React.isValidElement(<Instrumentos />)).toBe(true);
  });

  it("debe renderizar el título correctamente", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={[{pathname: '/instrumentos'}]}>
        <Instrumentos />
      </MemoryRouter>
    );
    const titleElement = getByText("Instrumentos del Imperio Azteca");
    expect(titleElement).toBeInTheDocument();
  });

    it('debe renderizar la introducción correctamente', () => {
      const { getByText } = render(
        <MemoryRouter initialEntries={[{ pathname: "/instrumentos" }]}>
          <Instrumentos />
        </MemoryRouter>
      );
      const introText =
        "Sus composiciones eran interpretadas en una cámara llamada Mixcoacalli; en ella intervenía un grupo de ejecutantes y cantantes llamado Cuya-Picque. Los principales instrumentos utilizados eran:";

      const introElement = getByText((content, element) => {
        // Verificar si el contenido incluye el texto esperado
        const hasText = content.includes(introText);

        // Verificar que el elemento sea un div con la clase "intro"
        const isDivWithClassIntro =
          element.tagName.toLowerCase() === "div" &&
          element.classList.contains("intro");

        // Devolver verdadero si ambos criterios se cumplen
        return hasText && isDivWithClassIntro;
      });

      expect(introElement).toBeInTheDocument();
    });

    it("debe renderizar todos los párrafos de los instrumentos correctamente", () => {
      const { getByText } = render(
        <MemoryRouter initialEntries={[{ pathname: "/instrumentos" }]}>
          <Instrumentos />
        </MemoryRouter>
      );
      const huetlElement = getByText("El Huéhuetl.");
      const teponaztliElement = getByText("El Teponaztli.");
      const tlapitzalliElement = getByText("El Tlapitzalli.");
      const ocarinaElement = getByText("La Ocarina.");
      const tzicahastrliElement = getByText("El Tzicahastrli.");
      const atecocolliElement = getByText("El Atecocolli.");

      expect(huetlElement).toBeInTheDocument();
      expect(teponaztliElement).toBeInTheDocument();
      expect(tlapitzalliElement).toBeInTheDocument();
      expect(ocarinaElement).toBeInTheDocument();
      expect(tzicahastrliElement).toBeInTheDocument();
      expect(atecocolliElement).toBeInTheDocument();
    });
  
  })

