# How to Create a VITE React App

## Create a new Vite
1. `npm create vite@latest`
   > Yes 
2.  Select a Name
3.  Select a Framework: `React`
4.  Select a Variant: `Javascript`
5.  `cd 'your new directory'`
6.  `npm install`
7.  `npm run dev`

## Install React Component Libraries
1. `npm install aws-amplify @aws-amplify/ui-react antd react-router-dom`
2. __Initialize new Amplfiy Project__ 
   1. `amplify init`
   2. Amplify Gen 1?: Yes
   3. Project Name: Default
   4. Initialize Project with current Config?: **NO**
      1. environment name: dev
      2. default editior: VSCode
      3. app type: javascript
      4. js framework: react
      5. Source Directory: src
      6. __**CHANGE**__ Distribution Directory Path: `dist`
      7. Build command: npm run-script build
      8. __**CHANGE**__ Start Command: `npm run-script dev`
      9. Your default AWS Profile
3. __Adding Amplify Authentication__
   1. `amplify add auth`
   2. Default Configuration
   3. >username
   4. No Advanced Settings
   5. Sync Progress: `amplify push`