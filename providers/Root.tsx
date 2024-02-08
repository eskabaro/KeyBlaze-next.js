"use client";

import { FC, PropsWithChildren } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "@/store";

export const Root: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <NextUIProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        themes={["light", "dark"]}
      >
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={<h1>Loading</h1>}>
            {children}
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </NextUIProvider>
  );
};
