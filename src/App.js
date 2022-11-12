import { lazy, Suspense, useState } from "react";
import "./App.css";

const RatePage = lazy(() => import("./pages/RatePage"));
const ThankPage = lazy(() => import("./pages/ThankPage"));

function App() {
  const [thanks, setThanks] = useState(false);
  const [disable, setDisable] = useState(false);

  const handleSubmit = (rate) => {
    setDisable(true);
    if (rate === null) {
      setDisable(false);
      return { message: "Please rate our services" };
    } else {
      setDisable(false);
      setThanks(true);
      return { rate: rate };
    }
  };

  return (
    <Suspense fallback={<>Loading</>}>
      <div className="container">
        {!thanks ? <RatePage handleSubmit={handleSubmit} /> : <ThankPage />}
      </div>
    </Suspense>
  );
}

export default App;
