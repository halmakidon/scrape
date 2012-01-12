
/*
 * GET home page.
 */
var util = require('util'),
    newsokuParser = require('../newsokuParser');

exports.index = function(req, res){
  newsokuParser.getListPage(function(err, listPage) {
    if (err) {
      throw err;
    }
    res.render('index', { listPage: listPage })
  });
}
