
import React, { useState } from 'react'
import Reviews from './Reviews'
import { Rating } from '@mui/material'
import { Link } from 'react-router-dom'
import ReviewAdder from './ReviewAdder'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FavoriteIcon from '@mui/icons-material/Favorite';


function FullNFT({ updateNft, nft, user, setDOMUpdater }) {
    console.log(nft)
    const [UpdateRequested, setUpdateRequested] = useState(false)
    const [nftUpdateObject, setcarUpdateObject] = useState({
    })

    function updateChangeHandler(e) {
        setcarUpdateObject(data => data = { ...data, [e.target.name]: e.target.value })
        console.log(nftUpdateObject)
    }

    function updateSubmitHandler(e) {
        e.preventDefault()

        if (nftUpdateObject.model === undefined) { nftUpdateObject.model = nft.model }
        if (nftUpdateObject.model === "") { nftUpdateObject.model = nft.model }
        if (nftUpdateObject.description === undefined) { nftUpdateObject.description = nft.description }
        if (nftUpdateObject.description === "") { nftUpdateObject.model = nft.model }
        if (nftUpdateObject.year === undefined) { nftUpdateObject.year = nft.year }
        if (nftUpdateObject.year === "") { nftUpdateObject.model = nft.model }
        if (nftUpdateObject.photo === undefined) { nftUpdateObject.photo = nft.photo }
        if (nftUpdateObject.photo === "") { nftUpdateObject.model = nft.model }

        fetch(`${nft.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                description: nftUpdateObject.description,
                year: nftUpdateObject.year,
                model: nftUpdateObject.model,
                photo: nftUpdateObject.photo
            }),
        }).then(setUpdateRequested(!UpdateRequested))
            .then(setDOMUpdater(Math.random()));
    }


    const handleLikeClick = (e) => {
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: user.id,
                favorite: !nft.favorite
            })
        };
        fetch(`/nft/${nft.id}`, options)
            .then(resp => resp.json())
            .then(data => {
                if (data.success) {
                    updateNft(data.data);
                } else {
                    console.log(data);
                }
                (setDOMUpdater(Math.random()))

            });
    }


    // this is the component for rending a single car, here we can add reviews when we 
    if (nft === undefined || nft.length === 0) return <p>No comments </p>
    else if (nft.length >= 1) {
        return (<p>one</p>)
    }
    else {
        console.log(nft)
        return (
            <>
                <div id="side-nav">

                    <h3 id="favorite">Favorite NFT</h3>
                    <hr id="hr-line" />
                    {nft.favorite_nft.map((nft) => <p id="nav-nft-model">{nft.model} <br /> <img id="nav-pic" src={nft.photo} alt="" /></p>)}
                </div>

                <div id="more-card" >
                    {<FavoriteIcon onClick={handleLikeClick} id={nft.favorite ? "like-color" : null} />}
                    

                    {UpdateRequested ? <> <br /> <label>NFT model: </label>   <input value={nftUpdateObject.model} onChange={updateChangeHandler} placeholder={nft.model} name='model'  ></input> </> : <h2 className="more-nft-model">{nft.model}</h2>}
                    <Link to={"/nft-pics"}><img src={nft.photo} alt="" className="more-nft-pic" /></Link>
                    <Rating name="read-only" value={nft.average_score} readOnly />
                    <br />
                    <p>Number of reviews: {nft.total_reviews}</p>
                    {UpdateRequested ? <> <br /> <label>NFT photo url: </label>   <input value={nftUpdateObject.photo} onChange={updateChangeHandler} placeholder={nft.photo} name='photo'  ></input> </> : null}
                    {UpdateRequested ? <> <br /> <label>{nft.owned_by.name}'s  </label>   <input value={nftUpdateObject.model} onChange={updateChangeHandler} placeholder={nft.model} name='model'  ></input> </> : <p>{nft.owned_by.name}'s   {nft.model}</p>}
                    {UpdateRequested ? <> <br /> <label>NFT year: </label>   <input value={nftUpdateObject.year} onChange={updateChangeHandler} placeholder={nft.year} name='year'  ></input> </> : <p>Year: {nft.year}</p>}
                    {UpdateRequested ? <> <br /> <label>nft description: </label>   <textarea value={nftUpdateObject.description} onChange={updateChangeHandler} placeholder={nft.description} name='description'  ></textarea> </> : <p>Description: {nft.description}</p>}
                    {nft.owned_by.id === user.id ? UpdateRequested ? <button onClick={updateSubmitHandler} >Update</button> : <button type="button" onClick={() => setUpdateRequested(!UpdateRequested)} >Would You like to update?</button> : null}
                    <Link to={"/nfts"}><ArrowBackIcon onClick={() => setDOMUpdater(Math.random())} id="more-btn" /></Link>
                    <ReviewAdder setDOMUpdater={setDOMUpdater} nft={nft} user={user} />

                </div>
                <div className="review_container">
                    {<Reviews reviews={nft.reviews} />}

                </div>

            </>


        )
    }
}

export default FullNFT



















