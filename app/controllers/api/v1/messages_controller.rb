# frozen_string_literal: true

module Api
  module V1
    class MessagesController < ApplicationController
      def index
        @items = Message.all
        render json: @items
      end
    end
  end
end
