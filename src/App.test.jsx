import { describe, it, expect, vi, beforeAll, beforeEach } from 'vitest';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from './App';

const mockChangeLanguage = vi.fn();

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => {
      const translations = {
        finalAmount: 'Final Amount',
        fee: 'Fee',
        fiveDays: '5 Days',
        oneMonth: '1 Month',
        error: 'Error',
      };
      return translations[key] || key;
    },
    i18n: { language: 'en', changeLanguage: mockChangeLanguage },
  }),
}));

vi.mock('./hooks/useFetchCurrency/useFetchCurrency', () => ({
  default: vi.fn(() => ({
    data: [
      { date: '2024-09-09', value: '1.25' },
      { date: '2024-09-10', value: '1.20' },
    ],
    loading: false,
    error: null,
  })),
}));

beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

beforeEach(() => {
  vi.clearAllMocks();
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: vi.fn(() => 'en'),
      setItem: vi.fn(),
    },
    writable: true,
  });
});

describe('App Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container).toBeDefined();
  });

  it('displays currency conversion results correctly when data is loaded', async () => {
    vi.mock('./hooks/useFetchCurrency/useFetchCurrency', () => ({
      default: vi.fn(() => ({
        data: [
          { date: '2024-09-10', value: '4.67' },
          { date: '2024-09-11', value: '4.25' },
        ],
        loading: false,
        error: null,
      })),
    }));

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText(/1 USD/i)).toBeInTheDocument();
      const brlElements = screen.getAllByText(/4.25 BRL/i);
      expect(brlElements).toHaveLength(2);
      expect(brlElements[0]).toBeInTheDocument();
      expect(brlElements[1]).toBeInTheDocument();
    });
  });

  it('changes language when language selector is used', async () => {
    render(<App />);

    const languageSelects = screen.getAllByRole('combobox');
    const languageSelect = languageSelects.find(select => 
      select.querySelector('option[value="en"]') && 
      select.querySelector('option[value="es"]') &&
      select.querySelector('option[value="fr"]')
    );
    expect(languageSelect).toBeDefined();

    fireEvent.change(languageSelect, { target: { value: 'es' } });

    await waitFor(() => {
      expect(mockChangeLanguage).toHaveBeenCalledWith('es');
      expect(window.localStorage.setItem).toHaveBeenCalledWith('language', 'es');
    });
  });

  it('persists language selection to localStorage', async () => {
    render(<App />);

    const languageSelects = screen.getAllByRole('combobox');
    const languageSelect = languageSelects.find(select => 
      select.querySelector('option[value="en"]') && 
      select.querySelector('option[value="es"]') &&
      select.querySelector('option[value="fr"]')
    );

    fireEvent.change(languageSelect, { target: { value: 'fr' } });

    await waitFor(() => {
      expect(window.localStorage.setItem).toHaveBeenCalledWith('language', 'fr');
    });
  });
});
