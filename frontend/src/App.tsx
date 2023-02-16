import { RouterProvider } from "react-router-dom";
import "./App.css";
import { QueryClientProvider } from "react-query";
import route from "./routes";
import { QueryClient } from "react-query";
import AppState from "./components/cart/cartContext";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <AppState>
        <RouterProvider router={route} />
      </AppState>
    </QueryClientProvider>
  );
}

export default App;
