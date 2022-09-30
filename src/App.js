import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Channel from './components/Channel';
function App() {
  return (
    <>
    
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/channels" element={<Channel/>}/>
        <Route path="/channels/:id" element={<Channel/>}/>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
