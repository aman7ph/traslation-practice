import React, { Suspense, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';
import FormHandler from './component/formHandler';
import LangSelector from './component/LangSelector';

function App() {
  const { t, i18n } = useTranslation();
  const data = t(`data`);

  useEffect(() => {
    const lang = localStorage.getItem('language');
    i18n.changeLanguage(lang);
  }, []);

  const setLang = (datas) => {
    localStorage.setItem('language', datas);
    window.location.reload();
  };

  return (
    <div>
      <LangSelector setLang={setLang} />
      {data.map((input) => (
        <FormHandler key={input.id} {...input} />
      ))}
    </div>
  );
}
export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  );
}
