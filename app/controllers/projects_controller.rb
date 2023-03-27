class ProjectsController < ApplicationController

    def index 
        project = Project.all
        render json: project, status: 200
    end
end
