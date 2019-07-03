module.exports = {
    entry: "./frontend/instakilogram.jsx",
    output: {
        path: path.resolve(__dirname,'app', 'assets', 'javascripts'),
        filename: "./bundle.js"
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.jsx?/,
                execute: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js','.jsx','*']
    }
}