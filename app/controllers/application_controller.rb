class ApplicationController < ActionController::API
    include ActionController::Cookies

    def index 
        render file: "public/index.html"
       end 
end
