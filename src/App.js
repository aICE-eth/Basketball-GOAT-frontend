import './App.css';
import MainPage from './components/MainPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SliderPage from './components/SliderPage';
import Ranking from './components/Ranking';
import { DataContextProvider } from './components/DataContext';

function App() {
  return (
    <DataContextProvider>
      <Router>
        <div>
          <Routes>
            <Route path ='/' element={<MainPage />}></Route>
            <Route path = '/SliderPage' element ={<SliderPage />} />
            <Route path = '/Ranking' element ={<Ranking />} />
          </Routes>
        </div>
      </Router>
    </DataContextProvider>
  );
}

export default App;
