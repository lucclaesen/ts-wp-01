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
    - 