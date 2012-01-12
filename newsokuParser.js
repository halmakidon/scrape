// HTMLコンテンツからリンク（aタグ）を取り出す

var url = require('url'),
    embedJQuery = require('./embedJQuery');

// jQueryでaタグを取り出しcallbackを起動
exports.getEntries = function(targetUrl, callback) {
    embedJQuery.jQueryRequest(targetUrl, function(err, window, $) {
        if (err) {
            if (callback) {
                callback(err);
            } else {
                throw err;
            }
            return;
        }

        var entries = [];
        $('.blogbody').each(function() {
            entries.push($(this).html());
        });

        if (callback) {
            callback(null, entries);
        }
    });
}

