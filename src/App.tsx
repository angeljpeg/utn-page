// React
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

// Router
import { AppRouter } from "./Router";
// Components
import { Loader, AutoScroll } from "@/shared";

function App() {
  return (
    <BrowserRouter>
      <AutoScroll />
      <Suspense fallback={<Loader />}>
        <AppRouter />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
