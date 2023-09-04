module.exports = {
    transform: {
        '^.+\\.js?$': require.resolve('babel-jest')
    },

    moduleNameMapper: {
        "^js/(.*)$": "<rootDir>/$1"
    },

    testEnvironment: "jsdom",
    resetMocks: false,
};

