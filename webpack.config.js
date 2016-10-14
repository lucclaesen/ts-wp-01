var path = require('path');

module.exports = {
    entry : {
        javascript : "./src/main.ts",
        // html : "./src/index.html" 
    },
    output : {
        path : path.resolve(__dirname, "dist"),
        publicPath : "/dist/",
        filename : 'bundle.js'
    },

    devtool : 'source-map',
    resolve : {
        extensions : ["", ".webpack.js", ".web.js", ".ts", ".js"]
    },
    module : {
        loaders : [
            {
                test : /\.tsx?$/,
                loader : "ts-loader"
            },
            // {
            //     test: /\.html$/,
            //     loader: "file?name=[name].[ext]",
            // },
        ],
        preLoaders : [
            {
                test : /\.js$/,
                loader : "source-map-loader"
            }
        ]
    }
    
}