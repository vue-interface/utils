module.exports = {
    presets: [
        ['@vue/app', {
            corejs: 3,
            debug: false,
            modules: false,
            useBuiltIns: "entry", // or "usage"
            targets: {
                browsers: "> .25%, not dead",
            }
        }]
    ]
};