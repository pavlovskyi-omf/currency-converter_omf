import { ArrowLeftRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import CurrencyInput from '@/components/CurrencyInput/CurrencyInput';
import CurrencyFee from '@/components/CurrencyFee/CurrencyFee';
import CurrencyChart from '@/components/CurrencyChart/CurrencyChart';
import { Button } from '@/components/ui/button';
import Skeleton from '@/components/Skeleton/Skeleton';
import useFetchCurrency from '@/hooks/useFetchCurrency/useFetchCurrency';
import './App.css';

const currencyOptions = [
  { flag: 'BR', name: 'Brazilian Real', currency: 'BRL' },
  { flag: 'US', name: 'US Dollar', currency: 'USD' },
  { flag: 'CA', name: 'Canadian Dollar', currency: 'CAD' },
  { flag: 'EU', name: 'Euro', currency: 'EUR' },
  { flag: 'GB', name: 'British Pound', currency: 'GBP' },
  { flag: 'JP', name: 'Japanese Yen', currency: 'JPY' },
  { flag: 'UA', name: 'Ukrainian Hryvnia', currency: 'UAH' },
  { flag: 'PL', name: 'Polish Zloty', currency: 'PLN' },
];

function App() {
  const { t, i18n } = useTranslation();
  const [primaryAmount, setPrimaryAmount] = useState('1');
  const [secondaryAmount, setSecondaryAmount] = useState('1');
  const [primaryCurrency, setPrimaryCurrency] = useState('USD');
  const [secondaryCurrency, setSecondaryCurrency] = useState('BRL');
  const [currencyFee, setCurrencyFee] = useState('0');
  const [period, setPeriod] = useState('5');

  const {
    data: currencyData,
    loading,
    error,
  } = useFetchCurrency(primaryCurrency, secondaryCurrency, period);

  useEffect(() => {
    if (currencyData && currencyData.length > 0) {
      convertCurrency();
    }
  }, [currencyData, primaryAmount, primaryCurrency, secondaryCurrency]);

  const convertCurrency = () => {
    if (!currencyData || currencyData.length === 0) return;

    const latestData = currencyData[currencyData.length - 1];
    const conversionRate = parseFloat(latestData?.value) || 1;
    const amount = parseFloat(primaryAmount);
    const fee = parseFloat(currencyFee);

    if (!isNaN(amount) && !isNaN(conversionRate) && !isNaN(fee)) {
      const newSecondaryAmount = (
        Math.round(amount * conversionRate * 100) / 100
      ).toFixed(2);
      setSecondaryAmount(newSecondaryAmount);
    } else {
      setSecondaryAmount('Invalid');
    }
  };

  const handleAmountChange = (newAmount, field) => {
    if (/^[0-9]*\.?[0-9]*$/.test(newAmount)) {
      field === 'primary'
        ? setPrimaryAmount(newAmount)
        : setSecondaryAmount(newAmount);
    }
  };

  const handleCurrencyChange = (newCurrency, field) => {
    if (newCurrency !== primaryCurrency && newCurrency !== secondaryCurrency) {
      field === 'primary'
        ? setPrimaryCurrency(newCurrency)
        : setSecondaryCurrency(newCurrency);
    }
  };

  const handleFeeChange = (newFee) => {
    if (/^[0-9]*\.?[0-9]*$/.test(newFee)) {
      setCurrencyFee(newFee);
    }
  };

  const invertCurrency = () => {
    setPrimaryCurrency(secondaryCurrency);
    setSecondaryCurrency(primaryCurrency);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  const finalFee = parseFloat(secondaryAmount * (currencyFee / 100)).toFixed(2);
  const finalAmount = (
    parseFloat(secondaryAmount) - parseFloat(finalFee)
  ).toFixed(2);

  return (
    <>
      <div className="w-full">
        <div className="w-full flex justify-end mb-4">
          <select
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value)}
            className="px-4 py-2 rounded-md bg-custom-grey text-white border border-gray-600"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
        </div>
        <div className="w-full flex flex-col justify-center lg:flex-row items-center gap-4 mb-4">
          <CurrencyInput
            currencyPrimary="true"
            currencyOptions={currencyOptions}
            amount={primaryAmount}
            currency={primaryCurrency}
            onAmountChange={(amount) => handleAmountChange(amount, 'primary')}
            onCurrencyChange={(currency) =>
              handleCurrencyChange(currency, 'primary')
            }
          />
          <Button
            onClick={invertCurrency}
            className={'text-green-500 bg-transparent hover:bg-transparent'}
          >
            <ArrowLeftRight />
          </Button>

          <CurrencyInput
            currencyPrimary="false"
            currencyOptions={currencyOptions}
            amount={secondaryAmount}
            currency={secondaryCurrency}
            onAmountChange={(amount) => handleAmountChange(amount, 'secondary')}
            onCurrencyChange={(currency) =>
              handleCurrencyChange(currency, 'secondary')
            }
          />

          <CurrencyFee
            currencyFee={currencyFee}
            onFeeChange={handleFeeChange}
          />
        </div>

        {loading ? (
          <Skeleton />
        ) : (
          <div>
            <div className="w-full mt-16 mb-16 text-center">
              <p className="text-xl sm:text-2xl mt-4 mb-4">
                {primaryAmount} {primaryCurrency} = {secondaryAmount}{' '}
                {secondaryCurrency}
              </p>
              <p className="text-xl sm:text-4xl mt-4 mb-4">
                {t('finalAmount')}: {finalAmount} {secondaryCurrency} (
                {t('fee')}: {finalFee} {secondaryCurrency})
              </p>
            </div>

            <main>
              <div className="w-full flex justify-center  items-center gap-4 mb-16">
                <Button
                  className={`hover:bg-transparent hover:text-gray-100 ${period === '5' ? 'active' : ''}`}
                  onClick={() => setPeriod('5')}
                >
                  {t('fiveDays')}
                </Button>
                <Button
                  className={`hover:bg-transparent hover:text-gray-100 ${period === '30' ? 'active' : ''}`}
                  onClick={() => setPeriod('30')}
                >
                  {t('oneMonth')}
                </Button>
              </div>
              <CurrencyChart period={period} data={currencyData} />
            </main>

            {/* <footer className="mt-16 text-center">
              <p>
                Created with ❤️ by{' '}
                <a href="" target="_blank">
                  Author
                </a>
              </p>
            </footer> */}
          </div>
        )}
      </div>
      {error && (
        <p>
          {t('error')}: {error}
        </p>
      )}
    </>
  );
}

export default App;
