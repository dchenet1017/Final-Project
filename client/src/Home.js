import React from 'react'
import { useNavigate } from "react-router-dom"






function Home() {

    let navigate = useNavigate()

    const handleOnClick = () => {
    navigate("/login");
    }

    return (
        <div>
            <h1 id="home-title">Welcome <br /><p id="home-to">To <br /><h2 id="home-h2">NFT HUNT</h2></p></h1>
            <h2 id="please-login"><button onClick ={handleOnClick}>Please login</button></h2>
            
        </div>
    )
}

export default Home
