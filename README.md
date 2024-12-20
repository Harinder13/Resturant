��#   R e s t u r a n t 
 
 

Features:
- User authentication (register, login, and password reset)
- CRUD operations for restaurants
- Middleware for authentication and authorization
- Token-based authentication using JWT
- Error handling and validation

Technologies Used:
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- Bcrypt.js (for password hashing)
- Nodemon (for development)

Folder Structure:
- /controllers          # Contains controller logic for each route
  - userController.js
  - restaurantController.js
- /middleware           # Contains middleware logic
  - authMiddleware.js
- /models               # MongoDB schemas for database
  - userModel.js
  - restaurantModel.js
- /routes               # Route definitions for APIs
  - userRoutes.js
  - restaurantRoutes.js
- server.js             # Main server file

API Endpoints:
# User Routes
- POST /auth/register: Register a new user
- POST /auth/login: Login user
- POST /auth/reset-password: Reset user password

# Restaurant Routes
- POST /restaurant/create: Create a restaurant
- GET /restaurant: Get all restaurants
- PUT /restaurant/update/:id: Update a restaurant by ID
- DELETE /restaurant/delete/:id: Delete a restaurant by ID

GitHub Repository:
The project is hosted on GitHub. You can access it here:
(https://github.com/Harinder13/Resturant.git)




