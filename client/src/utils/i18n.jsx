import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';



i18n
//   .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    debug:true,
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss
    }, resources: {
        en: {
          translation: {
            description: {
              part1: 'Edit <1>src/App.js</1> and save to reload.',
              part2: 'Learn React'
            }
          }
        },
        de: {
            translation: {
              description: {
                part1: 'Ändere <1>src/App.js</1> und speichere um neu zu laden.',
                part2: 'Lerne React'
      }
    }}
}});


  export default i18n;