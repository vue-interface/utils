module.exports = {
    presets: [
        ['@vue/app', {
            corejs: 3,
            useBuiltIns: "entry", // or "entry"
            targets: {
                browsers: "> .25%, not dead",
            }
        }]
    ]
};