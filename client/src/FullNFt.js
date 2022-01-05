
import React, { useState, useEffect } from 'react'
import Reviews from './Reviews'
import { Rating } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import ReviewAdder from './ReviewAdder'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FavoriteIcon from '@mui/icons-material/Favorite';


function FullNFT({ updateNft, user, setDOMUpdater }) {
    let location =useLocation()
    const [UpdateRequested, setUpdateRequested] = useState(false)
    const [nftUpdateObject, setcarUpdateObject] = useState({
    })

    const [nft, setNft] = useState ()

    useEffect(() => {
        fetch(`${location.pathname}`)
            .then((r) => r.json())
            .then((data) => setNft(data))
    }, [location.pathname]);




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
                </div>

                <div id="more-card" >
                    

                    {UpdateRequested ? <> <br /> <label>NFT model: </label>   <input value={nft.model} onChange={updateChangeHandler} placeholder={nft.model} name='model'  ></input> </> : <h2 className="more-nft-model">{nft.model}</h2>}
                    <Link to={"/nft-pics"}><img src={nft.photo} alt="" className="more-nft-pic" /></Link>
                    <Rating value={nft.average_score} />
                    <br />
                    <p>Number of reviews: {nft.total_reviews}</p>
                    <p>Name: {nft.name}</p>
                    <p>Owner :{nft.owner}</p>
                    <p> Ξ {nft.price} Ethereum</p>
                    <p>Properites: {nft.properties1}</p>
                    <p>Properties: {nft.properties2}</p>
                    <p>Properties: {nft.properties3}</p>
                    <p>Rarity Rank: {nft.rarity_rank}</p>
                    <p>Rarity Score: {nft.rarity_score}</p>



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



















