// React
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

// Router
import { AppRouter } from "./Router";

import { Loader } from "@/shared";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <AppRouter />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
