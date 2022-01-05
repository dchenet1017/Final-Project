import React from 'react'
import { Rating } from '@mui/material'

function Reviews({ reviews }) {

    if (reviews === undefined || reviews.length === 0) return <p>No comments </p>

    else if (reviews.length === 1) {

        return (
            <div>
                <h2>Name: {reviews[0].name}</h2>
                <p>{reviews[0].comment}</p>
                <Rating name="read-only" value={reviews[0].rating}  id="review_rating" readOnly />
            </div>
        )
    }
    else {
        return (
            reviews.map((review) => {
                console.log(review.comment)
                return (
                    <div key={Reviews.id}>

                        <h2 key={Reviews.id} >{review.name}</h2>
                        <Rating key={Reviews.id} name="read-only" value={review.rating} readOnly />
                        {review.comment == null ? null : <p> {review.comment}</p>}
                        <br />
                        <br />
                    </div>
                )
            }
        ))

    }

}

export default Reviews
