var webpackConfig = require('../WebPack/webpack.test.config');
var path = require('path');

module.exports = function (config) {
    var _config = {
        basePath: '.',

        frameworks: ['jasmine'],

        files: [
            { pattern: './karma.test.shim.js', watched: false }
        ],

        preprocessors: {
            '../../Source/**/!(*spec).ts': ['coverage'],
            './karma.test.shim.js': ['webpack', 'sourcemap']
        },

        webpack: webpackConfig,

        reporters: ['progress', 'html', 'nunit', 'coverage-istanbul'],

        htmlReporter: {
            outputFile: '../../Reports/TestReport.html',
            pageTitle: 'Test Report',
            subPageTitle: 'Calculator Application Tests',
            groupSuites: true,
            useCompactStyle: true,
            useLegacyStyle: true,
            focusOnFailures: true
        },

        nunitReporter: {
            outputFile: '../../Reports/TestResults.xml',
            suite: ''
        },

        coverageIstanbulReporter: {
            dir: path.resolve(process.cwd() + '/Reports/Coverage'),
            reports: [
                'html',
                'lcov',
                'cobertura',
                'lcovonly',
                'text-summary'
            ],
            fixWebpackSourcePaths: true,
            skipFilesWithNoCoverage: true,
            'report-config': {
                html: {
                    subdir: 'html'
                }
            },
            thresholds: {
                emitWarning: false,
                global: {
                    statements: 40,
                    lines: 40,
                    branches: 40,
                    functions: 40
                }
            }
        },

        webpackMiddleware: {
            stats: 'errors-only'
        },

        webpackServer: {
            noInfo: true
        },

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['jsdom'],
        singleRun: true
    };

    config.set(_config);
};