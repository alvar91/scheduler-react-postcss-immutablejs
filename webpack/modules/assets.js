// Paths
import { source, statics } from '../paths';

// Plugins
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackTemplate from 'html-webpack-template';

export const loadFonts = () => ({
    module: {
        rules: [
            {
                test:    /\.eot|ttf|woff2?(\?v=\d+\.\d+\.\d+)?$/,
                include: source,
                use:     {
                    loader:  'file-loader',
                    options: {
                        name: 'fonts/[name].[hash:5].[ext]',
                    },
                },
            },
        ],
    },
});

export const loadImages = () => ({
    module: {
        rules: [
            {
                test:    /\.jpe?g|png|svg$/,
                include: source,
                use:     {
                    loader:  'url-loader',
                    options: {
                        fallback: 'file-loader',
                        limit:    8192,
                        name:     'images/[name].[hash:5].[ext]',
                    },
                },
            },
        ],
    },
});

export const setupHtml = () => ({
    plugins: [
        new HtmlWebpackPlugin({
            inject:   false,
            template: HtmlWebpackTemplate,
            title:    'Интенсив по React: персональный проект',
            favicon:  `${statics}/favicon/Lectrum-favicon-512x512.png`,
            meta:     [
                {
                    name:    'viewport',
                    content:
                        'user-scalable=no, width=device-width, initial-scale=1',
                },
            ],
            appMountIds: [ 'app', 'spinner' ],
        }),
    ],
});
