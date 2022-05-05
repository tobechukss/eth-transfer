import logo from "../assets/images/SAA.png"
import avi from "../assets/images/lofi.png"
export default function Footer() {
    return (
        <div className="white-glassmorphism w-full text-white py-10">
            <div className="flex w-10/12 justify-between m-auto">
                <div>
                <img src={logo} alt="logo" className="w-60"/>
                </div>
                
                <div className="border-brand-orange  h-20 w-20 mt-4">
                <img src={avi} alt="logo" className="w-60"/>
                </div>
                
            </div>
            <p className="text-center">Developed by Tobechukwu Alozie</p>
        </div>
    )
}