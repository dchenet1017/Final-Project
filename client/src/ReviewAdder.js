
import React, { useState } from 'react'
import { Rating, Button } from '@mui/material'

function ReviewAdder({ user, nft, setDOMUpdater }) {

    const [updaterequested, setupdaterequested] = useState(true) ////// used for a turnery for updating comments 
    // general comment data for updating and making new comments/reviews 
    const [commentData, setcommentData] = useState({
        comment: "",
        rating: ""
    })


    function commentUpdateSubmitHandler(e) {
        e.preventDefault(e)
        let corrrectReview = user.reviews.find(review => review.nft_id === nft.id) ///// Used to get correct review.id 
        delete commentData.undefined  /// Sometimes an error adds an extra key called undefiened in the comment data object.... this happens when you press the start ratring,. 
        commentData.user_id = user.id 
        commentData.car_id = nft.id
        fetch(`/reviews/${corrrectReview.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: commentData.user_id,
                car_id: commentData.car_id,
                comment: commentData.comment,
                rating: commentData.rating
            })
        })
            .then((r) => r.json())
            
            .then(setupdaterequested(!updaterequested))  ////// returns the state to the previous version 
            .then(setDOMUpdater(Math.random()))
         
    }

    function newCommentSubmitHandler(e) {
        e.preventDefault(e)
        delete commentData.undefined
        commentData.user_id = user.id
        commentData.nft_id = nft.id
        fetch(`/reviews/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: commentData.user_id,
                nft_id: commentData.nft_id,
                comment: commentData.comment,
                rating: commentData.rating
            })
        })
            .then((r) => r.json())
            .then(setupdaterequested(!updaterequested))
            .then(setDOMUpdater(Math.random()));
    }

/// this handles the changes for both updating ana making a new comment. 
    function commentUpdateChangeHandler(e) {
        setcommentData(data => data = { ...data, [e.target.name]: e.target.value })
    }



    if (!user) return <p></p> ///// Error handling 
    else if (user.error) return (< p > Please sign up to leave a review!</p >)   // Handles if a user is nor signed in 
    else if (!nft) return <p></p> ///// Error handling 
    else if (user.all_reviewed_ids.includes(nft.id)) {   // Handles if a user has left a review 
        return (

            <div>
                <br />
                {updaterequested ? <button onClick={() => setupdaterequested(!updaterequested)} > Would you like to update  your review </button> : null}
                {updaterequested ? null :
                    <form>
                        <h2>Update  review</h2>
                        <label></label>
                        <textarea name="comment" onChange={commentUpdateChangeHandler} value={commentData.comment}  ></textarea>
                        <div> <Rating style={{ "margin-left": "opx" }} id="star-rating" name="rating" value={parseInt(commentData.rating)} onClick={commentUpdateChangeHandler} precision={0.5} /> </div>
                        <button onClick={e => commentUpdateSubmitHandler(e)} > update</button>
                    </form>}
                <br />
            </div>
        )
    }
    else {   // Handles if a user has not left a review 
        return (
            <div>
                <br />
                <form onSubmit={e => newCommentSubmitHandler(e)} >
                    <h2>New comment</h2>
                    <label></label>
                    <textarea name="comment" onChange={commentUpdateChangeHandler} value={commentData.comment} ></textarea>
                    <br />
                    <Rating style={{ "textAlign": "center" }} id="star-rating" name="rating" value={parseInt(commentData.rating)} onClick={commentUpdateChangeHandler} defaultValue={0} precision={0.5} />
                    <br />
                    <Button> Add Comment</Button>
                </form >
                <br />
            </div>
        )
    }
}

export default ReviewAdder
