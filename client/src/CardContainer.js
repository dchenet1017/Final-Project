import React from 'react'
import NftCard from './NftCard'

function CardContainer({ handleDeleteNft, nftData, user, setDOMUpdater}) {

//// Stops this function from running if carData is not correct.     
if (nftData.length === undefined || nftData.length <= 1) return <p> Loading Please Wait</p>
console.log(nftData)


        return (
        <div>
           <div>{nftData.map((nft) => {
               return (
                   <NftCard setDOMUpdater={setDOMUpdater}  user={user} nft={nft} onDeleteNft={handleDeleteNft}/>
               )
           })}
           </div>
        </div>
    )
}


export default CardContainer



