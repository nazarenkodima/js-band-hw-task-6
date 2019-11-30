## How to use

Clone this repo and then in command line type:

`npm install` or `yarn`  to  install all dependencies

--

To launch app run `npm run start` or `yarn start` 


gh-pages link → [js-band-hw-task-5](https://nazarenkodima.github.io/js-band-hw-task-5)


### Project commands
Command name       | Description                                                      
:------------------|:----------------------------------
`start`            | start webpack-dev-server and watch for file changes          |
`build:config`     | build production version
`build:dev`        | builds dev version in dev env  (without code optimizations)
`build:prod`       | builds prod version in prod env (with code optimizations)
`test`             | run tests
`test:watch`       | run test and watch for changes
`commit`           | makes commit with commitizen, run tests and lint check
`code:clean`       | format and lint code together
`code:lint`        | lint code
`code:format`      | format code
`code:check:rules` | shows custom added rules
`deploy`           | deploy project to gh-pages
`gh-pages`         | tell gh-pages what directory to publish



### Directory Overview
```
.
├── jest
│   ├── jest.config.json
│   └── jest.test.config.json
├── source                    
│   ├── index.js
│   ├── jestDummyTest
│   ├── models
│   ├── services
│   └── theme
├── static
│   ├── favicon
│   └── index.html
└── webpack
    ├── configurations
    ├── modules
    ├── paths.js
    └── webpack.config.babel.js
├── .babelrc
├── .editorconfig
├── .eslintignore
├── .eslintrc.js
├── .gitignore 
├── .prettierrc.js
├── nodemon.json
├── package.json
├── package-lock.json
├── README.md
```

### File Structure

**build/**  
This folder should be used for deployment

**jest**  
Contains jest configuration files

**source/**  
The source directory is home to the actual codebase of the application and the target of our build tools

**source/theme**  
Contains CSS files

**source/jestDummyTest**  
Contains Jest dummy test

**source/static**  
Contains HTML template fow webpack to use 

Contains favicon

**webpack**
Setup and configuration files for webpack 

**node_modules/**  
Required dependencies

**.babelrc**  
Configure Babel

**.editorconfig**  
Define coding styles

**.gitignore**  
A standard `.gitignore` file for ignoring files/folders from being added the repo

**.eslintrc**  
Set up options and rules for ESLint

**.eslingignore**  
A list if ignored files for ESLint

**prettierrc.js**  
Configure Prettier

**package.json**  
Project settings, scripts and list of all dependencies

**nodemon.json**  
Configuration settings for nodemon to monitor changes and automatically restart server

**README.md**  
The project readme
