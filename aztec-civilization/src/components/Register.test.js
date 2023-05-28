import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Register from './Register.js';
import { MemoryRouter } from 'react-router-dom';

describe('Register component', () => {
  it('itshould display an error message for user already registered', async () => {
    const { getByLabelText, getByText } = render(
    <MemoryRouter initialEntries={[{ pathname: '/', search: '?value=teresa_teng', state: null }]}>
    <Register />
    </MemoryRouter>
    );
    const emailInput = getByLabelText('Nombre');
    const passwordInput = getByLabelText('Contraseña');
    const submitButton = getByText('REGISTRARSE');
    global.fetch = jest.fn().mockResolvedValue({
        status: 400,
        json: () => Promise.resolve({ message: {detail: 'This user is already registered!' , status: 400}}),
      });
    fireEvent.change(emailInput, { target: { value: 'repeated@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      const errorMessage = getByText('This user is already registered!');
      expect(errorMessage).toBeInTheDocument();
    });
  });

});

