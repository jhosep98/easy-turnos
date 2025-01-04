import * as React from "react";

import { AppRouter } from "./router";
import { AppContextProvider } from "./context/app/provider";

const App: React.FC = () => (
  <>
    <AppContextProvider>
      <AppRouter />
    </AppContextProvider>
  </>
);

export default App;
