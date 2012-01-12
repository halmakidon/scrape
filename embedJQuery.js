var fs = require('fs'),
  util = require('util'),
  vm = require('vm'),
  jsdom = require('jsdom'),
  httpsubr = require('./httpsubr');

//Jqueryを読み込む
var jQueryPath = __dirname + '/jquery.min.js';
var jQueryScript = vm.createScript(fs.readFileSync(jQueryPath, 'utf-8'),
                              jQueryPath);

// HTMLコンテンツにJQueryを埋め込み
// windowオブジェクトとjQueryオブジェクトを変える
exports.embededJQuery = function(body, options, callback) {
  // HTMLファイル中のscriptタグの処理を無効にしてwindowを作成
  options = options || {};
  options.features = options.features || {};
  options.features.FetchExternalResources = false;
  options.features.ProcessExternalResources = false;
  var window = jsdom.jsdom(body, null, options).createWindow();

  //jQueryの実行
  jQueryScript.runInNewContext({
    window: window,
    navigator: window.navigator,
    location: window.location,
    setTimeout: setTimeout,
  });

  // callbackを実行
  if (callback) {
    callback(null, window, window.jQuery);
  }
}

exports.jQueryRequest = function(targetUrl, callback) {
  httpsubr.get({ uri: targetUrl }, function(err, response, raw) {
    if (!err) {
      if (response.statusCode != 200) {
        err = new Error('HTTP Error');
      }
    }
    if (err) {
      if (callback) {
        callback(err);
      } else {
        throw err;
      }
      return;
    }

    var body = httpsubr.convertCharset(response, raw);

    // コンテンツのbaseURIをtargetURLにするためのurlオプションを指定
    exports.embededJQuery(body, {url: targetUrl }, callback);
  });
}
