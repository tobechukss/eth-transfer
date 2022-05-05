
const ListImg = (props) => {
    return (
        <div className="img  border-brand-orange w-72 h-96 px-1 py-1 mx-2 my-2">
    <div className="w-full h-72 overflow-hidden">
    <img src={props.imeg} className="w-full rounded-3xl" alt="picmage"/>
    </div>
    <div className="w-100 flex text-xs text-white justify-between mt-3">
        <p>Name of NFT</p>
        <p>View in Opensea:</p>
    </div>
    <div className="w-100 text-xs text-white flex justify-between mt-2">
        <h1 className="text-xl">{props.named}</h1>
    <a href={props.lnk} target="_blank" rel="noopener noreferrer"><button className="bg-[#bc715b] flex justify-center py-1 px-2 rounded-md cursor-pointer hover:bg-[#2546bd]">
          Place bid
        </button></a>
    </div>
    
</div>
    )
}

export default ListImg
