class Api::PostsController < ApplicationController
  
    def index
        @posts = Post.includes(:user).order(:created_at).first(10) # get the first ten posts on first load
        @posts.each do |post|
            puts "=================================="
            puts post.user.photo
            puts "=================================="
        end
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
