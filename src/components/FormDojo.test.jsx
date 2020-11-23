import { render, screen, fireEvent } from '@testing-library/react';
import FormDojo from './FormDojo';

describe('FormDojo component', () => { 

    describe('Given the component loaded', () => {

        it('Then should load the submit button', () => {
            render(<FormDojo />);
            const button = screen.getByText('Submit');
            expect(button).toBeInTheDocument();
        });

        it('Then should load the clear button', () => {
            render(<FormDojo />);
            const button = screen.getByText('Clear');
            expect(button).toBeInTheDocument();
        });

        describe('Given the user submitted the form', () => {

            it('Then should print the overview message with the inputed data', () => {
                render(<FormDojo></FormDojo>);
                
                const formName = screen.getByTestId('form-name');
                fireEvent.change(formName, { target: { value: 'Bruce' } });

                const formRole = screen.getByTestId('form-role'); 
                fireEvent.change(formRole, { target: { value: 'QA' } });

                const formGrad = screen.getByTestId('form-rad-principal');
                fireEvent.click(formGrad);    
                
                const submitButton = screen.getByText('Submit');
                // const leftMouseButton = { button: 1 };
                
                fireEvent.click(submitButton);

                const message = screen.getByTestId('form-message').textContent;
                const expectedMessage = 'Name is Bruce, role is QA and grad is Principal';

                expect(message).toBe(expectedMessage);

            });

            it ('When name is not provided then should show the error message', () => {
                render(<FormDojo></FormDojo>);

                const submitButton = screen.getByText('Submit');
                fireEvent.click(submitButton);

                const message = screen.getByTestId('form-message').textContent;
                const expectedMessage = 'Name is mandatory.';

                expect(message).toBe(expectedMessage);
            })


        });

        // describe('Given the user submitted the form', () => {
            
        //     it ('When name is not provided then should show the error message', () => {

        //     })

        //     //...
        // })

        // describe('Given the user cleared the form', () => {
            
        //     it ('Then should reload the form with no content')
        // })

    });

});