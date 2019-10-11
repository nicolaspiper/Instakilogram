class PostsController < ApplicationController
  def show
    @post = Post.find(params[:id])
    render :show
  end

  def create
    @post = Post.new()
    
  end
end
