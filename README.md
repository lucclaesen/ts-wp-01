# webpack-ts

1. The first thing: create a jsconfig.json on the project root. 
Note that everything that can be placed in a tsconfig.json can also be 
placed in a jsconfig.json.

2. npm init 
3. npm install  --save-dev 
    webpack 
    webpack-dev-server 
    ts-loader 
    source-map-loader

4. Add 2 npm scripts:
    - build : call webpack
    - debug : run webpack-dev-server

5. Webpack configuration
    - the first hurdle is the interplay between path and publicPath and content-base
        * path requires a file system path where the bundling output wll
            be displayed
        * publicPath is a virtual directory where the bundling output can
            be referenced when served. An html file in the content-base directory 
            should refer by means of a script tag to <publicPath>/bundle.js. 
    - setting up typescript support within webpack is as simple as configuring the ts-loader.
    There is one catch, though: tsloader looks for a tsconfig.json to hold the typescript
    compiler settings. We on the other hand use the newer jsconfig.json. If you don'tag
    explicitly instruct tsloader to look into jsconfig, then our setup will ignore e.g.
    the target es5 setting and use es3 (the default), which causes all sorts of compilation 
    errors (e.g. when using accessors).
    - ts-lint is set up as a preloader

6. Setup git for 

6. Setup VSCode:
    - ts-linter extension works seamlessly, provided the presence of a tslint.json file
    - see the .vscode/tasks.json file on how to call npm build and debug scrips from within the command
        palette or with predefined shortcuts.

I've never seen such rich development support in the past.

##Usage

Clone it and detach its remote origin:

- git clone --depth 1 https://github.com/lucclaesen/ts-wp-01.git ${yourNewProject}
- cd ${yourNewProject}
- git remote rm origin