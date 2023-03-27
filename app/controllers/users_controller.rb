class UsersController < ApplicationController

    def index 
        user = User.all
        render json: user, status: 200
    end

    def show 
        user = user_find
        render json: user, status: 200
    end

    private 

    def user_find 
        User.find(params[:id])
    end

end
