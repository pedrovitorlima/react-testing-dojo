import { render, screen } from '@testing-library/react';
import FormDojo from './FormDojo';

describe('FormDojo component', () => { 

    describe('Given the component loaded', () => {

        it('Should show BLA component', () => {
            render(<FormDojo />);
            const button = screen.getByText('Submit');
            expect(button).toBeInTheDocument();
        });

    });

});