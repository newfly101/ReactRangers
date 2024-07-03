const path = require('path');
// const {webpack} = require("react-app-rewired/config-overrides");

module.exports = function override(config, env) {
    config.resolve.alias = {
        ...(config.resolve.alias || {}),
        '@': path.resolve(__dirname, 'src'),
    };
    return config;
};

// module.exports = function override(config, env) {
//     // Add a new loader for CSS files
//     config.module.rules.push({
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'],
//     });
//
//     // Add a new plugin for UglifyJs
//     config.plugins.push({
//         new webpack.optimize.UglifyJsPlugin({
//             sourceMap: true,
//             uglifyOptions: {
//                 ecma: 6,
//                 warnings: false,
//                 safari10: true,
//             },
//         }),
//     });
//
//     return config;
// };