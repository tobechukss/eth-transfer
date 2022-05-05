import arrowup from "../assets/images/arrowup.png"
import arrowside from "../assets/images/arrowside.png"


export default function Features() {
    return(
        
        <div className="">
            <img src={arrowup} alt="picmage" className="absolute z-0 right-0 md:w-96 w-40 mt-40"/>
              <div className="w-full text-white max-w-7xl m-auto px-20 z-10">
            <h1 className=" md:text-9xl text-7xl py-1 font-['Meatloaf'] text-center">FEATURES</h1>
            <div className="mt-20">
            <h4 className="text-center text-2xl font-bold">Every Agent bought has a Top Secret</h4>
            <p className="text-center mt-10 text-md">Thanks to the Opensea API, you get matched with a unique furry agent of your own.
                Click the links on each NFT to follow your store to the Furry Pipeline of Awesomeness.

            </p>
            </div>
            <div className="mt-20">
            <h4 className="text-center text-2xl font-bold">Know your Worth</h4>
            <p className="text-center mt-10 text-md">Using our currency converter, you can know the current amount your coins convert to 
            before sending them. You can convert to and from your local currency. 
            </p>
            </div>
            <div className="mt-20">
            <h4 className="text-center text-2xl font-bold">Send ETH</h4>
            <p className="text-center mt-10 text-md">Using Solidity smart contracts and connection to your Metamask, you can sell real Ethereum directly from the app. Kindly ensure that you are on
            a chrome device and then install the Metamask extension to ensure that your wallet connects in order for you to send some ETH.

            </p>
            </div>
        

    </div>
    <img src={arrowside} alt="picmage" className="absolute z-0 md:w-96 w-40 "/>
        </div>
      
    )
    
}