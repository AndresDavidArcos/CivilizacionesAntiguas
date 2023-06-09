import React from "react";
import { getByTestId, render, screen, waitFor, fireEvent, queryByTestId } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import Arquitectura from "../components/Arquitectura.js";
import Modelos from "../components/Arquitecturas.js";

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
            const boton = getByText("Anterior");
            expect(boton).toBeInTheDocument();
        });
    });

    it("Se debe mostrar el botón anterior Slide", async () => {
        const { getByText } = render(
            <MemoryRouter>
                <Arquitectura />
            </MemoryRouter>
        );
        await waitFor(() => {
            const boton = getByText("Siguiente");
            expect(boton).toBeInTheDocument();
        });
    });

    it("Se debe mostrar el botón Ver modelo", async () => {
        const { getByText } = render(
            <MemoryRouter>
                <Arquitectura />
            </MemoryRouter>
        );
        await waitFor(() => {
            const boton = getByText("Ver modelo");
            expect(boton).toBeInTheDocument();
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

describe("Arquitecturas", () => {
    it("Se debe mostrar las instrucciones del modelo", async () => {
        const { getByText, queryByTestId } = render(
            <MemoryRouter>
                <Arquitectura />
            </MemoryRouter>
        );

        const button = getByText('Ver modelo');
        fireEvent.click(button);

        expect(queryByTestId('instrucciones')).toBeInTheDocument();
    });

});