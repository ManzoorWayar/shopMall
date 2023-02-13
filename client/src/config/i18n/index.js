// I18n Imports
import i18n from "i18next"
import Backend from "i18next-http-backend"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		// lng: localStorage.getItem("i18nextLng") || "fa",
		lng: "fa",
		backend: {
			loadPath: `http://127.0.0.1:5000/locals/{{lng}}/{{ns}}.json`,
		},
		fallbackLng: "en",
		debug: false,
		keySeparator: false,
		react: {
			useSuspense: true,
		},
		interpolation: {
			escapeValue: true,
			formatSeparator: ",",
		},
		ns: [
			"general",
			"emails"
		],
		defaultNS: ["general"],
	})

export default i18n
