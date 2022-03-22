# Website Deployment Guide

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Step 1. Install the dependencies needed by the project:

### `npm install`

This command will install all dependencies found in the package.json file. Important to use NodeJs version 17.7.2 for the correct functioning of styles in SASS (.scss files).


## Step 2. Build the project:

### `npm run build`

This command will build a folder called build, in it there will be the files optimized for deployment.

## Step 3. Run the project on the server:

### `node ./server.js`

The project will run on the port configured in the server environment, if there is no port configuration, by default the project will run on port 4000, defined in the server.js file

