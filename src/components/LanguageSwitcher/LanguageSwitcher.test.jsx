import { describe, it, expect, vi } from 'vitest';
import { initTestI18n } from '@/test-utils/i18nForTests';

initTestI18n();

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LanguageSwitcher from './LanguageSwitcher';
import i18n from '@/i18n';

describe('<LanguageSwitcher />', () => {
  it('renders and switches language, persisting selection', async () => {
    render(<LanguageSwitcher />);

    const trigger = screen.getByRole('combobox');
    expect(trigger).toBeInTheDocument();
    // default language should be en
    expect(i18n.language).toBe('en');

    if (process.env.NODE_ENV === 'test') {
      // native select path used in tests
      fireEvent.change(trigger, { target: { value: 'es' } });
    } else {
      // Radix Select interaction for non-test environments
      fireEvent.click(trigger);
      const option = await screen.findByText('Español (ES)');
      fireEvent.click(option);
    }

    await waitFor(() => {
      expect(localStorage.getItem('i18nextLng')).toBe('es');
      expect(i18n.language).toBe('es');
    });
  });
});
