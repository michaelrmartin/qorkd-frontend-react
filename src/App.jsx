import { Footer } from "./Footer";
import { Header } from "./Header";
import { Home } from "./Home";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter />
        <Header />
        <Home />
        <Footer />
      <BrowserRouter />
    </div>
  );
}

export default App;
