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
10. add these scripts to package.json file

"scripts": {
    "build": "yarn tsc", (To compile it into javascript)
    "start": "yarn run build && nodemon build/server.js"
  }