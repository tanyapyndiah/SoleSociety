import './App.css';
import MainPage from "./components/MainPage";
import SelectProductPage from "./components/SelectProductPage";
import {  Routes, Route, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ResultsPage from "./components/ResultsPage"
import CheckoutPage from "./components/CheckoutPage"
import SurveyPage from './components/SurveyPage';

function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/productDetails" element={<SelectProductPage />} />
        <Route path="/browseProducts" element={<ResultsPage />} />
        <Route path="/shoppingCart" element={<CheckoutPage/>}/>
        <Route path='/survey' element={<SurveyPage/>}/>
    </Routes>
    </>
  )
}

export default App
