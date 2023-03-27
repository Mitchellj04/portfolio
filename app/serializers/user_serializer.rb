class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :resume, :expertice, :github_link, :linkedin
  has_many :educations 
  has_many :experiences
end
