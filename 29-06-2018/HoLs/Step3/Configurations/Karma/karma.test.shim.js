var appContext = require.context('../../Source', true, /\.spec\.ts/);

appContext.keys().forEach(appContext);