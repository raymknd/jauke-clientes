import { BaseProvider, DarkTheme, ThemeProvider } from 'baseui'
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';

import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router'
import "./index.sass";
import { Provider } from 'react-redux';

import store from './redux/store'

const engine = new Styletron();


ReactDOM.createRoot(document.getElementById('__jauke') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <StyletronProvider value={engine}>
      <BaseProvider theme={DarkTheme}>
        <Router />
      </BaseProvider>
    </StyletronProvider>
    </Provider>
  </React.StrictMode>,
)
