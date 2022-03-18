import { GlobalProvider } from "./context/GlobalContext";
import AppRoutes from "./routes";

import "./App.css";

const App = () => {
  return (
    <GlobalProvider>
      <AppRoutes />
    </GlobalProvider>
  );
};

export default App;
