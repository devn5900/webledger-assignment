# How to setup application locally 

    1. Clone the repositry
    
## For frontend
    1. Go inside the frontend folder 
    2. Run "npm i" command (To download neccessory packages)
    3. Then, run "npm start / npm run start" command to run the frontend application.

## For backend
    1. Go inside the backend folder 
    2. Run "npm i" command (To download neccessory packages)
    3. Then, run "npm run server" command to run the backend application.

# Node 16.16.0

# Backend Documentation

  ## Base URL http://localhost:8080

  ## Login

    /api/user/login  -> GET 

    For login route when you hit this. it will redirect you to Google OAuth Page.

    When you are authenticated by Google. You will be redirected to the
    
    http://localhost:3000/login/success

    with query data :-

    token  --> save the token for accessing protected routes
    data   --> save loggedin user details such as name,email, image to display on the frontend

  ## Recipes

    /api/recipes   -> GET 
    It will return Recipes data.

    /api/recipes/:recipeId   -> GET 
    Use a recipe id to get full information about a recipe, such as ingredients, nutrition, diet and allergen information.

## Favorites

    Note:- Authentication token is required to access the All Favorites Route

    You have to send the authentication token in the header

    /api/favorites -->  GET
    It will return Favorites data based on user authencation token


    /api/favorites/:favId  --> POST
    To add the recipes to the Favorite


    /api/favorites/:favId  -> DELETE
    To remove the recipe from the Favorites