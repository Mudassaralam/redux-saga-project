import "./App.css";
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Header from "./Components/AllOtherComponents/Header";
import Main from "./Components/AllOtherComponents/Main";
import Cart from './Components/AllOtherComponents/Cart'
function App() {
  return (
    <>
  <BrowserRouter>
      <Header />
      <Routes>
        <Route  path="/" element={<Main />} />
        <Route  path="/cart" element={<Cart />}/>
      </Routes>
      
 
  </BrowserRouter>
    </>
  );
}

export default App;
