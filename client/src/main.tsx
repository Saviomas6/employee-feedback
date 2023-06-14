import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./logic/redux/store/store.ts";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
      </Provider>
    </QueryClientProvider>
  </ErrorBoundary>
);
