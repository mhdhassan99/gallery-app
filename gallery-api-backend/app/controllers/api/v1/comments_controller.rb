class Api::V1::CommentsController < ApplicationController

    def create 
        @comment = Comment.new(comment_params);
        if (@comment.save) 
            render json: @comment
        else 
            render json: @comment.errors.full_messages
        end 
    end

    def destroy 
        @comment = Comment.find_by(id: params[:id])

        if @comment.destroy 
            render json: 'success'
        else 
            render json: @comment.errors.full_messages
        end
    end

    def comment_params
        params.require(:comment).permit(:body, :picture_id)
    end 

end
