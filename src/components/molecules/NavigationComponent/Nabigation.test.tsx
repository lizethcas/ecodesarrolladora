/* // src/components/Navigation/Navigation.test.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navigation from './Navigation.component';

jest.mock('../LinkComponent/Link.component', () => {
    return ({ to, label }: { to: string, label: string }) => (
        <a href={to}>{label}</a>
    );
});

describe('Navigation', () => {
    const mockLinks = [
        { to: '/home', label: 'Home' },
        { to: '/about', label: 'About' },
    ];

    test('renders logo and links correctly', () => {
        render(<Navigation links={mockLinks} logo="MyLogo" />);
        
        expect(screen.getByText('MyLogo')).toBeInTheDocument();

        mockLinks.forEach(link => {
            expect(screen.getByText(link.label)).toHaveAttribute('href', link.to);
        });
    });
});
 */