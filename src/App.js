import { lazy, Suspense, useState } from "react";
import "./App.css";

const RatePage = lazy(() => import("./pages/RatePage"));
const ThankPage = lazy(() => import("./pages/ThankPage"));

function App() {
  const [thanks, setThanks] = useState(false);
  const [rate, setRate] = useState(null);
  // const [disable, setDisable] = useState(false);

  const handleSubmit = (rate) => {
    if (!rate) {
      alert("Please rate our services");
    } else {
      setThanks(true);
      return { rate: rate };
    }
  };

  return (
    <Suspense fallback={<>Loading</>}>
      <div className="container">
        {!thanks ? (
          <RatePage handleSubmit={handleSubmit} rate={rate} setRate={setRate} />
        ) : (
          <ThankPage rate={rate} />
        )}
      </div>
    </Suspense>
  );
}

export default App;
