import "./App.css";

import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "routes/AppRoutes";
import Toaster from "components/atoms/Toaster";
import Header from "components/templates/Header";

import theme from "./theme";
import createCache from "@emotion/cache";
import { CssBaseline } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { CacheProvider } from "@emotion/react";
import { LocalizationProvider } from "@mui/lab";
import dateAdapter from "@mui/lab/AdapterDateFns";
import { ScopedCssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import ErrorBoundary from "components/atoms/ErrorBoundary";

const cache = createCache({ key: "css", prepend: true });

export default function App() {
  return (
    <SnackbarProvider
      maxSnack={5}
      hideIconVariant
      preventDuplicate
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      iconVariant={{
        success: "✅",
        error: "✖️",
        warning: "⚠️",
        info: "ℹ️",
      }}
    >
      <Toaster />
      <ErrorBoundary>
        <CacheProvider value={cache}>
          <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={dateAdapter}>
              <CssBaseline />
              <ScopedCssBaseline style={{ backgroundColor: "#eeeeee" }}>
                <Provider store={store}>
                  <BrowserRouter>
                    {/* <Header /> */}
                    <AppRoutes />
                  </BrowserRouter>
                </Provider>
              </ScopedCssBaseline>
            </LocalizationProvider>
          </ThemeProvider>
        </CacheProvider>
      </ErrorBoundary>
    </SnackbarProvider>
  );
}
