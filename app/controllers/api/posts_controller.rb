class Api::PostsController < ApplicationController
  
    def index
        # currently pulling up the last updated posts, may work the same if i don't reverse the order of my posts seed generation and order by created at, sounds like
        # what I was doing before though, while this loads the posts in the right order, if someone edits a post it will end up at the top of the 
        # feed again
        @posts = Post.includes(:user, :comments).order(:updated_at).reverse_order#.first(10) # get the first ten posts on first load
        render :index
    end

    def show
        # puts "#{params}"
        puts "#{@post}"
        puts "========================="
        @post ||= Post.includes(:user,:comments).find(params[:id])
        # puts "GETTING PARAM ID IN SHOW"
        # create failure conditional, if there is a 500 level server error, i.e. someone 
        # guesses a url they will conditionally channeled certain ways, if not logged in but guessing
        # they will be prompted to sign up or log in the demoUser to post, if they
        # are logged in but there is no post at that id, tell them such and that they can create 
        # a post at this id
        render :show
    end

    def create
        @post = Post.new(post_params)
        if @post.save
            render action: "show", id: "#{@post.id}"
        else
            render json: @post.errors.full_messages, status: 424
        end
    end

    private
    
    def post_params
        params.require(:post).permit(:caption, :created_at, :updated_at, :author_id, :photo)
    end
end
