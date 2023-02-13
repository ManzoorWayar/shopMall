/** @format */

import path from "path";
import i18next from "i18next";
import i18nextFs from "i18next-fs-backend";
import middleware from "i18next-http-middleware";

const __dirname = path.resolve();

i18next
	.use(i18nextFs)
	.use(middleware.LanguageDetector)
	.init({
		detection: {
			order: ["header"],
		},
		fallbackLng: "fa",
		backend: {
			loadPath: path.join(__dirname, "/backend/locals/{{lng}}/{{ns}}.json"),
		},
		preload: ["en", "fa", "ps"],
		ns: [
			"general",
			"emails",
		],
		defaultNS: "general",
	});

export default middleware.handle(i18next);
