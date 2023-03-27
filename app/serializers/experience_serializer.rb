class ExperienceSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :start_year, :ending_year, :company
end
