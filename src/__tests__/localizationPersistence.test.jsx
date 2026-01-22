import { describe, it, expect, beforeEach } from 'vitest';
import { initTestI18n } from '@/test-utils/i18nForTests';

beforeEach(() => {
  localStorage.clear();
});

import { render, screen } from '@testing-library/react';

describe('Localization persistence', () => {
  it('uses language from localStorage on init', async () => {
    // set spanish as persisted language
    localStorage.setItem('i18nextLng', 'es');

    // initialize i18n after localStorage is set so the language is picked up
    initTestI18n();

    // import App dynamically so that App's static imports don't initialize i18n
    const { default: App } = await import('@/App');
    render(<App />);

    // the app should render Spanish summary label when available
    const summary = await screen.findByText(/Cantidad final/i);
    expect(summary).toBeInTheDocument();
  });
});
