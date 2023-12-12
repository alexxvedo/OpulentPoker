import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SelectCards from './pages/SelectCards';


const App = () => {
  return (
      <>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<SelectCards />} />
          </Routes>
      </>
  );
};

export default App;


