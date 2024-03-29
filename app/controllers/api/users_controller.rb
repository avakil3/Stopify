class Api::UsersController < ApplicationController
    
    def index
      @users = User.all
    end
    
    def create
      @user = User.new(user_params)
  
      if @user.save
        login(@user)
        render "api/users/show"
        @liked_songs_playlist = Playlist.new({playlist_name:'Liked Songs', user_id: @user.id})
        @liked_songs_playlist.save
      else
        render json: @user.errors.full_messages, status: 422
      end
    end
  
    private
  
    def user_params
      params.require(:user).permit(:username, :email, :password)
    end
  end
  