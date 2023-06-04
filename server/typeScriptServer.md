1. yarn init OR yarn init -y (To say yes to all default setting)
2. yarn install
3. yarn add -D typescript
4. yarn tsc -init

{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "build"
  },
  "lib": ["es2015"]
}

5. yarn add express --save
6. yarn add @types/express -D
7. yarn add nodemon -D
8. mkdir src
9. create server.ts in the src folder
10. Configure Typescript linitng with eslint
   - yarn add eslint -D
   - yarn eslint --init
   This will ask you a series of questions. For this project we’ll answer the following:
   How would you like to use ESLint?: To check syntax and find problems
   What type of modules does your project use?: JavaScript modules (import/export)
   Which framework does your project use?: None of these
   Does your project use TypeScript?: Yes
   Where does your code run?: Node
   What format do you want your config file to be in?: JavaScript
11. add these scripts to package.json file

  "scripts": {
    "build": "yarn tsc",
    "start": "yarn run build && nodemon build/server.js",
    "lint": "eslint . --ext .ts",
    "test": "echo \"Error: no test specified\" && exit 1"
  }