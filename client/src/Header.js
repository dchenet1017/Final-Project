import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from "./Modal"
import { Link } from "react-router-dom";
import { Avatar } from '@mui/material';




function TopNav({changeHanldler, submitHandler, loginDetails, user, handleLogout }) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(true)
    }

   

    return (
        <div >
            
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" id="nav-container">
                    <Toolbar>
                        <Typography variant="h  6" component="div" sx={{ flexGrow: 1 }}>
                        <img id="logo" src= "/carmedialogo.jpeg"/>
                        </Typography>
                        <Link className="nav-link" to="/"><Button color="inherit">Home</Button></Link>
                        <Link className="nav-link" to="/nfts"><Button color="inherit">NFT</Button></Link>
                        <Link className="nav-link" to="/nft-form"><Button color="inherit">Add NFT</Button></Link>
                        <Link className="nav-link" to="about"><Button color="inherit">About</Button></Link>
                        <Link className="nav-link" to="signup"><Button color="inherit">Signup</Button></Link>
                        {user.name ? <Button color="inherit" onClick={handleLogout} >Welcome <br /> {user.name} <Avatar src="https://variety.com/wp-content/uploads/2015/07/naruto_movie-lionsgate.jpg?w=681&h=383&crop=1" /></Button> : <Button onClick={toggleModal} color="inherit">Login</Button>}


                    </Toolbar>
                </AppBar>
            </Box>
            {isModalOpen && <Modal changeHanldler={changeHanldler} submitHandler={submitHandler} loginDetails={loginDetails} setIsModalOpen={setIsModalOpen} />}
            

        </div>
    )
}

export default TopNav
