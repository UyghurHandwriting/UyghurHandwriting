import React from 'react';
import { render, screen } from '@testing-library/react';
import SelectComponent from './SelectComponent';

describe('SelectComponent', () => {
    it('renders select component with options', () => {

        render(<SelectComponent />)

        const selectTitle1 = screen.getByText('Select 1:');
        expect(selectTitle1).toBeInTheDocument();

        const selectElement1 = screen.getByLabelText('Select 1');
        expect(selectElement1).toBeInTheDocument();

        const option1Elements = screen.getAllByRole('option', { name: /Option \d/ });
        expect(option1Elements).toHaveLength(3);

        const selectTitle2 = screen.getByText('Select 2:');
        expect(selectTitle2).toBeInTheDocument();

        const selectElement2 = screen.getByLabelText('Select 2');
        expect(selectElement2).toBeInTheDocument();

        const option2Elements = screen.getAllByRole('option', { name: /Option \d/ });
        expect(option2Elements).toHaveLength(3);
    });
});
