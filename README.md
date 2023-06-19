# Chatzr

A lightweight online chat application featuring direct login with just a username or seamless authentication using Auth0.

## Technologies

- **ChatEngine.io**: Used as the real-time chat engine, providing the backbone for instant messaging capabilities.
- **Auth0**: An authentication and authorization platform that allows users to securely log in.
- **Axios**: Popular HTTP client library used to make HTTP requests from the authentication server to interact with the ChatEngine API.

## Pre-requisites

- An authentication server configured to handle user authentication. You'll need to set up the authentication server separately.
- Credentials and configuration for ChatEngine.io and Auth0. Ensure you have the necessary API keys, tokens, and configuration details.
- Node.js and npm installed on your machine to run the authentication server and Chatzr.

## Setting up the Authentication Server

- Clone the repository of the authentication server.
- Install the required dependencies using `npm install`.
- Configure the `.env` file with the necessary environment variables, including API keys, tokens, and other configuration details for ChatEngine.io and Auth0.
- Start the authentication server by running `npm start` or the appropriate command.

## Running

- Clone the Chatzr repository.
- Install the dependencies using `npm install`.
- Configure the necessary environment variables, including the API keys and tokens for ChatEngine.io and Auth0.
- Ensure the authentication server is running.
- Start the chat application by running `npm start` or the appropriate command.
- Access it in your browser by visiting the provided URL.