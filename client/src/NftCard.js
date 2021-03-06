import { useState } from 'react'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import DeleteIcon from '@mui/icons-material/Delete';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

function NftCard({  setDOMUpdater, nft, user, onDeleteNft }) {
  const [counter, setcounter] = useState(0)
  const [like, setlike] = useState(false)

  function ratingAddHandler(e) {
    if (counter == 0) { setcounter(1) }
    else {
      fetch(`/reviews/`, {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify({
          Nft_id: nft.id,
          user_id: user.id,
          rating: e.target.value
        }),
      }).then((r) => {
        if (r.ok) {
          r.json()
            .then(setDOMUpdater(Math.random()))
            .then(alert("thank you "))
            .then(setcounter(0))
        }
      });
    }
  }

  function handleDeleteNft() {
    fetch(`/nfts/${nft.id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        onDeleteNft(nft);
      }
    });
  }
console.log(nft)
  return (
    <div className="nft-card">
      <p id="nft-model">{nft.name}</p>
      <p id="nft-year">{nft.price}</p>
      <img src={nft.photo} alt="" className="nft-pic" />
      {/* {nft.owned_by.id === user.id ? <p>Your nft</p> : <p>Owner: {nft.owned_by.name}</p>} */}
      <p>{nft.properties1}</p>
      <p>{nft.properties2}</p>
      <p>{nft.properties3}</p>
      <p>Number of reviews: {nft.total_reviews}</p>
      {/* <Rating id="star-rating" name="half-rating" defaultValue={nft.average_score} onClick={ratingAddHandler} precision={0.5}> 
      </Rating>*/}
      {/* {nft.owned_by.id === user.id? <DeleteIcon id="delete-btn" onClick={handleDeleteNft} />: null} */}
      <Link  to={"/nfts/" + nft.id}><ReadMoreIcon onClick={() => setDOMUpdater(Math.random())} id="more-btn" /></Link>
    </div>
  )
}

export default NftCard


















