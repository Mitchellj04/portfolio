class CreateEducations < ActiveRecord::Migration[7.0]
  def change
    create_table :educations do |t|
      t.string :name
      t.string :degree
      t.integer :start_year
      t.integer :graduate_year
      t.float :gpa
      t.integer :user_id
      t.timestamps
    end
  end
end
