import './App.css';
import { useRef } from 'react';
import {Artwork, Navbar, Features, Welcome, Send, Footer} from "./components"
function App() {
  const nftRef = useRef(null)
  const coinRef = useRef(null)
  const welcomeRef = useRef(null)
  function clickd(one) {
    if (one === "about") {
      welcomeRef.current.scrollIntoView() 
    } else if (one === "the_nfts") {
      console.log("you")
      nftRef.current.scrollIntoView() 
    } else if (one === "send_coins") {
      console.log("wuddup")
      coinRef.current.scrollIntoView() 
    } else {
      console.log("nada")
    }
  }
  return (
    <div className="App">
      <Navbar handleClick={clickd}/>
      <div >
      <Welcome handleClick={clickd}/>
      </div>
      
      <div ref={nftRef}>
        <Artwork/>
        </div>
        <div ref={welcomeRef}>
        <Features/>
      </div>
      <div ref={coinRef}>
      <Send/>
      </div>
      <Footer/>
      
   
      
     
    </div>
  );
}

export default App;
