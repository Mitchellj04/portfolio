class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.integer :age
      t.string :resume
      t.string :expertice
      t.string :github_link
      t.string :linkedin
      t.string :email
      t.string :phone
      t.timestamps
    end
  end
end
