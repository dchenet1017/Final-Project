class ReviewsController < ApplicationController

    def index 
        render json: Nft.all, include: [:user_id, :comment, :rating]
    end

    def show 
        review = Review.find_by(id: params[:id])
        if  
            render json: review
        else 
            render json: {error: "Review not found"}
        end 

    def create 
        review= Review.create(review_params)
         if review.valid?
           render json: review, status: 201
        else
            render json: {errors: review.errors.full_messages}, status: 404
        end
    end
    def destroy 
        review = Review.find_by(id: params[:id])
        if review
            review.destroy
            render head :no_content 
        else
            render json : {error: "review not found"}, status: 422
        end
end

private
def review_params 
    params.permit(:user_id, :comment, :rating)
end
