## Getting Started

In the root directory of the project...

1. Install node modules `npm run init`.
2. Start development server `npm start`.

## File Structure

The back-end is based on [Express Generator](https://expressjs.com/en/starter/generator.html).
The front-end is based on [Angular cli "ng"](https://angular.io/cli).

The front-end is served on http://localhost:3000/ and the back-end on http://localhost:3001/.

```
.
├── server/ - Express server that provides API routes and serves front-end
│ └── server.js - Configures Port and HTTP Server
│ ├── app.js - Adds middleware to the express server
│ ├── constants.js - Defines the constants for the endpoints and port
│ ├── routes/ - Handles API calls for routes
│ ├── controllers/ - Handles logic for APIs
│ ├── models/ - Schema for models
│ ├── middlewares/ - Middle functions
│ ├── validations/ - Validation for inputs
├── src - Angular front-end
│ └── app - Angular main root module
│    └── app.module.ts - Angular root module
│    ├── pages - Angular main modules
│    ├── auth - Angular route guards
│    ├── shared - Angular shared components, services, and constants
└── README.md
```

## Additional Documentation

- Angular Docs - https://angular.io/docs
- Express - https://expressjs.com/

This project was created using [Microsoft Web Template Studio](https://github.com/Microsoft/WebTemplateStudio).
