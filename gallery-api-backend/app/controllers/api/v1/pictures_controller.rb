class Api::V1::PicturesController < ApplicationController
    def index 
        # sort by likes 
        @pictures = Picture.includes('comments').all
        # byebug

        render json: @pictures, include: :comments
    end

    def new 
        @pictures = Pictures.new 
    end 

    def create
        @pictures = Picture.create!(picture_params)

        render json:@picture
    end
    
    def update 
        # byebug
        @picture = Picture.find(params[:id])
        @picture.update!(picture_params)
        render json: @picture
    end 

    def destroy
        @picture = Picture.find(params[:id])
        @picture.destroy!
        render json: {}
      end

    private

    def picture_params
        params.require(:picture).permit(:title, :imageUrl, :like, :favorite)
    end 
end
