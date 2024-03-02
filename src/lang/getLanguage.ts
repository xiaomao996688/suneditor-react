import Lang from "../types/lang";

const getLanguage = (lang?: Lang) => {
  switch (typeof lang) {
    case "object":
      return lang;
    case "string":
      return require(`suneditor-fixed/src/lang/${lang}.js`);
    default:
      return undefined;
  }
};

export default getLanguage;
