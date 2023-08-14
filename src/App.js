import './App.css';
import MainPage from './components/MainPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SliderPage from './components/SliderPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path ='/' element={ <MainPage />}></Route>
          <Route path = '/SliderPage' element ={<SliderPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
