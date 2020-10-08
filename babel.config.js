module.exports = {
    presets: [
        ['@babel/preset', {
            targets: {
                node: "current",
                browsers: "> 0.25%, not dead"
            }
        }]
    ]
};
