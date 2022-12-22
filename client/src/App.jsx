import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import './App.css';
// import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import Home from './pages/Home';
// import Contact from './pages/Contact';
// import Navbar from './components/Navbar';
import ProductList from "./ProductList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <ProductList />
    </QueryClientProvider>

    //  <BrowserRouter>
    //  <Navbar />
    //   <Routes>
    //     <Route path={`/`} element={<Home />}/>
    //     <Route path={`/contact`} element={<Contact />}/>
    //   </Routes>
    //  </BrowserRouter>
  );
}

export default App;
