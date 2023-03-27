class EducationSerializer < ActiveModel::Serializer
  attributes :id, :name, :degree, :start_year, :graduate_year, :gpa
end
