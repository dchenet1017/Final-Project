class UsersController < ApplicationController
    skip_before_action :authenticate_user, only: [:create, :show]

        # user = User.find_by(id: params[:id])
        #     if current_user 
        #         render json: current_user, status: :ok
        #     else 
        #         render json: "Not authenticated", status: :unauthorized 
        #     end 
        # end

    def create 
         user = User.create(user_params)
            if user.valid?
                session[:user_id] = user.id  
            
                render json: user, status: 201
            else
                render json: {errors: user.errors.full_messages}, status: :unprocessable_entity 
         end
    end

    def destroy 
        user = User.find_by(id: params[:id])
        if user 
            user.destroy
            render head :no_content 
        else
            render json: {error: "User not found"}, status: 404
        end

    end

private
def user_params
    params.permit(:name, :email, :password, :password_confirmation)
end
end