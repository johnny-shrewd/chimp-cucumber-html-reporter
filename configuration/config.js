module.exports = {
    // - - - - GULP CHIMP SETTINGS - - - -
    showXolvioMessages: false,
    timeout: 5000,
    port: 4455,

    // - - - - GULP CHIMP CUCUMBER - - - -
    jsonOutput: './reports/json/cucumber.json',
    screenshotsOnError: true,
    screenshotsPath: './reports/screenshots',
    saveScreenshotsToDisk: true,
    saveScreenshotsToReport: true,

    // - - - - REPORTER - - - -
    theme: 'bootstrap',
    jsonFile: './reports/json/cucumber.json',
    output: './reports/html/cucumber.html',
    reportSuiteAsScenarios: true,
    launchReport: false
}