var http = require("http");
var DEBUG = (process.env.DEBUG || false);
var log = (function log$() {
  /* log fetch.sibilant:6:0 */

  return (function() {
    if (DEBUG) {
      return console.log.apply(this, arguments);
    }
  }).call(this);
});
var fetch = (function fetch$(url, cb) {
  /* fetch fetch.sibilant:8:0 */

  return http.get(url, (function(res) {
    /* fetch.sibilant:15:12 */
  
    var rawData = [];
    log("status", res.statusCode);
    res.setEncoding("utf8");
    res.on("data", (function(chunk) {
      /* fetch.sibilant:19:29 */
    
      return rawData.push(chunk);
    }));
    return res.on("end", (function() {
      /* fetch.sibilant:20:28 */
    
      var data = rawData.join(""),
          parsedData = null;
      (function() {
        try {
          parsedData = JSON.parse(data);
          log("fetch parsed", rawData.length, "data chunks");
          return console.log("Error", e);
        } catch (e) {
          return ;
        }
      }).call(this);
      return cb(parsedData);
    }));
  }));
});
module.exports = fetch;
