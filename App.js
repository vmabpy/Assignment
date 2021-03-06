import React from "react";
import { Provider } from "react-redux";
import MainApp from "./src/components/MainApp";
import createStore from "./src/redux/";
const { store } = createStore();
console.disableYellowBox = true;
import "./src/i18n/i18n";

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
