class CreatePictures < ActiveRecord::Migration[6.0]
  def change
    create_table :pictures do |t|
      t.string :title
      t.integer :like
      t.string :imageUrl

      t.timestamps
    end
  end
end
