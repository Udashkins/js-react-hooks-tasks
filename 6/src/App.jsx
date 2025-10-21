import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// BEGIN (write your solution here)
const Factorial = ({ number, getFactorial }) => {
  const result = getFactorial(number);
  return (
    <div>
      Factorial of {number} is {result}
    </div>
  );
};


const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  
  const handleLangSwitch = (e) => {
    const lang = e.target.dataset.testid;
    i18n.changeLanguage(lang);
  };

  const getClassName = (currLang) => {
    const className = i18n.language === currLang ? 'btn btn-primary' : 'btn btn-outline-primary';
    return className;
  };

  return (
    <div className="btn-group mb-3" role="group">
      <button
        type="button"
        data-testid="en"
        className={getClassName('en')}
        onClick={handleLangSwitch}
      >
        {t('languages.en')}
      </button>
      <button
        type="button"
        data-testid="ru"
        className={getClassName('ru')}
        onClick={handleLangSwitch}
      >
        {t('languages.ru')}
      </button>
    </div>
  );
};

const FactorialButtons = ({ onValueChange }) => {
  const { t } = useTranslation();
  
  return (
    <div className="btn-group mb-3" role="group">
      <button type="button" className="btn btn-outline-primary" onClick={() => onValueChange(1)}>{`${t('factorial')} 1`}</button>
      <button type="button" className="btn btn-outline-primary" onClick={() => onValueChange(5)}>{`${t('factorial')} 5`}</button>
      <button type="button" className="btn btn-outline-primary" onClick={() => onValueChange(10)}>{`${t('factorial')} 10`}</button>
      <button type="button" className="btn btn-outline-primary" onClick={() => onValueChange(20)}>{`${t('factorial')} 20`}</button>
    </div>
  );
};

const App = () => {
  const [value, setValue] = useState(0);

  const factorialFunc = (number) => {
    if (number <= 0) return 1;
    return number * factorialFunc(number - 1);
  };

  const getFactorial = factorialFunc;
  

  return (
    <div className="App">
      <LanguageSwitcher />
      <br />
      <FactorialButtons onValueChange={setValue} />
      <Factorial number={value} getFactorial={getFactorial} />
    </div>
  );
};

// END

export default App;
