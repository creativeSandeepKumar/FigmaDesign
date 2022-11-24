
import './App.css';
import { Brand, CTA, Navbar } from "./components";
import { Blog, Footer, Header, Possibility, WhatGPT3,  Features } from "./containers";

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
     <Navbar/>
     <Header/>
     <Brand/>
     <WhatGPT3/>
     <Features/>
     <Possibility/>
     <CTA/>
     <Blog/>
     <Footer/>
     </div>
    </div>
  );
}

export default App;
