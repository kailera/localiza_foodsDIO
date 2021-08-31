import React from "react";
import { ThemeProvider } from 'styled-components';
import { Provider } from "react-redux";
import { Reset } from 'styled-reset';
import store from "./redux/store";

import Home  from "./pages/home";
import theme from "./theme";


function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Reset/>
        <Home/>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
