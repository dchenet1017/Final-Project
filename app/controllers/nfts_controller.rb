class NftsController < ApplicationController

    def index 
        render json: Nft.all, include: [:rarity_rank, :rarity_score, :price, :photo, :owner, :properties1, :properties2, :properties3 ]
    end

    def show 
        nft = Nft.find_by(id: params[:id])
        # render json: nft , only: [:rarity_rank, :rarity_score, :price, :photo, :owner, :properties1, :properties2, :properties3 ]
            if nft  
                render json: nft
            else 
                render json: {error: "NFT ont found"}
            end 
     end

     def create 
            nft = Nft.create(nft_params)
            if nft.valid?
                render json: nft, status: 201
            else
                render json: {errors: nft.errors.full_messages}, status: 404
            end
        end

            def destroy 
                nft = Nft.find_by(id: params[:id])
                if nft 
                    nft.destroy
                    render head :no_content
                else
                    render json: {error: "Nft not found"}, status: 404
                end
            end
     end

     private

     def nft_params 
        params.permit(:formData, :user_id, :rarity_rank, :rarity_score, :price, :photo, :owner, :properties1, :properties2, :properties3, :name)
     end

