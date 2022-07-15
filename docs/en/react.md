# Website Deployment Guide

After [NodeJs installation](https://github.com/AddressForAll/suporte/blob/master/docs/pt/nodejs.md), using AddressForAll's infrastructure complaince.  This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Summary:
```sh
npm install        # step 1
npm run build      # step 2
node ./server.js   # step 3 (optional)
```
## Step 1. Install the dependencies needed by the project

`npm install`<br/>This command will install all dependencies found in the package.json file. Important to use NodeJs *version 16.15+*.

Note: for the correct functioning of styles in some SASS (`.scss` files), need NodeJs *v17.7.2+*.

## Step 2. Build the project

`npm run build`<br/>This command will build a folder called build, in it there will be the files optimized for deployment.

## Step 3. (optional) Run the project on the server

`node ./server.js`<br/>The project will run on the port configured in the server environment, if there is no port configuration, by default the project will run on port 4000, defined in the `server.js` file
