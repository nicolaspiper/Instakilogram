class Api::PostsController < ApplicationController
  
    def index
        @posts = Post.includes(:user, :comments).order(:created_at).first(10) # get the first ten posts on first load
        render :index
    end

    def show
        @post = Post.includes(:user,:comments).find(params[:id])
        # create failure conditional, if there is a 500 level server error, i.e. someone 
        # guesses a url they will conditionally channeled certain ways, if not logged in but guessing
        # they will be prompted to sign up or log in the demoUser to post, if they
        # are logged in but there is no post at that id, tell them such and that they can create 
        # a post at this id
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
