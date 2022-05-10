import axios from "axios";
import { useState } from "react";

const CurrencyConverter = () => {
  const currencies = ["ETH", "USD", "BTC",  "NGN"];
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState("USD");
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState("NGN");
  const [amount, setAmount] = useState(1);

  const [result, setResult] = useState(0);

 
  
  const convert = () => {


const options = {
  method: 'GET',
  url: 'https://currency-converter18.p.rapidapi.com/api/v1/convert',
  params: {from: chosenPrimaryCurrency, to: chosenSecondaryCurrency, amount: amount},
  headers: {
    'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com',
    'X-RapidAPI-Key': 'fcfa679e87msh1506dd469845678p19aa1cjsncce2e30df1ff'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
  setResult(response.data.result.convertedAmount)
}).catch(function (error) {
	console.error(error);
});
 
  }

  return (
    <div className="artwork md:mx-0 mx-auto">
     

            <div className="border-2 border-brand-orange sm:w-96 w-72 flex justify-start sm:px-5 px-1 py-5 rounded-xl">
              <form className="mx-auto ">
                <div className="flex justify-start ">
                  <label className="text-white sm:w-16 w-12">From:</label>
                  <input
                    type="text"
                    className="py-1 px-2 rounded sm:w-full w-40"
                    name="currency-amount-1"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  <select
                    value={chosenPrimaryCurrency}
                    name="currency-option-1"
                    className="ml-2 bg-indigo-500 rounded text-white"
                    onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                  >
                    {currencies.map((currency, _index) => (
                      <option key={_index}>{currency}</option>
                    ))}
                  </select>
                </div>
                <div className="flex justify-center items-center mt-5">
                  <label className="text-white sm:w-16 w-12">To:</label>
                  <input className="py-1 px-2 rounded sm:w-full w-40" value={result} disabled={true} />
                  <select
                    value={chosenSecondaryCurrency}
                    name="currency-option-2"
                    className="ml-2 bg-indigo-500 rounded text-white"
                    onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                  >
                    {currencies.map((currency, _index) => (
                      <option key={_index}>{currency}</option>
                    ))}
                  </select>
                </div>
                <div className="w-full flex justify-center mt-5">
                <button type="button" className="bg-violet-700 text-white w-36 px-2 py-2 rounded" onClick={convert}>Convert</button>
                </div>
               
              </form>

             <div>
            
             </div>
            </div>
            
          </div>

  );
};

export default CurrencyConverter;
