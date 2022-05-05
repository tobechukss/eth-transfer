import { useEffect, useState, useRef} from "react"
import axios from "axios";
import ListImg from "./listimg";
import {MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import exmarks from "../assets/images/exmarksthespot.png"



const Artwork = () => {
    const ref = useRef();
    const [furries, setFurries] = useState([])
    let nfts;
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
      };
    
    useEffect(()=> {

      const options = {
        method: 'GET',
        url: 'https://opensea13.p.rapidapi.com/assets',
        params: {
          collection: 'crypto-furries-house',
          collection_slug: 'cryptopunks',
          order_direction: 'desc',
          limit: '20',
          include_orders: 'false'
        },
        headers: {
          'X-RapidAPI-Host': 'opensea13.p.rapidapi.com',
          'X-RapidAPI-Key': ''
        }
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data.assets);
        setFurries(response.data.assets)
      }).catch(function (error) {
        console.error(error);
      });

      
          
    }, [])
   
    function renderImages() {
      nfts = furries.map((arr)=><div className="w-auto" key={arr.id}> <ListImg named={arr.name} lnk={arr.permalink} imeg={arr.image_url}/></div>)
    }

    renderImages();
    return (
      <div>
        <img src={exmarks} alt="picmage" className="absolute z-0 left-40 md:w-40 w-20 mt-20 "/>
        <img src={exmarks} alt="picmage" className="absolute z-0 right-40 md:w-40 w-20 mt-40r"/>
        <div className="artwork z-10">
             <div className="flex-col w-full justify-center items-center">
      <div className="flex md:flex-col flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-center flex-col md:mr-10">
            <div>
          <h1 className="text-white md:text-9xl text-7xl py-1 font-['Meatloaf']">
         THE NFTs
          </h1>
         
        </div>

        </div>

        <div className="flex  flex-1 overflow-x-auto items-center justify-center w-full md:mt-0 mt-10" ref={ref}>
           
        <div className="tri2 absolute md:left-20 left-0" onClick={()=> scroll(-60)}>
            <MdKeyboardArrowLeft className="arro2 text-3xl text-white relative" />
            </div>
            
            {nfts}
            <div className="tri absolute md:right-20 right-0" onClick={()=> scroll(60)}>
            <MdKeyboardArrowRight className="arro text-3xl text-white relative"/>
            </div>
        
        
        </div>
      </div>
    </div>
        </div>
       
        </div>
    )
}

export default Artwork