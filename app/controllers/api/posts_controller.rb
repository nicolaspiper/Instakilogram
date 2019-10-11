class Api::PostsController < ApplicationController
  
    def index
        @posts = Post.all
        render :index
    end

    def show
        @post = Post.find(params[:id])
        render :show
    end

    def create
        @post = Post.new()

    end

    private
    
    def post_params
        params.require(:post).permit(:caption)
    end
end
