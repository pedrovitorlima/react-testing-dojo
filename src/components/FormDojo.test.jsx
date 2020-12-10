import { render, screen, fireEvent } from '@testing-library/react';
import FormDojo from './FormDojo';

describe('The FormDojo, given the application has started', () => {
    describe('when the component loads', () => {
        it("then it should display two buttons", () => {
            render(<FormDojo />);

            const submitButton = screen.getByText('Submit');
            expect(submitButton).toBeInTheDocument();

            const clearButton = screen.getByText('Clear');
            expect(clearButton).toBeInTheDocument();
        });
    })

    describe('when user submit form and input is empty', () => {
        it('then should show error message', () => {
            render(<FormDojo />);

            const submitButton = screen.getByText('Submit');

            fireEvent.click(submitButton);

            const actualMessage = screen.getByTestId('form-message');
            const expectedMessage = 'Name is mandatory.';

            expect(actualMessage.textContent).toBe(expectedMessage);
        });
    })

    describe('when the user submit the form with valid parameters', () => {
        it('then should display the overview message', () => {
            render(<FormDojo />);

            const fieldName = screen.getByTestId('form-name');
            fireEvent.change(fieldName, { target: { value: 'Anderson from Marvelous Avengers' } });

            const submitButton = screen.getByText('Submit');

            fireEvent.click(submitButton);

            const actualMessage = screen.getByTestId('form-message');
            const expectedMessage = 'Name is Anderson from Marvelous Avengers, role is QA and grad is Principal.';

            expect(actualMessage.textContent).toBe(expectedMessage);

        })
    });
})