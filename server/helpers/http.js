(function () {

  'use strict';

  var _ = require('lodash');
  var request = require('request-promise');

  var SERVER_URL = process.env.SERVER_URL || 'http://localhost:4000';

  var combineUris = function combineUris(baseUri, relativeUri) {
    return relativeUri ? _.trimEnd(baseUri, '/') + '/' + _.trimStart(relativeUri, '/') : baseUri;
  };

  var buildApiPath = function buildApiPath(path) {
    return combineUris(SERVER_URL, path);
  };

  var jsonRequest = function jsonRequest(path, options) {
    var opts = {
      method: 'GET',
      uri: path,
      headers: {
        'Accept': 'application/json'
      },
      json: true // Automatically parses the JSON string in the response
    };

    opts = _.merge(opts, options);
    return request(opts);
  };

  var RestRequest = function RestRequest(path) {
    this.path = buildApiPath(path);
  };

  RestRequest.prototype.get = function apiGet(params) {
    return jsonRequest(this.path, { method: 'GET', qs: params });
  };

  RestRequest.prototype.post = function apiPost(data) {
    return jsonRequest(this.path, { method: 'POST', body: data });
  };

  RestRequest.prototype.put = function apiPut(data) {
    return jsonRequest(this.path, { method: 'PUT', body: data });
  };

  RestRequest.prototype.delete = function apiDelete(data) {
    return jsonRequest(this.path, { method: 'DELETE', body: data });
  };

  module.exports = {
    combineUris: combineUris,
    buildApiPath: buildApiPath,
    jsonRequest: jsonRequest,
    RestRequest: RestRequest
  };

})();
