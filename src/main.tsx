import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";
import ErrorBoundary from "./components/ErrorBoundary";
import "./index.css";
import { persistor, store } from "./redux/store";
import { router } from "./routes/Routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary>
          <RouterProvider router={router} />
        </ErrorBoundary>
      </PersistGate>
      <Toaster />
    </Provider>
  </StrictMode>
);
