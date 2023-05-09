class Api::V1::MessagesController < ApplicationController
  def index
    @items = Message.all
    render json: @items
  end

end
