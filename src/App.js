import "./App.css";
import Navbar from "./components/Navbar";
import Expense from "./pages/Expense";
import Home from './pages/Home';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalProvider } from "./context/GlobalState";
import Currency from "./pages/Currency";
import Todo from "./pages/Todo";
import Calculator from "./pages/Calculator";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Navbar />
        <Routes >
        
          <Route path="/" exact element= {<Home />}  />
          <Route path="/expense" element= {<Expense />} />
          <Route path="/currency" element= {<Currency />} />
          <Route path="/calculator" element= {<Calculator />} />
          <Route path="/todo" element= {<Todo />} />
        
        </Routes>
        <Footer />
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
