import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import AddProduct from "./components/AddProduct/AddProduct";
import EditProduct from "./components/EditProduct/EditProduct";

function App() {


    return (
        <div>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ProductList/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/add' element={<AddProduct/>}/>
                    <Route path='/edit/:id' element={<EditProduct/>}/>

                </Routes>
            </BrowserRouter>









        </div>
    );
}

export default App;
