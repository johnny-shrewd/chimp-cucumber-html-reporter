const path = require('path');
const Chimp = require('chimp');
const reporter = require('cucumber-html-reporter');
const async = require('async');
const options = require('./configuration/config');

async.series([
    function (callback) {
        const chimpDefaultOptions = require(path.resolve(process.cwd() + '/node_modules/chimp/dist/bin/default.js'))
        options._ = []
        const chimpOptions = Object.assign({}, chimpDefaultOptions, options)
        const chimp = new Chimp(chimpOptions)
        chimp.init(function (err, results) {
            if (err == "Cucumber steps failed") err = null //stops async crashing out on failed tests, still want the report and cleanup
            return callback(err, results);
        })
    },
    function (callback) {
        reporter.generate(options)
        callback()
    }
], function (err, results) {
    //console.log('finished')
    process.exit() //chimp not exiting properly
})