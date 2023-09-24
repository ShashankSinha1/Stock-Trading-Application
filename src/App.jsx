import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {StockOverviewPage} from "./pages/StockOverviewPage";
import {StockDetailPage} from "./pages/StockDetailPage";



export default function App() {
  return (
    <main className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StockOverviewPage />} />
          <Route path="/detail/:stock" element={<StockDetailPage/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  );
}


