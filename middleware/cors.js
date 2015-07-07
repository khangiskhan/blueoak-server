/* Copyright © 2015 PointSource, LLC. All rights reserved. */
/*
 * Use the node-cors library to enable CORS on all express.js apps and endpoints.
 *
 * All config options are passed directly to the cors library.
 * See https://github.com/troygoode/node-cors#configuration-options
 */

var _ = require('lodash'),
    cors = require('cors');

exports.init = function(app, config, logger, callback) {
    var cfg = config.get('cors');
    app.use(cors(cfg));
    logger.debug('Enabled CORS.');
    callback();
};
