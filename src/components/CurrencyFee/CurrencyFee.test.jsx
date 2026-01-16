import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import CurrencyFee from './CurrencyFee';

describe('<CurrencyFee />', () => {
  const mockOnFeeChange = vi.fn();

  it('renders the component with the correct initial value', () => {
    const { getByLabelText } = render(
      <CurrencyFee currencyFee="0.5" onFeeChange={mockOnFeeChange} />
    );

    const input = getByLabelText(/Currency Fee, %/i);
    expect(input.value).toBe('0.5');
  });

  it('calls onFeeChange when the input value changes', () => {
    const { getByLabelText } = render(
      <CurrencyFee currencyFee="0.5" onFeeChange={mockOnFeeChange} />
    );

    const input = getByLabelText(/Currency Fee, %/i);
    fireEvent.change(input, { target: { value: '1.0' } });

    expect(mockOnFeeChange).toHaveBeenCalledWith('1.0');
  });
});