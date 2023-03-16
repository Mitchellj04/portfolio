class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :resume, :expertice
end
