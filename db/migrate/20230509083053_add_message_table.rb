# frozen_string_literal: true

class AddMessageTable < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.timestamps
      t.string :name
      t.string :text
    end
  end
end
