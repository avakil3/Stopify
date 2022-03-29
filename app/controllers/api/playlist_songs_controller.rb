class Api::PlaylistSongsController < ApplicationController

    def create
        @playlist_song = PlaylistSong.new(playlist_song_params)
        @song = Song.find(params[:song_id])
        if @playlist_song.save
            render '/api/songs/show'
        else
            render json: @playlist_song.errors.full_messages, status: 422
        end
    end

    def destroy
        @playlist_song = PlaylistSong.find_by(song_id: params[:song_id], playlist_id: params[:playlist_id])
        if @playlist_song
          @playlist_song.destroy
        else
          render json: ["Playlist doesn't exist"]
        end
      end


    private
    def playlist_song_params
        # debugger
        params.permit(:playlist_id, :song_id)
    end

end