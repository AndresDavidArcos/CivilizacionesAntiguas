import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import PaginaPrincipal from "../components/PaginaPrincipal";

describe("Pagina Princial", () => {
  it("debe existir el componente Instrumentos", () => {
      expect(typeof PaginaPrincipal).toBe("function");
      expect(React.isValidElement(<PaginaPrincipal />)).toBe(true);
  });

  it("El título 'Bienvenido(a) a la Civilización Azteca' se muestra correctamente", async () => {
    const { getByText } = render(
      <MemoryRouter>
        <PaginaPrincipal />
      </MemoryRouter>
    );
    await waitFor(() => {
      const title = getByText("Bienvenido(a) a la Civilización Azteca");
      expect(title).toBeInTheDocument();
    });
  });
    
})