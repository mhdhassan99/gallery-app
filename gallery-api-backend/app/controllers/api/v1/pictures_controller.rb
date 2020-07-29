class Api::V1::PicturesController < ApplicationController
    def index 
        # sort by likes 
        @pictures = Picture.includes('comments').all
        # byebug

        render json: @pictures, include: :comments
    end
    
    def update 
        # byebug
        @picture = Picture.find(params[:id])
        @picture.update(picture_params)
        render json: @picture
    end 

    def picture_params
        params.require(:picture).permit(:title, :imageUrl, :like, :favorite)
    end 
end
