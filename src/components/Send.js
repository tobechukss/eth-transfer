import React, { useContext } from "react";
import CurrencyConverter from "./Converter";
import { TransactionContext } from "../context/TransactionContext";
import Loader from "./Loader";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none  text-white border-none text-sm blue-glassmorphism"
  />
);
export default function Send() {
  const {
    connectWallet,
    currentAccount,
    formData,
    sendTransactions,
    handleChange,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;
    console.log(formData);

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransactions();
    console.log("logged");
  };

  return (
    <div className="send">
      <div className="flex-col w-full justify-a items-center">
        <div className="flex md:flex-col flex-col items-center justify-between md:p-20 py-12 px-4 ">
          <div className="flex flex-1 justify-center items-center flex-col ">
            <div>
              <h1 className="text-white md:text-9xl text-7xl py-1 font-['Meatloaf']">
                SEND COINS
              </h1>
            </div>
            <div className="flex md:flex-row flex-col justify-center items-center">
              <div className="flex flex-1 justify-center items-start flex-col md:mr-10">
                <p className="md:text-left text-center text-white font-light md:w-9/12 w-9/12  text-md mb-4">
                  Get started by connecting your accounts then inputting details
                  in the required fields and make some trasactions on the
                  Blockchain.
                </p>

                {!currentAccount && (
                  <button
                    onClick={connectWallet}
                    className="flex flex-row justify-center items-center my-5 bg-[#bc715b] p-3 rounded cursor-pointer hover:bg-[#2546bd]"
                  >
                    <p className="text-white text-base font-semibold">
                      Connect Wallet
                    </p>
                  </button>
                )}
                <h1 className="text-xl sm:text-md text-white py-1 md:mx-0 mx-auto font-bold">
                  View Conversion
                </h1>
                <CurrencyConverter />
              </div>

              <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism md:mt-0 mt-4">
                <Input
                  placeholder="Address To"
                  name="addressTo"
                  type="text"
                  handleChange={handleChange}
                />
                <Input
                  placeholder="Amount (ETH)"
                  name="amount"
                  type="number"
                  handleChange={handleChange}
                />
                <Input
                  placeholder="Keyword (Gif)"
                  name="keyword"
                  type="text"
                  handleChange={handleChange}
                />
                <Input
                  placeholder="Enter Message"
                  name="message"
                  type="text"
                  handleChange={handleChange}
                />

                <div className="h-[1px] w-full bg-gray-400 my-2" />

                {false ? (
                  <Loader />
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                  >
                    Send now
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
