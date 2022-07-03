import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import ListingPage from './components/ListingPage/ListingPage';
import ObjectDetail from './components/ObjectDetail/ObjectDetail';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes path="/" >
        <Route index element={<Home/>}/>
        <Route path="listingPage" element = {<ListingPage/>} />
        <Route path="details" element= {<ObjectDetail/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
