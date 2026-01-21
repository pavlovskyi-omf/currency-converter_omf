import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const CurrencyFee = ({ currencyFee, onFeeChange }) => {
  const { t } = useTranslation();

  return (
    <div className="flex w-full lg:w-[500px] lg:flex-row items-center border border-custom-grey p-3 rounded-xl bg-custom-grey">
      <label htmlFor="currency-fee" className="text-white mr-2">
        {t('currencyFee')}
      </label>
      <input
        id="currency-fee"
        className="flex h-10 border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full sm:w-[150px] ml-0 sm:ml-2 border-none rounded-none bg-custom-grey text-white-800"
        type="text"
        value={currencyFee}
        onChange={(e) => onFeeChange(e.target.value)}
      />
    </div>
  );
};

CurrencyFee.propTypes = {
  currencyFee: PropTypes.string,
  onFeeChange: PropTypes.func,
};

export default CurrencyFee;
