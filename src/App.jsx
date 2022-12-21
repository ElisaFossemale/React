import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/App.css"
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"


function App() {
  
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenidos al E-Shop!" />}/>
          <Route path="/category/:categoryId" element={<ItemListContainer  />}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
