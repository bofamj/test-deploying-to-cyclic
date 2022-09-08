import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Nav from "./components/Nav";
import Property from "./components/Property";
import ForRent from "./components/ForRent";
import DetailsForRent from "./page/DetailsForRent";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/property-sale" exact element={<Property />} />
        <Route path="/property-rent" exact element={<ForRent />} />
        <Route path="/:id" exact element={<DetailsForRent />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
