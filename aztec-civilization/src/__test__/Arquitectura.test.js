import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import Arquitectura from "../components/Arquitectura.js";

describe("Arquitectura", () => {
    it("debe existir el componente Arquitectura", () => {
        expect(typeof Arquitectura).toBe("function");
        expect(React.isValidElement(<Arquitectura />)).toBe(true);
    });

    it("Se debe mostrar el botón siguiente Slide", async () => {
        const { getByText } = render(
            <MemoryRouter>
                <Arquitectura />
            </MemoryRouter>
        );
        await waitFor(() => {
            const title = getByText("Anterior");
            expect(title).toBeInTheDocument();
        });
    });

    it("Se debe mostrar el botón anterior Slide", async () => {
        const { getByText } = render(
            <MemoryRouter>
                <Arquitectura />
            </MemoryRouter>
        );
        await waitFor(() => {
            const title = getByText("Siguiente");
            expect(title).toBeInTheDocument();
        });
    });

    it("Se debe mostrar el botón Ver modelo", async () => {
        const { getByText } = render(
            <MemoryRouter>
                <Arquitectura />
            </MemoryRouter>
        );
        await waitFor(() => {
            const title = getByText("Ver modelo");
            expect(title).toBeInTheDocument();
        });
    });

    it("Se debe mostrar el primer titulo", async () => {
        const { getByText } = render(
            <MemoryRouter>
                <Arquitectura />
            </MemoryRouter>
        );
        await waitFor(() => {
            const title = getByText("Templo Mayor");
            expect(title).toBeInTheDocument();
        });
    });
    
});