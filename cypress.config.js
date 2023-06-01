const {defineConfig} = require('cypress')

module.exports = defineConfig({
    watchForFileChanges: true,
    retries: 1,
    chromeWebSecurity: false,
    video: true,
    videoUploadOnPasses: true,
    screenshotOnRunFailure: true,
    videoCompression: 30,
    screenshotsFolder: 'cypress/screenshots',
    trashAssetsBeforeRuns: true,
    videosFolder: 'cypress/videos',
    env: {
        baseUrl: 'http://www.google.com',
        defaultCommandTimeout: 6000,
        execTimeout: 60000,
        pageLoadTimeout: 60000,
        requestTimeout: 15000,
        responseTimeout: 15000,
        failOnStatusCode: false,
        timeout: 10000,
    },
    e2e: {
        setupNodeEvents(on, config) {
            return require('./cypress/plugins/index.js')(on, config)
        },
        specPattern: 'cypress/**/*{spec.js,feature}',
        supportFile: './cypress/support/index.js',
        viewportWidth: 1280,
        viewportHeight: 800,
    },
})
