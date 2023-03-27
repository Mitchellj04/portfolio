class CreateExperiences < ActiveRecord::Migration[7.0]
  def change
    create_table :experiences do |t|
      t.string :company
      t.string :title
      t.string :description
      t.integer :start_year
      t.integer :ending_year
      t.integer :user_id
      t.timestamps
    end
  end
end
