//import logo from './logo.svg';
import './App.css';
//import AlbumCard from './components/card/AlbumCard';
//import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
//import Albums from './components/Albums/Albums';
import Section from './components/Section/Section';
import SongsSection from './components/SongsSection/SongsSection';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ backgroundColor: "black", color: "white", padding: "20px", width:"100vw" }}>
            <Hero />
      </div>
      
      <Section 
        title="Top Albums" 
        apiEndpoint="https://qtify-backend-labs.crio.do/albums/top" 
      />
      <Section 
        title="New Albums" 
        apiEndpoint="https://qtify-backend-labs.crio.do/albums/new" 
      />
      
      <div style={{ backgroundColor: "black", color: "white", padding: "20px", width:"100vw" }}>
            <SongsSection />
      </div>

      </BrowserRouter>
    

  );
}

export default App;
