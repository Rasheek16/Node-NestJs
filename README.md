# Movie Database Project with Nest.js

## Introduction

This is a Movie Database project built using Nest.js, a powerful and extensible Node.js framework written in TypeScript. Nest.js follows the modular development approach inspired by Angular, making it easy to build scalable and maintainable server-side applications.

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Rasheek16/Node-NestJs.git
   cd Node-NestJs
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Set up Database Configuration:**

   Open `app.module.ts` and configure your SQL database connection.

   ```typescript
   // app.module.ts

   @Module({
     imports: [
       TypeOrmModule.forRoot({
         type: 'mysql',
         host: 'localhost',
         port: 3306,
         username: 'your_username',
         password: 'your_password',
         database: 'movie_db',
         entities: [Movie],
         synchronize: true,
       }),
       // Other modules...
     ],
     controllers: [MoviesController],
     providers: [MoviesService],
   })
   ```

4. **Run the Application:**

   ```bash
   npm run start
   ```

   Your application will be running on `http://localhost:3000`.

## API Routes

- **GET /movies:** Get a list of all movies.

  ```http
  GET http://localhost:3000/movies
  ```

- **GET /movies/:id:** Get details of a specific movie by its ID.

  ```http
  GET http://localhost:3000/movies/1
  ```

- **GET /api:** View API documentation.

  ```http
  GET http://localhost:3000/api
  ```

## Nest.js Overview

Nest.js is a framework for building scalable and efficient server-side applications. Key features include:

- **Modularity:** Nest.js follows a modular structure inspired by Angular, making it easy to organize your code into modules, controllers, and services.

- **Dependency Injection:** Utilizes a robust dependency injection system for building loosely-coupled, maintainable components.

- **Express Integration:** Built on top of Express.js, Nest.js seamlessly integrates with the Express framework, allowing developers to leverage its features.

- **TypeScript Support:** Nest.js is written in TypeScript, providing strong typing and enhanced tooling for better code quality and developer experience.

- **Decorators:** Makes use of decorators for defining routes, middleware, and other aspects, improving code readability and organization.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests. Your feedback and contributions are highly appreciated!

