class Api::PlaylistsController < ApplicationController

    def index
        @playlists = Playlist.where(user_id: current_user.id)
        render :index
    end

    def create
        @playlist = Playlist.new(playlist_params)
        if @playlist.save
            render '/api/playlists/show'
        else
            render json: @playlist.errors.full_messages, status: 422
        end
    end

    def update
        @playlist = Playlist.find(params[:id])
        @playlist.playlist_name = params[:playlist][:playlist_name]
        if @playlist.save
            render '/api/playlists/show'
        else
          render json: @playlist.errors.full_messages, status: 422
        end
      end


    def destroy
        @playlist = Playlist.find(params[:id])
        if @playlist
            render json: @playlist.id
            @playlist.destroy
        else
          render json: ["Playlist does not exist"]
        end
    end
    
    

    private
    def playlist_params
        # debugger
        params.require(:playlist).permit(:user_id, :playlist_name)
    end
end

