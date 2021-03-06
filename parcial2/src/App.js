import React from "react";
import "./App.css";
import { IntlProvider } from "react-intl";
import localeENMesagger from "./locale/en.json";
import localeESMesagger from "./locale/es.json";
import ListTable from "./components/ListTable";

function App() {
  function getBrowserLang() {
    const lang = navigator.language || navigator.userLanguage;
    return lang;
  }

  function getLocale() {
    const lang = getBrowserLang();
    if (lang === "en") {
      return localeENMesagger;
    } else {
      return localeESMesagger;
    }
  }
  return (
    <IntlProvider locale={getBrowserLang()} messages={getLocale()}>
      <ListTable />
    </IntlProvider>
  );
}

export default App;
