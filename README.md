# Simple Server

## Description
A lightweight and secure Node.js server built with Express.js, designed for testing RESTful APIs and handling HTTP requests efficiently.

## Features
- **Express.js Framework**: Simplifies server creation and routing.
- **Endpoints**: Includes health check, current time, sample JSON data, and echo functionality.
- **Customizable**: Easily extendable for additional features.

## Quick Start
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```
3. Access the server at:
   ```
   http://localhost:3000
   ```

## API Endpoints
| Endpoint    | Method   | Description                |
|-------------|----------|----------------------------|
| `/health`   | GET      | Check server health        |
| `/time`     | GET      | Get current timestamp      |
| `/json`     | GET      | Sample JSON data           |
| `/echo`     | GET/POST | Echo request data          |

## Technologies Used

### Node.js
A JavaScript runtime for building scalable server-side applications.

### npm
The default package manager for Node.js, used to manage project dependencies.

### Express.js
A minimal Node.js framework for building web and API servers with features like routing and middleware support.

## Project Structure
```
Simple_Server/
├── server.js           # Main server file
├── package.json        # Dependencies and scripts
├── README.md           # Documentation
├── docs.html           # Additional documentation
└── node_modules/       # Installed dependencies
```
