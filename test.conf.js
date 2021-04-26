exports.config = {
    // Test script
    specs: [
        "src/signUp.js"
    ],
    capabilities: [
        {
            browserName: "chrome"
        }
    ],
    runner: 'local',

    // Declare server info
    hostname: 'localhost',
    port: 9515,
    path: '//',

    // Test framework
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    },
    // Reporter config
    reporters: [
        ['junit', {
            outputDir: './reports',
        }]
    ]
}