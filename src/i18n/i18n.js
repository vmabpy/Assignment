import I18n from "ex-react-native-i18n";

I18n.fallbacks = true;
I18n.translations = {
  en: require("./languages/en.json"),
  vi: require("./languages/vi.json"),
};
// I18n.locale = "vi";

export default I18n;
