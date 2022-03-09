class Api::PlaylistsController < ApplicationController

    def index
        # debugger
        @playlists = Playlist.where(user_id: current_user.id)
        render :index
    end

    def create
        @playlist = Playlist.new(params)
        if @playlist.save
            render '/api/playlists/show'
        else
            render json: @playlist.errors.full_messages, status: 422
        end
    end

    
    

    private
    def params
        # debugger
        params.require(:playlist).permit(:user_id, :playlist_name)
    end
end

