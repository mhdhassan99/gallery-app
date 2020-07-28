class Api::V1::PicturesController < ApplicationController
    def index 
        @pictures = Picture.all
        render json: @pictures
    end
    
    def update 
        @picture = Picture.find(params[:id])
        @picture.update(picture_params)
        render json: @picture
    end 

    def picture_params
        params.require(:picture).permit(:title, :imageUrl, :likes, :favorite)
    end 
end
