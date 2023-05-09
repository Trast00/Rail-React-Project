module Api
  module V1
    class MessagesController < ApplicationController
      def index
        @items = Message.all
        @item = @items.sample
        render json: @item
      end
    end
  end
end
