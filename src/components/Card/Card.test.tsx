import { render, screen, waitFor } from '@testing-library/react'
import { Card } from './Card';

describe("Card", () => {
  it('renders correctly', () => {
    expect(() => {
      render(<Card />)
    }).not.toThrow();
  });
});