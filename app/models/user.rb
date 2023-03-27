class User < ApplicationRecord
    has_many :projects 
    has_many :educations
    has_many :experiences
end
