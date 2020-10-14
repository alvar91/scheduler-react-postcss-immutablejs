module.exports = api => {
    api.cache.never();

    return {
        presets: [
            '@babel/react',
            [
                '@babel/env',
                {
                    useBuiltIns: 'entry',
                    shippedProposals: true,
                    spec: true,
                    debug: false,
                },
            ],
        ],
        plugins: [
            ['@babel/proposal-decorators', { legacy: true }],
            ['@babel/proposal-class-properties', { loose: true }],
            '@babel/proposal-function-bind',
            '@babel/proposal-object-rest-spread',
            'react-hot-loader/babel',
        ],
    };
};
